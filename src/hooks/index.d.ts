export interface IUserWithToken {
  accessToken: string;
  name: string;
  id: number;
  profile: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ICreatePost {
  contents: string;
  urls: string[];
}
