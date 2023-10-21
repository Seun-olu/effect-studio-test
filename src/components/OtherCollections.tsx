import Image from "next/image";
import RightArrow from "@/assets/icons/svg/right.svg";

function OtherCollection() {
  const collections = [
    {
      name: "Kids",
      picture: "bg-[url('../assets/images/other-collections/kids.jpg')]",
    },
    {
      name: "Large sizes",
      picture: "bg-[url('../assets/images/other-collections/large-sizes.jpg')]",
    },
    {
      name: "Goalkeeper",
      picture: "bg-[url('../assets/images/other-collections/goalkeeper.jpg')]",
    },
    {
      name: "Authentic / Pro Player",
      picture: "bg-[url('../assets/images/other-collections/pro-player.jpg')]",
    },
    {
      name: "Shorts",
      picture: "bg-[url('../assets/images/other-collections/shorts.jpg')]",
    },
    {
      name: "Socks",
      picture: "bg-[url('../assets/images/other-collections/socks.jpg')]",
    },
  ];

  return (
    <div className="w-full px-4 py-10 md:py-20 md:px-5 lg:px-20 h-auto flex flex-col gap-6 md:gap-20">
      <p className="text-3xl font-extrabold text-black">OTHER COLLECTIONS</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((item, index) => (
          <div
            className={`w-full h-52 md:h-60 relative bg-cover bg-no-repeat ${item.picture}`}
            key={index}
          >
            <div className="absolute bottom-0 left-0 w-full h-12 bg-black bg-opacity-40 flex justify-between items-center backdrop">
              <p className="pl-4 md:pl-6 text-[10px] md:text-sm font-semibold text-white">
                {item.name}
              </p>
              <div className="w-12 h-full flex items-center justify-center bg-main cursor-pointer">
                <Image src={RightArrow} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OtherCollection;
