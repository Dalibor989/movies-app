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

  getMovie = async (id) => {
    const { data } = await this.apiCall.get(`/movies/${id}`);
    
    return data;
  }

  addMovie = async (newMovie) => {
    const { data } = await this.apiCall.post('/movies', newMovie);
      
    return data;
  }
}

export default new MovieService();