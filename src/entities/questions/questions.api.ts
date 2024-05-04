import { ENDPOINT_QUESTIONS } from './questions.const';
import { QuestionModel, RequestQuestionsParams } from './questions.types';
import { instance } from '../../shared/lib/axios';

async function requestQuestions({
  category,
  difficulty,
  limit,
}: RequestQuestionsParams) {
  const config = {
    params: {
      limit: limit,
      category: category,
      difficulty: difficulty,
    },
  };

  const response = await instance.get(ENDPOINT_QUESTIONS, config);
  return response.data;
}

export async function getQuestions({
  category,
  difficulty,
  limit,
}: RequestQuestionsParams) {
  const data: QuestionModel[] = await requestQuestions({
    category,
    difficulty,
    limit,
  });

  console.log(data);
  return data;
}
