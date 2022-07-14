import { Question } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">

async function create(question: CreateQuestionData) {
    await questionRepository.insert(question);
}

async function getAll() {
    const questions = await questionRepository.findAll();
    return questions;
}

async function getById(id: number) {
    if (!id) {
        throw {
          type: "not_found"
        }
    }

    const question = await questionRepository.findById(id);

    if (!question) {
        throw {
            type: "not_found"
        }
    }
    return question;
}

const questionService = {
    create,
    getAll,
    getById
};
export default questionService;
