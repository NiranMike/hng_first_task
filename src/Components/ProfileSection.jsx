import React from 'react';
import profileImg from '../Assets/profile_img.jpg';
import icon from '../Assets/Icon.png';
import icon2 from '../Assets/Icon2.png';

const ProfileSection = () => {
  return (
    <div className=' mx-4 lg:mx-[180px] py-[40px]'>
            <div className=' border-[1px] cursor-pointer rounded-[275px] lg:block hidden p-2 border-dotted absolute right-[360px]'>
                <img src={icon} alt="" />
            </div>
            <div className=' border-[1px] cursor-pointer rounded-[275px] px-3 py-4 md:hidden border-dotted absolute right-[30px]'>
                <img src={icon2} alt="" />
            </div>
            <div className=' flex justify-center'>
                <img className=' rounded-[275px] mb-2' width={"88px"} height={"88px"} src={profileImg} id='profile__img' alt="" />
            </div>
            <div>
                <p className=' text-center font-bold' id='twitter'>NiranMike</p>
                <p className='hidden' id='slack'>Olaniran Micheal</p>
            </div>
        
    </div>
  )
}

export default ProfileSection