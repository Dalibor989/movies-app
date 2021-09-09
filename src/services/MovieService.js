import HttpService from './HttpService';

class MovieService extends HttpService {
  
   getAll = async (title = "") => {
    let endpoint = "/movies";
    if (title) {
      endpoint += `?title=${title}`;
    }

    const { data } = await this.apiCall.get(endpoint);
    
    return data;
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