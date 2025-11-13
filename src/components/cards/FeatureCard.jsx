

export const FeatureCard = ({ title, description, children }) => (
    <div className="mb-8 md:mb-0">
        {/* <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 md:mb-6 h-80 md:h-96"> */}
        <div className="mb-4 md:mb-6">
            {children}
        </div>
        <h3 className="text-xl font-bold text-[black] ps-4 mb-2">{title}</h3>
        <p className="text-[#707070] font-medium text-base leading-relaxed ps-4">
            {description}
        </p>
    </div>
);