import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface FeatureCardProps {
    icon: string;
    heading: string;
    subheading?: string;
    cardStyleProps?: object;
    cardContentStyleProps?: object;
}

const FeatureCard = ({
    icon,
    heading,
    subheading,
    cardStyleProps,
    cardContentStyleProps,
}: FeatureCardProps) => {
    return (
        <Card sx={cardStyleProps}>
            <CardContent sx={cardContentStyleProps}>
                {icon}
                <Typography variant="h5">{heading}</Typography>
                <Typography variant="subtitle1" component={"p"}>
                    {subheading}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
