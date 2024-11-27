import React from "react";
import {
    AutomatedSubscriptionIcon,
    PaymentButtonsIcon,
    PaymentLinksIcon,
    PaymentPagesIcon,
    PaymentRoutingIcon,
} from "../assets";

export interface ShortServiceCardProps {
    icon: React.ElementType;
    heading: string;
    subheading: string;
}

export const shortServiceCard: ShortServiceCardProps[] = [
    {
        icon: PaymentLinksIcon,
        heading: "Payment Links",
        subheading:
            "Share payment links through email, SMS, or chat platforms and receive instant payments, making transactions a breeze.",
    },
    {
        icon: PaymentPagesIcon,
        heading: "Payment Pages",
        subheading:
            "Launch your online store effortlessly, no coding required. Accept payments globally and locally with ease.",
    },
    {
        icon: PaymentButtonsIcon,
        heading: "Payment Buttons",
        subheading:
            "Create, duplicate, and gather payments with ease using payment buttons. Handle one-time and subscription payments effortlessly.",
    },
    {
        icon: AutomatedSubscriptionIcon,
        heading: "Automated Subscriptions",
        subheading:
            "Set up subscription plans with automated recurring payments across various payment methods for convenience.",
    },
    {
        icon: PaymentRoutingIcon,
        heading: "Payment Routing",
        subheading:
            "Automatically distribute incoming payments to vendor accounts and efficiently manage marketplace financial flows.",
    },
];

export const journeyToProsperityCard: ShortServiceCardProps[] = [
    {
        icon: "icon",
        heading: "Simplified Banking Process",
        subheading:
            "With our current accounts, you can easily manage transactions and access your money.",
    },
    {
        icon: "icon",
        heading: "Real-Time Transaction Monitoring",
        subheading:
            "Instant information on all of your payment activity help you maintain control over your funds.",
    },
    {
        icon: "icon",
        heading: "Seamless Online Payments",
        subheading:
            "Use our secure current account services to quickly and easily make payments and transfers",
    },
    {
        icon: "icon",
        heading: "Adaptive Account Features",
        subheading:
            "Use flexible options and features to configure your current account to meet your needs.",
    },
    {
        icon: "icon",
        heading: "24-hour customer service",
        subheading:
            "Customers with a current account can contact us at any time to get assistance.",
    },
];
