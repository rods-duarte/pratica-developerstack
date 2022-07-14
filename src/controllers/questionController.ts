import { Request, Response } from "express";
import answerService, { CreateAnswerData } from "../services/answerService.js";
import questionService, { CreateQuestionData }  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { body }: { body: CreateQuestionData }  = req;
  await questionService.create(body);
  res.status(200).send('Pergunta criada com sucesso !');
}

export async function answer(req: Request, res: Response) {
  const { body }: { body: CreateAnswerData } = req;
  const id = +req.params.id;
  await answerService.create(body, id);
  res.status(200).send('Resposta criada com sucesso !')
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAll();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const id = +req.params.id;

  const question = await questionService.getById(id);
  res.status(200).send(question);
}
