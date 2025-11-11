import { FeatureCard } from "../cards/FeatureCard";
import client from '../../assets/client.png';
import dashboard from '../../assets/dashboard.png';

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

                    {/* Column 1: Videos */}
                    <FeatureCard
                        title="Automated Workflows"
                        description="Experience true automation, from first client contact to final invoice, complete with real-time status updates and notifications."
                    >
                        <div className=" rounded-2xl shadow-lg flex items-center justify-center text-white aspect-video w-full overflow-hidden">
                            <img 
                                src={dashboard} 
                                alt="Dashboard screenshot" 
                                className="w-full h-full object-contain p-4 bg-[#F7F7F7]" 
                            />
                        </div>
                    </FeatureCard>

                    {/* Column 2: Prototype mode */}
                    <FeatureCard
                        title="Live Analytics"
                        description="Walk through your business performance, step by step, using interactive dashboards to track revenue, manage expenses, and identify your top clients."
                    >
                        <div className=" rounded-2xl shadow-lg flex items-center justify-center text-white aspect-video w-full overflow-hidden">
                            <img 
                                src={client} 
                                alt="Client screenshot" 
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