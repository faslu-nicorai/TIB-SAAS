import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
    return (
        <section id="cta" className="py-8 bg-white relative rounded-b-[50px]  pb-20 z-10">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

                <h2 className="text-5xl md:text-5xl font-extrabold text-[#141414] leading-tight max-w-2xl">
                    Never lose track of a job again.
                </h2>

                <p className="mt-6 text-lg text-[#707070] font-medium max-w-lg">
                    Stay on top of every enquiry, quotation, inspection, report, and certificate.
                    Certive keeps your entire workflow organized — so nothing slips through the cracks.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="bg-[#141414] text-white hover:bg-gray-500 rounded-full">
                        <a href="#join">Create free account</a>
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