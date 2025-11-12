// components/pricing-section.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"; // Corrected path
import { Badge } from "@/components/ui/badge"; // Corrected path
import {
    Check,
    Headphones,
    MessageSquare,
    Users,
    FileText,
    BarChart2,
    User,
    Shield,
} from "lucide-react"; // Import all needed icons
import { PricingToggle } from "@/components/ui/pricingPageUi/pricingToggle"; // Corrected path

// --- Updated Plans Array ---
// The data now matches your image exactly, including icons.
const plans = [
    {
        name: "Monthly",
        popular: false,
        description: "Per user, billed monthly",
        price: "AED 99",
        billing: "per user/month",
        cta: "Get started",
        features: [
            { text: "All Core Features", icon: Check }, // Renamed for clarity
            { text: "Priority Support", icon: Headphones }, 
            { text: "Order & Invoice Management", icon: FileText },
            { text: "Client Database", icon: Users },
            { text: "Analytics Dashboard", icon: BarChart2 },
            { text: "Team Roles & Permissions", icon: Shield },
            { text: "Email & Chat Support", icon: MessageSquare },
        ],
    },
    {
        name: "Yearly",
        popular: true,
        description: "Save over 49%!", // 99*12 = 1188. 599/1188 is ~49.6% savings.
        price: "AED 599",
        billing: "per user/year",
        cta: "Get started",
        features: [
            { text: "All Core Features", icon: Check },
            { text: "Order & Invoice Management", icon: FileText },
            { text: "Client Database", icon: Users },
            { text: "Analytics Dashboard", icon: BarChart2 },
            { text: "Team Roles & Permissions", icon: Shield },
            { text: "Email & Chat Support", icon: MessageSquare },
            { text: "Priority Support", icon: Headphones }, // Added Priority support as a yearly perk
        ],
    },
];

export function PricingSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-10 relative z-10 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Header (Unchanged) */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
                        Grow like a Pro.
                    </h2>
                    <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto mb-6 leading-tight">
                        Get full access to all features{' '}
                        <span className="md:hidden block whitespace-pre-wrap">
                            from only AED 9.99 per day —
                            <span className="block text-center mt-1">Cancel anytime.</span>
                        </span>
                        <span className="hidden md:inline">
                            from only AED 9.99 per day — Cancel anytime.
                        </span>
                    </p>
                    <PricingToggle />
                </div>

                {/* --- Updated Pricing Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`flex flex-col rounded-2xl p-6 ${plan.name === "Yearly"
                                ? "bg-[#F2F2F2] border-transparent" // Gray background for Pro
                                : "bg-white border-gray-200 border" // White background with border for Team
                                } ${plan.popular ? "shadow-lg" : ""}`}
                        >
                            {/* Card Header: Title, Badge, Description */}
                            <CardHeader className="p-0 pb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <CardTitle className="text-xl font-bold">
                                        {plan.name}
                                    </CardTitle>
                                    {plan.popular && (
                                        <Badge className="bg-blue-600 text-white rounded-full px-3 py-0.5 text-xs font-semibold hover:bg-blue-600">
                                            Popular
                                        </Badge>
                                    )}
                                </div>
                                <CardDescription className="text-base text-gray-600">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            {/* Card Content: Price & Features */}
                            <CardContent className="flex flex-col flex-grow p-0 space-y-6">
                                {/* Price */}
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-bold tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-sm text-gray-500">{plan.billing}</span>
                                </div>

                                <Button
                                    className="w-full rounded-full py-6 text-base font-semibold"
                                    size="lg"
                                    variant={plan.popular ? "default" : "outline"} // 'default' (black) for popular, 'outline' (white) for default
                                >
                                    {plan.cta}
                                </Button>
                                {/* Features List */}
                                <ul className="space-y-3 text-left">
                                    {plan.features.map((feature, featureIndex) => {
                                        const IconComponent = feature.icon; // Get the icon component
                                        return (
                                            <li key={featureIndex} className="flex items-start gap-3">
                                                {/* Render the icon component if it exists */}
                                                {IconComponent && (
                                                    <IconComponent className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                                )}

                                                {/* Handle the special "...and more" text */}
                                                <span
                                                    className={`text-sm font-medium ${feature.special ? 'underline cursor-pointer' : ''}`}

                                                >
                                                    {feature.text}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </CardContent>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}