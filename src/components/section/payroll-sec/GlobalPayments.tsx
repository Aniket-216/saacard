import { Box, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
    DiscordLogoBold,
    DriveLogo,
    DropboxLogoBold,
    InfoMedicsLogo,
    LogoIcon,
    MasterCard,
    SlackLogoBold,
    TelegramLogoBold,
    YoutubeLogoBold,
} from "../../../assets";
import { ShopifyLogo } from "../../../assets/svg/ShopifyLogo";
import CircleDashed from "../../shapes/CircleDashed";

const PositionedIcon = ({
    Icon,
    style,
    imgSrc,
}: {
    Icon?: React.ElementType;
    style: React.CSSProperties;
    imgSrc?: string;
}) => (
    <div
        style={{
            position: "absolute",
            backgroundColor: "#fff",
            height: 40,
            width: 40,
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...style,
        }}
    >
        {Icon ? <Icon height={28} width={28} /> : <img src={imgSrc} alt="" />}
    </div>
);

const GlobalPayments = () => {
    const iconPositions = [
        { Icon: TelegramLogoBold, style: { top: 160, left: 170 } },
        { Icon: DiscordLogoBold, style: { top: 270, left: 150 } },
        { Icon: SlackLogoBold, style: { top: 250, left: 20 } },
        { Icon: YoutubeLogoBold, style: { top: 290, right: 360 } },
        { Icon: DriveLogo, style: { top: 390, left: 80 } },
        { Icon: ShopifyLogo, style: { bottom: 290, left: 200 } },
        { Icon: DropboxLogoBold, style: { bottom: 330, right: 230 } },
        { imgSrc: MasterCard, style: { top: 0, left: 200 } },
        { Icon: InfoMedicsLogo, style: { top: 120, right: 330 } },
    ];
    return (
        <Box sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ md: 6 }}>
                        <Stack
                            height={"100%"}
                            justifyContent={"center"}
                            position={"relative"}
                        >
                            <CircleDashed svgHeight={500} svgWidth={500} />

                            {/* Center Logo */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "#e5e2ff",
                                    height: 120,
                                    width: 120,
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={LogoIcon} alt="logo-icon" />
                            </div>

                            {/* Positioned Icons */}
                            {iconPositions.map((pos, index) => (
                                <PositionedIcon
                                    key={index}
                                    Icon={pos.Icon}
                                    style={pos.style}
                                    imgSrc={pos.imgSrc}
                                />
                            ))}
                        </Stack>
                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Stack
                            sx={{
                                display: "flex",
                                height: "100%",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                textAlign: "end",
                                justifyContent: "center",
                                gap: 2,
                            }}
                        >
                            <Typography variant="h3">
                                Bringing Global Payments Through a Unified
                                Standard
                            </Typography>
                            <Typography component={"p"}>
                                Venturing into uncharted payment territory,
                                (Website Name) pioneers a path that merges
                                cutting-edge technology with unwavering
                                financial security, shaping a payment landscape
                                poised for a transformative tomorrow.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default GlobalPayments;
