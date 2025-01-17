import React from 'react'
import PageIllustration from './page-illustration'
import bgPricing from '../public/images/Hero2.svg'

function Pricing() {
  return (
    <div className='h-screen bg-[url("/images/bgPricing.svg")] bg-cover bg-center bg-no-repeat'>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-4xl font-bold '>Pricing</h1>
        </div>
    </div>
  )
}

export default Pricing