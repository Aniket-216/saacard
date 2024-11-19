export interface PaymentOption {
    name: string;
    pricing: {
        monthly: number;
        yearly: number;
    };
    features: string[];
}

export const PaymentPlans: PaymentOption[] = [
    {
        name: "STANDARD",
        pricing: {
            monthly: 399,
            yearly: 999,
        },
        features: [
            "Basic account access",
            "Account balance checking",
            "Transaction history",
            "24/7 Customer support",
            "Mobile app access",
            "ATM fee reimbursements (limited)",
        ],
    },
    {
        name: "UNIVERSAL",
        pricing: {
            monthly: 599,
            yearly: 1099,
        },
        features: [
            "All Standard features",
            "Bill payment and funds transfer",
            "Enhanced security features",
            "Two-factor authentication",
            "Personal finance dashboard",
            "Unlimited ATM fee reimbursements",
            "Investment portfolio tracking",
        ],
    },
    {
        name: "PREMIUM",
        pricing: {
            monthly: 1199,
            yearly: 1999,
        },
        features: [
            "All Economy features",
            "Multi-user access",
            "Business financial analytics",
            "Dedicated account manager",
            "API access for integrations",
            "Advanced reporting and insights",
            "Business expense tracking",
            "Customizable invoicing",
            "Business savings accounts",
        ],
    },
];
