export type profileType = {
  name: string;
  email: string;
  password?: string;
  id?: string;
};

export type profileRequestType = {
  name: string;
  email?: string;
  password?: string;
};
