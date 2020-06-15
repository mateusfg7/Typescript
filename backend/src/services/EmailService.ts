interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IEmailServide {
  sendMail(request: IMessageDTO): void;
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

class EmailService implements IEmailServide {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
