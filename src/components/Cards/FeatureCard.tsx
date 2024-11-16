import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface FeatureCardProps {
    icon: string;
    heading: string;
    subheading?: string;
}

const FeatureCard = ({ icon, heading, subheading }: FeatureCardProps) => {
    return (
        <Card
            sx={{
                minWidth: 354,
                minHeight: 276,
                boxShadow: "0 0 40px 5px rgba(132, 132, 132, .2)",
                borderRadius: "30px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
                {icon}
                <Typography>{heading}</Typography>
                <Typography>{subheading}</Typography>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
