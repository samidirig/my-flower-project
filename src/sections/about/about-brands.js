import { _brands } from "@/_mock/_others";

import BrandsCarousel from "@/components/carousels/brands-carousel";

export default function AboutBrands() {
  return (
    <div className="w-full h-1/4 relative flex flex-row items-center p-14 justify-center">
      <BrandsCarousel brands={_brands} />
    </div>
  );
}

{
  /* <div className="w-full h-1/4 flex place-items-center justify-center">
  <BrandsCarousel brands={_brands} />
</div>; */
}
