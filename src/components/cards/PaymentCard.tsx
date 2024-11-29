import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider, Stack, Typography } from "@mui/material";
import { PaymentOption } from "../../constant/paymentOptions";
import { SealCheckBold } from "../../assets";

import { motion } from "motion/react";

const PaymentCard = ({
    option,
    isMonthly,
}: {
    option: PaymentOption;
    isMonthly: boolean;
}) => {
    return (
        <Card
            sx={{
                minWidth: 275,
                backgroundImage: "linear-gradient(#110d34, #9e54f0)",
                borderRadius: 5,
                padding: 4,
            }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <Stack flexDirection={"row"} alignItems={"flex-end"}>
                        {/* Animate the price text */}
                        <motion.div
                            key={isMonthly ? "yearly" : "monthly"}
                            initial={{
                                opacity: 0,
                                transform: "translateY(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                transform: "translateY(-10px)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight={"bold"}
                                color="white"
                            >
                                ₹
                                {!isMonthly
                                    ? option.pricing.monthly
                                    : option.pricing.yearly}
                            </Typography>
                        </motion.div>
                        <motion.div
                            key={isMonthly ? "year" : "month"}
                            initial={{
                                opacity: 0,
                                transform: "translateY(10px)",
                            }}
                            animate={{
                                opacity: 1,
                                transform: "translateY(0px)",
                            }}
                            exit={{
                                opacity: 0,
                                transform: "translateY(-10px)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Typography color="white">
                                /{!isMonthly ? "month" : "year"}
                            </Typography>
                        </motion.div>
                    </Stack>
                    <Stack>
                        <Typography variant="h6" color="white">
                            {option.name}
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack spacing={4}>
                        <Typography variant="h6" color="white">
                            What&apos;s included?
                        </Typography>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    transform: "translateY(10px)",
                                },
                                visible: {
                                    opacity: 1,
                                    transform: "translateY(0px)",
                                },
                            }}
                            transition={{
                                duration: 0.5,
                                staggerChildren: 0.2, // Stagger the animations for each feature
                            }}
                        >
                            <Stack spacing={2}>
                                {option.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                transform: "translateY(10px)",
                                            },
                                            visible: {
                                                opacity: 1,
                                                transform: "translateY(0px)",
                                            },
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: idx * 0.2, // Delay each feature's animation based on its index
                                        }}
                                    >
                                        <Stack
                                            flexDirection={"row"}
                                            alignItems="center"
                                            columnGap={2}
                                        >
                                            <SealCheckBold
                                                height={20}
                                                width={20}
                                                color="white"
                                            />
                                            <Typography
                                                fontWeight={"bold"}
                                                variant="body1"
                                                color="white"
                                            >
                                                {feature}
                                            </Typography>
                                        </Stack>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PaymentCard;
