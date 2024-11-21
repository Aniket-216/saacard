import { Box } from "@mui/material";

const DashedCurvedArrow = () => {
    return (
        <Box
            sx={{
                width: 200,
                height: 150,
                border: "2px dashed purple",
                borderRight: "none",
                borderTop: "none",
                position: "relative",
                borderBottomLeftRadius: 10,
            }}
        >
            <Box
                sx={{
                    content: '""',
                    position: "absolute",
                    rotate: "270deg",
                    bottom: -6, // Align with the curve
                    right: -6, // Align with the curve
                    width: 10,
                    height: 10,
                    borderRight: "2px solid purple",
                    borderBottom: "2px solid purple",
                    transform: "rotate(45deg)",
                }}
            />
        </Box>
    );
};

export default DashedCurvedArrow;
