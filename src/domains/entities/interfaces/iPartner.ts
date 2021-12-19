import { IPartnerCategoryData } from "./iPartnerCategory";

export interface IPartnerEntity {
  id: number;
  name: string;
  desc: string;
  logoUrl: string;
  imageUrl: string;
  mobileImageUrl: string;
  url: string;
  categories: string[];
}

export interface IPartnerData {
  partnerID: number;
  namePAR: string;
  desc: string;
  logoUrlPAR: string;
  mobileImageUrlPAR: string;
  imageUrlPAR: string;
  urlPAR: string;
  categories: IPartnerCategoryData[];
}
