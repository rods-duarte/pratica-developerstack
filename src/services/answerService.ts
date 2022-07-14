import { Answer } from "@prisma/client";
import answerRepository from "../repositories/answerRepository.js";
import questionRepository from "../repositories/questionRepository.js";

export type CreateAnswerData = Omit<Answer, "id" | "questionId">

async function create(newAnswer: CreateAnswerData, questionId: number) {
    if(!questionId) {
        throw {
            type: "not_found"
        }
    }

    const question = await questionRepository.findById(questionId);

    if (!question) {
        throw {
            type: 'not_found'
        }
    }

    await answerRepository.insert(newAnswer, questionId);
}

const answerService = {
    create
};
export default answerService;