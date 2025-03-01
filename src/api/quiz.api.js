class QuizApi {
    constructor() {
      this.baseUrl = "http://localhost:5001";
    }
  

    async getQuestions() {
      try {
        const response = await fetch(`${this.baseUrl}/questions`);
        const data = await response.json();
        return { success: true, data };
      } catch (error) {
        return { success: false, data: null, error: error.message };
      }
    }
  }
  
  export const quizApi = new QuizApi();
  