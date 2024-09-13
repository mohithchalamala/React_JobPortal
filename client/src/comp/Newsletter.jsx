import React from 'react'
import { FaEnvelopeOpen, FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
function Newsletter() {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ut voluptas officia hic explicabo eum sit? Aliquam ducimus sint labore quae nesciunt eum doloremque sunt, voluptate, amet exercitationem minima!</p>

            <div className='w-full space-y-4'>
                <input type='email' name='email' placeholder='name@gmail.com' className='w-full bllock pl-3 py-2 border focusoutline-none'></input>
                <input type="submit" value={"Subscribe"}className='w-full bllock pl-3 py-2 border focusoutline-none bg-blue rounded-sm text-white cursor-pointer' />
            </div>
        </div>

        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex item-center gap-2'>
                <FaRocket/>
                Get noticed faster
            </h3>
            <p className='text-primary/75 text-base mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quos ut voluptas officia hic explicabo eum sit? Aliquam ducimus sint labore quae nesciunt eum doloremque sunt, voluptate, amet exercitationem minima!</p>

            <div className='w-full space-y-4'>
                <input type="submit" value={"Upload your resume"}className='w-full bllock pl-3 py-2 border focusoutline-none bg-blue rounded-sm text-white cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Newsletter