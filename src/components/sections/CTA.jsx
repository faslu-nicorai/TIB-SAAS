import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section id="cta" className="py-8 bg-white relative z-10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

                <h2 className="text-5xl md:text-5xl font-extrabold text-[#141414] leading-tight max-w-2xl">
                    Never miss an order again.
                </h2>

                <p className="mt-6 text-lg text-gray-600 max-w-lg">
                    Use tib's core features for free or get full access to automated invoicing, analytics, and client management with any of our paid plans.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="bg-[#141414] text-white hover:bg-gray-500 rounded-full">
                        <a href="#join">Get started free</a>
                    </Button>

                    <Button size="lg" variant="outline" asChild className="rounded-full hover:bg-[#f6f6f6]">
                        <a href="/pricing" className="flex items-center gap-2">
                            See our plans
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default CTA;