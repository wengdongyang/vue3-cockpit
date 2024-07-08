/** @format */

export type IUserinfo = Partial<{
  name: String;
  token: String;
  [key: String]: any;
}>;

export type ILoginFormState = Partial<{
  username: String;
  password: String;
  remember: Boolean;
  [key: String]: any;
}>;
