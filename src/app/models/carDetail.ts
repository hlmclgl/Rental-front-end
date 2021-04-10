export interface CarDetail {
  id: number;
  brandId: number;
  colorId: number;
  brandName: string;
  model: string;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  imagePath: string[];
  minFindexScore?: number;
}
