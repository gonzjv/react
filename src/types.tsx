export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  title: string;
}

export interface get200_photos {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
}
