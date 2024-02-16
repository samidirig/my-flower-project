import { _mock } from './_mock';

const BRANDS_NAME = [
    'brand_1',
    'brand_2',
    'brand_3',
    'brand_4',
    'brand_5',
    'brand_6',
  ];
  
  export const _brands = BRANDS_NAME.map((brand, index) => ({
    id: _mock.id(index),
    name: brand,
    image: `/assets/logo/${brand}.png`,
  }));
  
  export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
    id: _mock.id(index),
    name: brand,
    image: `/assets/logo/${brand}_original.png`,
  }));