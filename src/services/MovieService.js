import HttpService from './HttpService';

class MovieService extends HttpService {
  
  async getAll() {
    try {
      const { data } = await this.apiCall.get('movies');

      return data;
    } catch (error) {
      console.log(error);
    }

    return {};
  }
}

export default new MovieService();