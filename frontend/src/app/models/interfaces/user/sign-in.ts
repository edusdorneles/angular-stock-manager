export type SignInRequest = {
  email: string;
  password: string;
}

export type SignInResponse = {
  id: string;
  name: string;
  email: string;
  token: string;
}
