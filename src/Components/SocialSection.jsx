import React from 'react'
import slack from '../Assets/slack.png'
import gitimg from '../Assets/git.png'

const SocialSection = () => {
  return (
    <div className=' hidden md:flex justify-center pb-6 mx-4 lg:mx-[150px]'>
      <div className='flex gap-8'>
        <img className='cursor-pointer' src={slack} alt="" />
        <img className='cursor-pointer' src={gitimg} alt="" />
      </div>
    </div>
  )
}

export default SocialSection