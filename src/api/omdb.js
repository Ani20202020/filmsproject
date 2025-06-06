
class OMDBApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://www.omdbapi.com/";
  }

  async fetchByID(id) {
    try {
      const url = `${this.baseUrl}?i=${id}&apikey=${this.apiKey}`;
      // console.log("Fetching URL:", url); // ✅ Ստուգիր, որ URL-ը ճիշտ է
      
      const response = await fetch(url);
      const data = await response.json();
      return {
        success: data.Response === "True",
        data,
        error: data.Response === "True" ? null : data.Error,
      };
    } catch (error) {
      return { success: false, data: null, error: error.message };
    }
  }
  

  async fetchMoviesBySearch(query, page = 1) {
    try {
      const response = await fetch(
        `${this.baseUrl}?s=${encodeURIComponent(query)}&page=${page}&apikey=${
          this.apiKey
        }`
      );
      const data = await response.json();
      return {
        success: data.Response === "True",
        data: data,
        error: data.Response === "True" ? null : data.Error,
      };
    } catch (error) {
      return { success: false, data: [], error: error.message };
    }
  }
}

export const omdbApi = new OMDBApi("9f0222dc");




// 9f0222dc