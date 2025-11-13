import { FeatureCard } from "../cards/FeatureCard";
import invoices from '../../assets/invoices.png';
import templateBuilder from '../../assets/templateBuilder.png';

const Flows = () => {
    return (
        <section id="flows" className="py-10 px-4 md:px-25 bg-white relative z-10">
            <div className="container mx-auto">

                {/* Main Heading - improved mobile text sizing */}
                <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-3xl md:max-w-2xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
                    Explore entire user journeys with flows.
                </h2>

                {/* Two-Column Grid - responsive gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">

                    <FeatureCard
                        title="Template Builder"
                        description="Design fully custom inspection templates using a drag-and-drop builder. Add text blocks, tables, signatures, logos, and more across multiple pages."
                    >
                        <div className="rounded-2xl shadow-lg flex items-center justify-center text-white aspect-video w-full overflow-hidden">
                            <img
                                src={templateBuilder}
                                alt="Template Builder screenshot"
                                className="w-full h-full object-contain p-4 bg-[#F7F7F7]"
                            />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Invoices Overview"
                        description="Track all invoices in one place — paid, pending, or overdue. Quickly search, filter by date or status, and download or share invoices with a single click."
                    >
                        <div className="rounded-2xl shadow-lg flex items-center justify-center text-white aspect-video w-full overflow-hidden">
                            <img
                                src={invoices}
                                alt="Invoices dashboard screenshot"
                                className="w-full h-full object-contain p-4 bg-[#F7F7F7]"
                            />
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
};

export default Flows;