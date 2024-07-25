export interface IReview {
  reviewer: {
    username: string;
    country: string;
    sub: string;
    profilePicture: string;
  };

  gig: {
    sub: string;
    title: string;
    slug: string;
  };

  seller: {
    username: string;
    country: string;
    sub: string;
    profilePicture: string;
  };

  rating: number;

  comment: string;

  isPinned: boolean;

  createdAt: Date;

  updatedAt: Date;

  _id: string;
}
