import HeroOne from '@/components/HeroOne'
import Square from '@/components/HeroTwo'
import NavBar from '@/components/NavBar'
import Topbar from '@/components/Topbar'
import Truck from "@/assets/icons/png/truck-box.png";
import Phone from "@/assets/icons/png/phone-box.png";
import Whatsapp from "@/assets/icons/png/whatsapp-box.png";
import Reward from "@/assets/icons/png/rewards-box.png";
import Badge from "@/assets/icons/png/rewards-badge.png";

import Image from 'next/image'
import HeroThree from '@/components/HeroThree';
import Leagues from '@/components/Leagues';
import OtherCollection from '@/components/OtherCollections';
import Socials from '@/components/Socials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Topbar />
      <NavBar active='border-main border-b-2 pt-2 pb-1' />
      <HeroOne />

      <div className="m-4 md:mt-10 md:mx-5 lg:mx-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <Square image={Truck} text="Secure Shipping" sub="on all orders" />
        <Square image={Phone} text="Telephone" sub="+1 23 456 7890" />
        <Square
          image={Whatsapp}
          text="Chat WhatsApp"
          sub="Mon-Fri: 9:00-21:00 • Sat-Sun: 9:00-17:00"
        />
        <Square
          image={Reward}
          text="Quality Guarantee"
          sub="Verified Purchase Reviews"
        />
      </div>

      <div className="mt-7 h-14">
        <Image src={Badge} alt="" />
      </div>

      <HeroThree/>
      <Leagues/>
      <OtherCollection/>
      <Socials/>
      <Footer/>
    </div>
  )
}
