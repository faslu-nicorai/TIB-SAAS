import React from "react";
import {
    Building2,
    GraduationCap,
    Dices,
} from "lucide-react";

import { MoreOptionsCard } from "@/components/ui/pricingPageUi/MoreOptionsCard";

export function MoreOptionsSection() {
    const options = [
        {
            icon: Building2,
            title: "Enterprise",
            description: (
                <>
                    Get advanced security (SOC 2 reports), priority support, standard
                    legal agreement & more.
                </>
            ),
            linkText: "Contact Sales",
            linkHref: "#", // Replace with actual link
        },
        {
            icon: GraduationCap,
            title: "Student or educator?",
            description: (
                <>
                    Discover Mobbin for Education and get a discount if you're eligible.
                </>
            ),
            linkText: "Read more",
            linkHref: "#", // Replace with actual link
        },
        {
            icon: Dices, // Using Dices as a placeholder
            title: "Competitor research",
            description: (
                <>
                    We'll map out any app of your choice. From $3,999 per app.
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