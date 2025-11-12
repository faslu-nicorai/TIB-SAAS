import React from 'react'
import LogoLoop from '../../ui/LogoUi/LogoLoop'
import { techLogos } from '../LogoSection'



function PricingLogoSection() {
    return (
        <div>
            <section className='w-full py-12 md:py-24 lg:py-20 overflow-hidden bg-white relative z-10'>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-3xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
                    Used by growing businesses worldwide.
                </h2>

                <LogoLoop
                    logos={techLogos}
                    speed={20}
                    direction="left"
                    logoHeight={48}
                    gap={100}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />

            </section>
        </div>
    )
}

export default PricingLogoSection