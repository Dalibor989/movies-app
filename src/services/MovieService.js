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

  async addMovie(newMovie) {
    try {
      const { data } = await this.apiCall.post('movies', newMovie);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

export default new MovieService();