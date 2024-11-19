export interface NavItem {
    label: string;
    link: string;
    children?: NavItem[];
}

export const navItems: NavItem[] = [
    { label: "Home", link: "/" },
    {
        label: "Payments",
        link: "/payments",
        children: [
            { label: "Collect Payments", link: "/payments/collect-payments" },
            { label: "Payment Gateway", link: "/payments/payments-gateway" },
            { label: "Payment Links", link: "/payments/payments-links" },
            { label: "UPI Autopay", link: "/payments/upi-autopay" },
            { label: "Invoices", link: "/payments/invoices" },
            { label: "Cards", link: "/payments/cards" },
        ],
    },
    {
        label: "Banking",
        link: "/banking",
        children: [
            { label: "Payouts", link: "/banking/payouts" },
            { label: "Vendor Payments", link: "/banking/vendor-payments" },
            { label: "Current Accounts", link: "/banking/current-accounts" },
            { label: "Cash Management", link: "/banking/cash-management" },
        ],
    },
    { label: "Payroll", link: "/payroll" },
    {
        label: "Resources",
        link: "/resources",
        children: [
            { label: "GST Solutions", link: "/resources/gst-solutions" },
            { label: "Accounting", link: "/resources/accounting" },
        ],
    },
    { label: "Pricing", link: "/pricing" },
    {
        label: "Company",
        link: "/company",
        children: [
            { label: "About Us", link: "/company/about" },
            { label: "FAQ", link: "/company/faq" },
            { label: "Contact Us", link: "/company/contact" },
        ],
    },
];
