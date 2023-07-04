import { NextFunction, Request, Response } from 'express';

export class UrlController {
  private readonly service: any;
  constructor (service: any) {
    this.service = service;

    this.createUrl = this.createUrl.bind(this);
    this.findOneById = this.findOneById.bind(this);
  }

  public async createUrl (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { url } = req.body;
      const newUrl = await this.service.createUrl(url);
      res.status(201).send({ url: `https://url-shortener-9zlu.onrender.com/url/${newUrl}` });
    } catch (error) {
      next(error);
    }
  }

  public async findOneById (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const url = await this.service.findOneById(id);
      res.redirect(url);
    } catch (error) {
      next(error);
    }
  }
}
