import { NextFunction, Request, Response } from 'express';

const HomeController = (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
}
export default HomeController;