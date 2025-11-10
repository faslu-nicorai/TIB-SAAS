import { FeatureCard } from "./cards/FeatureCard";
import client from '../assets/client.png';
import dashboard from '../assets/dashboard.png';

const Flows = () => {
    return (
        <section id="flows" className="py-10 px-25 bg-white">
            <div className="container mx-auto px-4">

                {/* Main Heading */}
                <h2 className="text-5xl md:text-5xl font-bold text-[black] leading-tight max-w-2xl text-center mx-auto mb-20">
                    Explore entire user journeys with flows.
                </h2>

                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Column 1: Videos */}
                    <FeatureCard
                        title="Automated Workflows"
                        description="Experience true automation, from first client contact to final invoice, complete with real-time status updates and notifications."
                    >
                        {/* Placeholder for Phone 1 Image */}
                        <div className=" bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-white">
                            <img src={dashboard} alt="Dashboard screenshot" />
                        </div>
                    </FeatureCard>

                    {/* Column 2: Prototype mode */}
                    <FeatureCard
                        title="Live Analytics"
                        description="Walk through your business performance, step by step, using interactive dashboards to track revenue, manage expenses, and identify your top clients."
                    >
                        {/* Placeholder for Phone 2 Image */}
                        <div className=" bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center text-white">
                            <img src={client} alt="Client screenshot" />

                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
};

export default Flows;