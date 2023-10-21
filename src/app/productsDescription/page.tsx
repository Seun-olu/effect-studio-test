import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Topbar from "@/components/Topbar";
import ProductDescription from "@/components/ProductDescription";
import Image from "next/image";
import reward from "@/assets/icons/svg/reward.svg";

function PageTwo() {
  return (
    <div className="w-full">
      <Topbar />
      <Navbar active="opacity-50 cursor-pointer"/>
      <ProductDescription />
      <div className="mt-7 h-14 mb-10 md:mb-20">
        <Image src={reward} alt="" />
      </div>
      <Footer />
    </div>
  );
}
export default PageTwo;
