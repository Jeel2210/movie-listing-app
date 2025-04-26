export interface Review {
  reviewerName: string;
  rating: number;
  comment?: string;
}

export interface Movie {
  _id: string;
  title: string;
  genre: string;
  releaseYear?: number;
  averageRating: number;
  reviews?: Review[];
}

