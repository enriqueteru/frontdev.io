export type Lab = {
  id: string;
  title: string;
  name?: string;
  description?: string;
  categories: string[];
  tags?: string[];
  content: string;
  image?: string;
  repo?: string;
  deploy?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
};

export type ResponseError = {
  code: string;
  message?: string;
  data?: {
    status?: number;
  };
};
