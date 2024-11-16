export interface FaqOption {
    category: string;
    questions: {
        question: string;
        answer: string;
    }[];
}

export const faqOptions: FaqOption[] = [
    {
        category: "Core Insights",
        questions: [
            {
                question: "What drives our company's mission?",
                answer: "Our mission is fueled by our commitment to excellence, customer satisfaction, and innovation in every aspect of our business.",
            },
            {
                question: "Is [Website Name] safe for online transactions?",
                answer: "[Website Name] employs top-tier security measures, including encryption and fraud detection, to ensure the safety of both customers and merchants.",
            },
            {
                question: "Do I need a merchant account for [Website Name]?",
                answer: "Yes, a merchant account is essential for receiving payments through our gateway, linking to your bank for seamless payment processing.",
            },
            {
                question: "How do you reach customer support?",
                answer: "You can easily contact our responsive support team through email, phone, or the live chat feature on our website.",
            },
            {
                question: "What is your company's approach to data privacy?",
                answer: "We prioritize data privacy and security, following strict protocols to protect your personal information. Read our Privacy Policy for details.",
            },
        ],
    },
    // Payment Solutions
    {
        category: "Payment Solutions",
        questions: [
            {
                question: "How can you update payment information?",
                answer: "You can conveniently update your payment details by logging into your account and navigating to the 'Payment Options' section.",
            },
            {
                question: "Why might payments be declined?",
                answer: "Payment declines can occur due to insufficient funds, expired cards, or security checks. Please double-check your payment information.",
            },
            {
                question: "What's the billing cycle for subscriptions?",
                answer: "Subscriptions are billed monthly on the anniversary of your sign-up date, unless otherwise specified in your subscription agreement.",
            },
            {
                question: "Can you receive refunds for purchases?",
                answer: "Absolutely, our refund policy permits eligible refunds within 30 days of purchase, subject to our terms and conditions.",
            },
            {
                question: "Is it possible to split payments between two cards?",
                answer: "Unfortunately, we don't support split payments between multiple cards for a single transaction at this time.",
            },
        ],
    },
    // Banking Support
    {
        category: "Banking Support",
        questions: [
            {
                question: "How can I set up direct deposit for my account?",
                answer: "To set up direct deposit, provide your employer with your account and routing number. They will handle the rest.",
            },
            {
                question: "What fees are associated with wire transfers?",
                answer: "Wire transfer fees vary depending on the destination and amount. Refer to our fee schedule on our website for details.",
            },
            {
                question:
                    "Can I change my account type or upgrade my services?",
                answer: "Yes, you can change your account type or upgrade your services by contacting our customer support.",
            },
            {
                question: "How do I report suspicious activity on my account?",
                answer: "If you notice any suspicious activity, contact our data and security department immediately. We take security concerns seriously and will investigate promptly.",
            },
            {
                question:
                    "What's the process for setting up automatic transfers between accounts?",
                answer: "To set up automatic transfers, log in to your online banking and navigate to the 'Transfer Funds' section to schedule recurring transfers.",
            },
        ],
    },
];
