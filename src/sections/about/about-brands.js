import { _brands } from "@/_mock/_others";

import BrandsCarousel from "@/components/carousels/brands-carousel";

export default function AboutBrands() {
  return (
    <div className="flex flex-col px-14 py-8 justify-center items-center gap-10">
      <div className="flex flex-col text-3xl font-medium ">
        <span className="text-gradient-cyan-to-green">Technologies & Work Experiences</span>
      </div>
      <div className="w-full h-auto flex flex-col items-center py-4 shadow-[rgba(0,_0,_0,_0.2)_0px_20px_30px_-10px] rounded-full">
        <BrandsCarousel brands={_brands} />
      </div>
    </div>
  );
}
