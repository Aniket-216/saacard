import React, { useState, useRef } from "react";
import {
  Button,
  Menu,
  MenuItem,
  MenuProps,
  SxProps,
  Theme,
} from "@mui/material";

interface MenuItemData {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface HoverMenuProps {
  buttonText: string;
  menuItems: MenuItemData[];
  buttonSx?: SxProps<Theme>;
  menuSx?: SxProps<Theme>;
}

const HoverMenu: React.FC<HoverMenuProps> = ({
  buttonText,
  menuItems,
  buttonSx,
  menuSx,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutId) clearTimeout(timeoutId);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setAnchorEl(null);
    }, 100); // Small delay to prevent menu from closing when moving from button to menu
  };

  const handleMenuMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleMenuMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (onClick?: () => void, href?: string) => {
    if (onClick) onClick();
    if (href) window.location.href = href;
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-controls={open ? "hover-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={buttonSx}
      >
        {buttonText}
      </Button>
      <Menu
        id="hover-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          onMouseEnter: handleMenuMouseEnter,
          onMouseLeave: handleMenuMouseLeave,
          "aria-labelledby": "hover-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            mt: 0.5,
            ...menuSx,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItemClick(item.onClick, item.href)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default HoverMenu;
