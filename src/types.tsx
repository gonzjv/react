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

export interface get200_photo {
  photo: {
    id: string;
    // secret: string;
    // server: string;
    // farm: number;
    dateuploaded: number;
    // isfavorite: number;
    license: number;
    // safety_level: number;
    // rotation: number;
    // originalsecret: string;
    originalformat: string;
    owner: {
      // nsid: string;
      // username: string;
      realname: string;
      // location: string;
      // // iconserver: string;
      // iconfarm: number;
      // path_alias: string;
    };
    title: { _content: string };
    description: { _content: string };
    // visibility: { ispublic: number; isfriend: number; isfamily: number };
    dates: {
      posted: number;
      taken: string;
      // takengranularity: number;
      // takenunknown: number;
      // lastupdate: string;
    };
    views: string;
    // editability: { cancomment: number; canaddmeta: number };
    // publiceditability: { cancomment: number; canaddmeta: number };
    // usage: {
    //   candownload: number;
    //   canblog: number;
    //   canprint: number;
    //   canshare: number;
    // };
    // comments: { _content: number };
    // notes: {
    //   note: [];
    // };
    // people: { haspeople: number };
    // tags: {
    //   tag: [];
    // };
    // urls: {
    //   url: [{ type: string; _content: string }];
    // };
    // media: string;
  };
  stat: string;
}
