import questions from '../data/questions.json';

class QuizApi {
  async getQuestions() {
    try {
      return { success: true, data: questions };
    } catch (error) {
      return { success: false, data: null, error: error.message };
    }
  }
}

export const quizApi = new QuizApi();
