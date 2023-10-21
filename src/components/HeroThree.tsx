import Lingard from "./LingardItems";
import image from "@/assets/images/product-large.jpg";

function HeroThree() {
  const SlideItems = [
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22",
      price: "30.00",
      discount: "89.95",
    },
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22 Home Shirt",
      price: "30.00",
      discount: "89.95",
    },
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22 Home Shirt",
      price: "30.00",
      discount: "89.95",
    },
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22 Home Shirt",
      price: "30.00",
      discount: "89.95",
    },
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22 Home Shirt",
      price: "30.00",
      discount: "89.95",
    },
    {
      image: image,
      percent: "67%",
      product: "Manchester United 21-22 Home Shirt",
      price: "30.00",
      discount: "89.95",
    },
  ];

  return (
    <div className="w-full pl-4 py-10 md:py-20 md:pl-5 lg:pl-20 h-auto flex flex-col gap-6 md:gap-20 relative">
      <p className="w-64 md:w-full text-3xl font-extrabold text-black">
        MOST POPULAR T-SHIRTS
      </p>

      <div className="w-full">
        <Lingard data={SlideItems}/>
      </div>
    </div>
  );
}
export default HeroThree;
