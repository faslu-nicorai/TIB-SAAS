import React from "react";
import {
    Building2,
    Database,
    FileCheck,
    Rocket,
} from "lucide-react";

import { MoreOptionsCard } from "@/components/ui/pricingPageUi/MoreOptionsCard";

export function MoreOptionsSection() {
    const options = [
        {
            icon: Building2, // Icon for Enterprise
            title: "Enterprise",
            description: (
                <>
                    Get advanced security, custom integrations, priority support,
                    and a dedicated account manager.
                </>
            ),
            linkText: "Contact Sales",
            linkHref: "#", // Replace with actual link
        },
        {
            icon: Rocket, // Replaced GraduationCap with Rocket for Startups
            title: "Startups",
            description: (
                <>
                    Discover our special program for new businesses
                    and get a discount if you're eligible.
                </>
            ),
            linkText: "Read more",
            linkHref: "#", // Replace with actual link
        },
        {
            icon: FileCheck, // Replaced Dices with Database for Data Migration
            title: "Certificate Management",
            description: (
                <>
                    Issue and oversee certification tasks with tools crafted to simplify your workflow and daily needs.
                </>
            ),
            linkText: "Read more",
            linkHref: "#", // Replace with actual link
        },
    ];

    return (

        <section className="w-full py-12 md:py-24 lg:py-20 bg-white relative z-10">
            <div className="max-w-5xl mx-auto px-4 md:px-6">

                <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0 lg:gap-0 justify-items-center space-y-8 md:space-y-0">
                    {options.map((option, index) => (
                        <MoreOptionsCard key={index} {...option} />
                    ))}
                </div>
            </div>
        </section>

    );
}