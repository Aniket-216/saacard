import { Box, styled } from "@mui/material";

interface BgColorLayoutProps {
    children: React.ReactNode;
    height?: string;
    backgroundImage?: string;
    bgImage?: boolean;
}

const BgBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "height",
})<BgColorLayoutProps>(({ bgImage, height }) => ({
    backgroundImage: bgImage
        ? "linear-gradient(106deg, #110d34, #9e54f0)"
        : undefined,
    backgroundColor: bgImage ? undefined : "#faf5ff",
    height: height || "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const BgColorLayout = ({
    children,
    height = "1050px",
    bgImage,
}: BgColorLayoutProps) => {
    return (
        <BgBox bgImage={bgImage} height={height}>
            {children}
        </BgBox>
    );
};

export default BgColorLayout;
