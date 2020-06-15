import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "mateus", email: "mateusfelipefg77@gmail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Mateus Felipe", email: "mateusfelipefg77@gmail.com" },
      message: { subject: "Hello Word", body: "I said HELLO WORD!" },
    });

    return res.send();
  },
};
