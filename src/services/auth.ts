import { parseCookies } from 'nookies';
import { api } from './api';

type SignInRequestDataFacebook = {
  accessToken: string;
}

export const signInRequest = async (email, password) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  const user = await api.post('/credentials/login', data)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));
  if (!user || user.success === false) {
    return {
      token: null
    }
  }
  return {
    token: user.data.token,
  }
}
export async function signInRequestFacebook({ accessToken }: SignInRequestDataFacebook) {
  const data = new FormData();
  data.append('access_token', accessToken);
  const user = await api.post('/facebook/connect', data)
    .then(function (response: any) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return {
    token: user.data.token,
    user: {
      id: user.data.user.id,
      name: user.data.user.name,
      email: user.data.user.email,
      email_status: user.data.user.email_status,
      description: user.data.user.description,
      type_login: user.data.user.type_login,
      social_network_id: user.data.user.social_network_id,
    }
  }
}

export async function recoverUserInformation() {
  const { 'user': object } = parseCookies();
  const userObject = JSON.parse(object);
  return {
    user: userObject
  }
}