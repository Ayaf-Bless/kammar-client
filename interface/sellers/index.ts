import { GigPackage } from "../gig";
import { IReview } from "../general/review";
import { IGigSubCategory } from "../gig/category";

export interface ISeller {
  _id: string;

  user: {
    sub: string;
    username: string;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    lastActivity: Date;
    role?: string;
    email: string;
    profilePicture?: string;
    isOnline: boolean;
  };

  bio: string;

  verified: boolean;

  status: string;

  level: number;

  isSponsor: boolean;

  oneliner: string;

  sponsorshipCode: string;

  rating: {
    average: number;
    total: number;
  };

  sponsoredSeller: {
    sponsorStartDate: Date;
    isSponsorshipActive: boolean;
    sponsoredSellerId: string;
    username: string;
    country: string;
    subCategory: string;
  }[];

  skills: string[];

  languages: { language: string; level: string }[];

  responseTime: number;

  recentDelivery: Date;

  experience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    currentlyWorkingHere: boolean;
  }[];

  education: {
    country: string;
    university: string;
    title: string;
    major: string;
    year: string;
  }[];

  socialLinks: {
    type: string;
    url: string;
  }[];

  certificates: {
    name: string;
    from: string;
    year: Date;
  }[];

  subCategory: IGigSubCategory;

  category: string;

  ongoingGigs: number;

  completedGigs: number;

  cancelledGigs: number;

  totalEarnings: number;

  totalGigs: number;

  totalSales: number;

  totalRevenue: number;

  gigs: {
    id: string;
    images: string[];
    title: string;
    packages: GigPackage[];
    slug: string;
    shortDescription: string;
    tags: string[];
    likedBy: string[];
  }[];

  reviews: IReview[];
}

export interface IContent {
  type: string;
  url?: string;
  text?: string;
}

export interface IPortfolio {
  title: string;
  role: string;
  skills: string[];
  description: string;
  content: IContent;
}
