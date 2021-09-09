import HttpService from "./HttpService";

class AuthService extends HttpService
{
  register = async (credentials) => {
    try {
      const { data } = await this.apiCall.post('/auth/register', credentials);
      const { token, user } = data;

      localStorage.setItem('token', token);
      return { token, user };
    } catch (error) {
      console.log(error);
    }
  }

  login = async (credentials) => {
    try {
      const { data } = await this.apiCall.post('/auth/login', credentials);
      const { token, user } = data;

      localStorage.setItem("token", token);
      return { token, user};
    } catch (error) {
      console.log(error);
    }
  }

  logout = async () => {
    await this.apiCall.post("/auth/logout");
    localStorage.removeItem('token');
  }

  getActiveUser = async () => {
    const { data } = await this.apiCall.get('/auth/me');

    return data;
  }
}

export default new AuthService();