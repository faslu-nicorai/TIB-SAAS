
export const FeatureCard = ({ title, description, children }) => (
    <div>
        <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 h-96">
            {/* This is the content area for the phone mockup */}
            <div className="w-full h-full flex items-center justify-center">
                {children}
            </div>
        </div>
        <h3 className="text-xl font-bold text-[black] mb-2">{title}</h3>
        <p className="text-[#707070]">
            {description}
        </p>
    </div>
);