import Footer from '@/components/layout/Footer'
import PricingHeader from '@/components/layout/PricingHeader'
import CheckoutModal from '@/components/modal/CheckoutModal'
import FaQ from '@/components/sections/pricing-section/FaQ'
import { MoreOptionsSection } from '@/components/sections/pricing-section/MoreOptionsSection'
import PricingLogoSection from '@/components/sections/pricing-section/PricingLogoSection'
import { PricingSection } from '@/components/sections/pricing-section/PricingSection'
import React, { useState } from 'react'

function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // This function triggers when they click "Get Started" on a plan
  const handlePlanSelect = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className="flex flex-col min-h-screen">

        <PricingHeader />
        {/* <section className='bg-[black] w-auto h-24'>

    </section> */}
        <PricingSection onPlanSelect={handlePlanSelect} />
        <MoreOptionsSection />
        <PricingLogoSection />
        <FaQ />
        <Footer />
      </div>

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default PricingPage