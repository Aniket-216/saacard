import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
    Container,
    Drawer,
    Menu,
    MenuItem,
    IconButton,
    Stack,
    CssBaseline,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "./navbarOptions"; // Ensure you have the navItems defined
import { Sascard } from "../../assets";

const NavList = ({ ...props }) => {
    const [anchorEls, setAnchorEls] = useState<Map<string, HTMLElement | null>>(
        new Map(),
    );

    const handleMenuOpen = (
        event: React.MouseEvent<HTMLElement>,
        label: string,
        hasChildren: boolean,
    ) => {
        if (hasChildren) {
            setAnchorEls(new Map(anchorEls.set(label, event.currentTarget)));
        }
    };

    const handleMenuClose = (label: string) => {
        const newAnchorEls = new Map(anchorEls);
        newAnchorEls.delete(label);
        setAnchorEls(newAnchorEls);
    };

    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            gap={3}
            ml={{ xs: 3, sm: 0 }}
            mt={{ xs: 3, sm: 0 }}
            width={{ xs: "150px", sm: "initial" }}
            {...props}
        >
            {/* Map the navItems without storing them in state */}
            {navItems.map((navItem) => (
                <div
                    key={navItem.link}
                    onMouseEnter={(e) =>
                        handleMenuOpen(
                            e,
                            navItem.label,
                            Boolean(navItem.children),
                        )
                    }
                    onMouseLeave={() => handleMenuClose(navItem.label)}
                >
                    {/* <Link to={navItem.link} style={{ textDecoration: "none" }}>
                        <Button
                            aria-haspopup="true"
                            sx={{ color: "white" }}
                            onClick={(e) =>
                                handleMenuOpen(
                                    e,
                                    navItem.label,
                                    Boolean(navItem.children),
                                )
                            }
                        >
                            {navItem.label}
                        </Button>
                    </Link> */}
                    <NavLink
                        key={navItem.link}
                        to={navItem.link}
                        style={{
                            fontSize: "1rem",
                            textDecoration: "none",
                            color: "white",
                        }}
                        className={({ isActive }) =>
                            isActive ? "nav-link-active" : "nav-link"
                        }
                    >
                        {navItem.label}
                    </NavLink>
                    {navItem.children && (
                        <Menu
                            anchorEl={anchorEls.get(navItem.label)}
                            open={Boolean(anchorEls.get(navItem.label))}
                            onClose={() => handleMenuClose(navItem.label)}
                            MenuListProps={{
                                onMouseLeave: () =>
                                    handleMenuClose(navItem.label), // Close when mouse leaves the menu
                            }}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                        >
                            {navItem.children.map((child) => (
                                <MenuItem
                                    key={child.link}
                                    onClick={() =>
                                        handleMenuClose(navItem.label)
                                    }
                                >
                                    <Link
                                        to={child.link}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        {child.label}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    )}
                </div>
            ))}
        </Stack>
    );
};

const Nav = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            {/* Mobile Menu Icon */}
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                X
            </IconButton>
            {/* Mobile Drawer */}
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor="right"
                sx={{
                    display: { xs: "inherit", md: "none" },
                }}
            >
                <NavList />
            </Drawer>
            {/* Desktop Menu */}
            <NavList
                sx={{
                    display: { xs: "none", md: "inherit" },
                }}
            />
        </>
    );
};

const Navbar: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <AppBar
                sx={{
                    backgroundImage:
                        "linear-gradient(106deg, #110d34, #9e54f0)",
                }}
                position="static"
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            {/* App Name / Logo */}
                            <img src={Sascard} alt="logo" />
                            {/* Navigation Links */}
                            <Nav />
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;
