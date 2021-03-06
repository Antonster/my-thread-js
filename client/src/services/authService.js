import callWebApi from 'src/helpers/webApiHelper';

export const login = async request => {
  const response = await callWebApi({
    endpoint: '/api/auth/login',
    type: 'POST',
    request
  });
  return response.json();
};

export const registration = async request => {
  const response = await callWebApi({
    endpoint: '/api/auth/register',
    type: 'POST',
    request
  });
  return response.json();
};

export const getCurrentUser = async () => {
  try {
    const response = await callWebApi({
      endpoint: '/api/auth/user',
      type: 'GET'
    });
    return response.json();
  } catch (err) {
    return null;
  }
};

export const updateUser = async request => {
  try {
    const response = await callWebApi({
      endpoint: '/api/auth/update',
      type: 'PUT',
      request
    });
    return response.json();
  } catch (err) {
    return err;
  }
};
