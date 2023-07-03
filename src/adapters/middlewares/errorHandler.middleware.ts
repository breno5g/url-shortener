import { Request, Response, NextFunction } from 'express';

const ErrorHandler = async (error: any,
  _req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Internal server error' });
};

export default ErrorHandler;
