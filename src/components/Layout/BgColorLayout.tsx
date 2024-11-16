import { Box, styled } from "@mui/material";

interface BgColorLayoutProps {
    children: React.ReactNode;
    height?: string;
    backgroundImage?: string;
    bgImage?: boolean;
    bgcolor?: string;
    styleProps?: object;
}

const BgBox = styled(Box, {
    shouldForwardProp: (prop) =>
        prop !== "bgImage" && prop !== "height" && prop !== "bgcolor",
})<BgColorLayoutProps>(({ bgImage, height, bgcolor }) => ({
    backgroundImage: bgImage
        ? "linear-gradient(106deg, #110d34, #9e54f0)"
        : undefined,
    backgroundColor: bgImage ? undefined : bgcolor,
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
    bgcolor = "#faf5ff",
    styleProps,
}: BgColorLayoutProps) => {
    return (
        <BgBox
            bgImage={bgImage}
            height={height}
            bgcolor={bgcolor}
            sx={{ ...styleProps }}
        >
            {children}
        </BgBox>
    );
};

export default BgColorLayout;
