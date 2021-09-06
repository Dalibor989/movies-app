import HttpService from "./HttpService";

class AuthService extends HttpService
{
  async register(credentials) {
    try {
      const { data } = await this.apiCall.post('/auth/register', credentials);
      const { token, user } = data;

      localStorage.setItem('token', token);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async login(credentials) {
    try {
      const { data } = await this.apiCall.post('/auth/login', credentials);
      const { token, user } = data;

      localStorage.setItem('token', token);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthService();