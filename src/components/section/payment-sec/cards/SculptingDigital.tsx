import Grid from "@mui/material/Grid2";
import BgColorLayout from "../../../layout/BgColorLayout";
import { Box, Container, Stack, Typography } from "@mui/material";
import CircleDashed from "../../../shapes/CircleDashed";
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
} from "../../../../assets";
import { ShopifyLogo } from "../../../../assets/svg/ShopifyLogo";

// Reusable component for icons
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

const SculptingDigital = () => {
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
            <BgColorLayout height="auto" styleProps={{ py: 5 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid size={{ md: 6 }}>
                            <Stack height={"100%"}>
                                <div
                                    style={{
                                        position: "relative",
                                        height: 700,
                                        width: 700,
                                    }}
                                >
                                    <CircleDashed
                                        svgHeight={500}
                                        svgWidth={500}
                                    />

                                    {/* Center Logo */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform:
                                                "translate(-133%, -133%)",
                                            backgroundColor: "#e5e2ff",
                                            height: 120,
                                            width: 120,
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src={LogoIcon} alt="" />
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
                                </div>
                            </Stack>
                        </Grid>
                        <Grid size={{ md: 6 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    textAlign: "end",
                                    gap: 2,
                                }}
                            >
                                <Typography variant="h3">
                                    Sculpting a Digital Transaction Revolution
                                    with Finesse
                                </Typography>
                                <Typography component={"p"}>
                                    In a world awash with complexities, our
                                    cards emerge as the catalysts of simplicity.
                                    They liberate businesses from the burdens of
                                    secure online payments, empowering them to
                                    nurture growth unhindered. Within this realm
                                    of ease, every payment method harmonizes
                                    with your enterprise&apos;s unique
                                    requirements, fostering an ecosystem of
                                    financial fluidity.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BgColorLayout>
        </Box>
    );
};

export default SculptingDigital;
