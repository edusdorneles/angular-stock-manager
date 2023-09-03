export type SignUpRequest = {
  name: string;
  email: string;
  password: string;
}

export type SignUpResponse = {
  id: string;
  name: string;
  email: string;
}
