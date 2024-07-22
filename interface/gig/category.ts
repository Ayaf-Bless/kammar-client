export interface IGigcategory {
  _id: string;
  title: string;
  subCategories: IGigSubCategory[];
}

export interface IGigSubCategory {
  title: string;
  shortDescription: string;
  _id: string;
}
