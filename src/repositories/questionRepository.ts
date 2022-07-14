import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

async function insert(newQuestion: CreateQuestionData) {
    await prisma.question.create({
        data: {
            question: newQuestion.question
        }
    });
}

async function findById(id: number) {
    const question = await prisma.question.findUnique({where: {id}});
    return question;
}

async function findAll() {
    const questions = await prisma.question.findMany();
    return questions;
}


const questionRepository = {
    insert,
    findById,
    findAll
};
export default questionRepository;