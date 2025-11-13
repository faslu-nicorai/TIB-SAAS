import React from 'react'
import LogoLoop from '../../ui/LogoUi/LogoLoop'
import { techLogos } from '../LogoSection'

const loopLogos = [
  {
    node: <span className="text-3xl font-bold text-black">TIB Group</span>,
    title: "TIB Group"
  },

  {
    node: (
      <span className="text-3xl font-extrabold tracking-wide text-black">
        PrimeInspect
      </span>
    ),
    title: "PrimeInspect"
  },

  {
    node: (
      <span className="text-3xl font-semibold px-3 py-1 border border-black rounded-md">
        SafeCheck Labs
      </span>
    ),
    title: "SafeCheck Labs"
  },

  {
    node: (
      <span className="text-3xl font-bold italic text-black opacity-80">
        Certiva Engineers
      </span>
    ),
    title: "Certiva Engineers"
  },

  {
    node: (
      <span className="text-3xl font-light tracking-widest text-black uppercase">
        PROTEST NDT
      </span>
    ),
    title: "PROTEST NDT"
  },

  {
    node: (
      <span className="text-3xl font-bold text-black underline underline-offset-4">
        SureScope
      </span>
    ),
    title: "SureScope"
  },

  {
    node: (
      <span className="text-3xl font-semibold px-4 py-1 bg-black text-white rounded">
        FieldPro Services
      </span>
    ),
    title: "FieldPro Services"
  },

  {
    node: (
      <span className="text-3xl font-extrabold text-black tracking-tight">
        Inspectora
      </span>
    ),
    title: "Inspectora"
  },

  {
    node: (
      <span className="text-3xl font-medium px-3 py-1 border-2 border-black rounded-lg">
        QualityMatrix
      </span>
    ),
    title: "QualityMatrix"
  },

  {
    node: (
      <span className="text-3xl font-bold text-black opacity-70 tracking-wider">
        Certiwave
      </span>
    ),
    title: "Certiwave"
  }
];




function PricingLogoSection() {
    return (
        <div>
            <section className='w-full py-12 md:py-24 lg:py-20 overflow-hidden bg-white relative z-10'>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[black] leading-tight max-w-3xl text-center mx-auto mb-8 sm:mb-12 md:mb-20 px-4">
                    Used by growing businesses worldwide.
                </h2>

                <LogoLoop
                    logos={loopLogos}
                    speed={20}
                    direction="left"
                    logoHeight={48}
                    gap={100}
                    hoverSpeed={0}
                    // scaleOnHover
                    
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                />

            </section>
        </div>
    )
}

export default PricingLogoSection