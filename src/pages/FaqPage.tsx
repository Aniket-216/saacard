import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import { faqOptions } from "../constant/faqOptions";

const FaqPage = () => {
    return (
        <Container maxWidth="xl">
            <Stack my={10}>
                <Stack textAlign={"center"} spacing={2}>
                    <Typography variant="h1">
                        Commence Processing Payments [Website Name]
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                        Drive revenue growth and maximize business opportunities
                        by diving into insights on our unique [Website Name]
                        services, streamlining your transactions effortlessly
                    </Typography>
                </Stack>
                <Stack spacing={10} my={10}>
                    {faqOptions.map((faqs, index) => (
                        <Stack key={index} spacing={5}>
                            <Typography variant="h4" fontWeight={700}>
                                {faqs.category}
                            </Typography>
                            <Stack spacing={5}>
                                {faqs.questions.map((faq, idx) => (
                                    <Accordion key={idx}>
                                        <AccordionSummary
                                            expandIcon={"^"}
                                            aria-controls={`panel${index}-${idx}-content`}
                                            id={`panel${index}-${idx}-header`}
                                        >
                                            <Typography variant="h6">
                                                {faq.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {faq.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Container>
    );
};

export default FaqPage;
