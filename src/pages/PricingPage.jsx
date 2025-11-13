import Footer from '@/components/layout/Footer'
import PricingHeader from '@/components/layout/PricingHeader'
import FaQ from '@/components/sections/pricing-section/FaQ'
import { MoreOptionsSection } from '@/components/sections/pricing-section/MoreOptionsSection'
import PricingLogoSection from '@/components/sections/pricing-section/PricingLogoSection'
import { PricingSection } from '@/components/sections/pricing-section/PricingSection'
import React from 'react'

function PricingPage() {
  return (
    <>
        <div className="flex flex-col min-h-screen">

    <PricingHeader/>
    {/* <section className='bg-[black] w-auto h-24'>

    </section> */}
    <PricingSection/>
    <MoreOptionsSection/>
    <PricingLogoSection/>
    <FaQ/>
    <Footer/>
    </div>
    </>
  )
}

export default PricingPage