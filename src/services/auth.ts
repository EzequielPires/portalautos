import { parseCookies } from 'nookies';
import { apiAuth } from './api';

type SignInRequestDataFacebook = {
  accessToken: string;
}

export async function signInRequest(email, password) {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  const user = await apiAuth.post('/user/login', data)
    .then(function (response: any) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  if(user.success === false) {
    return {
      token: null,
      user: null
    }
  }
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
export async function signInRequestFacebook({ accessToken }: SignInRequestDataFacebook) {
  const data = new FormData();
  console.log(accessToken);
  data.append('access_token', accessToken);
  const user = await apiAuth.post('/user/facebook/connect', data)
    .then(function (response: any) {
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