import { Box } from "@mui/material";

interface BgColorLayoutProps {
    children: React.ReactNode;
}

const BgColorLayout = ({ children }: BgColorLayoutProps) => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                backgroundImage: "linear-gradient(106deg, #110d34, #9e54f0)",
            }}
        >
            {children}
        </Box>
    );
};

export default BgColorLayout;
