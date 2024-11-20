import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface FeatureCardProps {
    icon: string;
    heading: string;
    subheading?: string;
    cardStyleProps?: object;
    cardContentStyleProps?: object;
    headVariant?: TypographyProps["variant"];
}

const FeatureCard = ({
    icon,
    heading,
    subheading,
    cardStyleProps,
    cardContentStyleProps,
    headVariant,
}: FeatureCardProps) => {
    return (
        <Card sx={cardStyleProps}>
            <CardContent sx={cardContentStyleProps}>
                {icon}
                <Typography variant={headVariant || "h5"}>{heading}</Typography>
                <Typography variant="subtitle1" component={"p"}>
                    {subheading}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
