export enum GigStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
  DELETED = "deleted",
  PAUSED = "paused",
  REJECTED = "rejected",
  PENDING_APPROVAL = "pending",
  INACTICE = "inactive",
}

interface DescriptionTemplate {
  getAttention?: string;

  introduction: string;

  uniqueSellingPoints?: string[];

  requirements: string[];

  process: string;

  callToAction?: string;

  others?: {
    title: string;
    paragraph: string;
  };
}

interface Bargain {
  enabled: boolean;

  minPrice?: number;
}

interface Extra {
  title: string;

  price: number;

  description: string;
}

export interface GigPackage {
  title: string;

  expectedDelivery: number;

  price: number;

  deliveryUnit: string;

  bargain: Bargain;

  isRecommended: boolean;

  whatsIncluded?: string[];

  _id: string;
}

export interface ExpressPackage {
  title: string;

  expectedDelivery: number;

  price: number;

  deliveryUnit: string;

  _id?: string;
}

export interface Metadata {
  views: number;

  favorites: number;

  whenLastView: Date;
}

interface GigSeller {
  sub: string;

  profilePicture: string;

  username: string;

  verified: string;

  status: string;

  level: string;

  subCategory: string;
}

export interface GigDto {
  title: string;

  slug: string;

  seller: GigSeller;

  shortDescription: string;

  targetCity: string;

  targetCountry: string;

  tags: string[];

  images: string[];

  descriptionTemplate: DescriptionTemplate;

  metadata: Metadata;

  status: string;

  isFeatured: boolean;

  packages: GigPackage[];

  category: string;

  subCategory: string;

  flash: {
    isActive: boolean;
    discountPercentage: number;
    startDate: Date;
    endDate: Date;
    flashSaleViews: number;
    flashSaleSales: number;
  };

  isFlash: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export interface SearchGigsDto {
  title?: string;
  username?: string;
  subCategory?: string;
  targetCity?: string;
  targetCountry?: string;
  tags?: string[];
  minPrice?: number;
  maxPrice?: number;
  page: number;

  limit: number;
  status: GigStatus[];
}

export interface IGig extends GigDto {
  id: string;

  _id: string;
}
