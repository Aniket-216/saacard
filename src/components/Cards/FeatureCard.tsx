import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface FeatureCardProps {
    icon: string;
    heading: string;
    subheading: string;
}

const FeatureCard = ({ icon, heading, subheading }: FeatureCardProps) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                {icon}
                <Typography>{heading}</Typography>
                <Typography>{subheading}</Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
