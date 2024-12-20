import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface FeatureCardProps {
    Icon: React.ElementType;
    heading: string;
    subheading?: string;
    iconStyleProps?: object;
    cardStyleProps?: object;
    cardContentStyleProps?: object;
    headVariant?: TypographyProps["variant"];
    subHeadingVariant?: TypographyProps["variant"];
}

const FeatureCard = ({
    Icon,
    heading,
    subheading,
    iconStyleProps,
    cardStyleProps,
    cardContentStyleProps,
    headVariant,
    subHeadingVariant,
}: FeatureCardProps) => {
    return (
        <Card
            sx={{
                minHeight: "300px", // Set a fixed height
                width: "100%", // Full width of its container
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                ...cardStyleProps, // Allow customization
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    px: 2, // Padding inside card content
                    ...cardContentStyleProps, // Allow customization
                }}
            >
                <Icon
                    height={40}
                    width={40}
                    sx={{ color: "#6f00eb", ...iconStyleProps }}
                />
                <Typography
                    variant={headVariant || "h5"}
                    sx={{
                        color: "inherit",
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant={subHeadingVariant || "subtitle1"}
                    component={"p"}
                    sx={{
                        color: "inherit",
                    }}
                >
                    {subheading}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
