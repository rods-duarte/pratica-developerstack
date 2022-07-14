import { prisma } from "../config/database.js";
import { CreateAnswerData } from "../services/answerService";

async function insert(newAnswer: CreateAnswerData, questionId: number) {
    await prisma.answer.create({
        data: {
            answer: newAnswer.answer,
            questionId
        }
    })
}

const answerRepository = {
    insert
}

export default answerRepository;