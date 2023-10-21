import Image from "next/image";
import Menu from '@/assets/icons/svg/menu.svg'
import Lense from '@/assets/icons/svg/lense.svg'
import Categories from "./Navbar Component/Categories";
import Searchbar from "./Navbar Component/SearchBar";
import ProfilePic from "./Navbar Component/ProfilePic";
import Links from "./Navbar Component/Links.";


type NavbarProps = {
    active: string
  }

const NavBar = ({active}:NavbarProps) => {
    return (
        <div className="w-full h-auto md:h-[88px] md:grid md:grid-cols-[15%,auto] bg-white">
            <div className="w-full hidden md:block h-[88px] bg-main"></div>

            <div className="flex flex-col w-full">
                <div className="w-full px-4 md:px-0 justify-between flex md:grid md:grid-cols-[76%,24%]">
                    <div className="grid grid-cols-2 gap-6 md:hidden">
                        <div className="w-full flex items-center justify-center cursor-pointer">
                            <Image src={Menu} alt="" quality={100} width={25} height={25} />
                        </div>

                        <div className="w-full flex items-center justify-center cursor-pointer">
                            <Image src={Lense} alt="" quality={100} width={18} height={18} />
                        </div>
                    </div>
                    <div className="hidden md:grid grid-cols-[25%,auto]">
                        <Categories/>
                        <Searchbar/>
                    </div>
                    <ProfilePic/>
                </div>
                <Links active={active}/>
            </div>
        </div>
    );
};

export default NavBar;
