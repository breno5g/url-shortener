import { PrismaClient } from '@prisma/client';

import { IUrlRepository } from '@interfaces/IUrlRepository';

export class UrlRepository implements IUrlRepository {
  private readonly db: PrismaClient;
  constructor (db: PrismaClient) {
    this.db = db;
  }

  public async createUrl (url: string): Promise<string> {
    const newUrl = await this.db.url.create({
      data: {
        url
      }
    });

    return newUrl.id;
  }

  public async findOneById (id: string): Promise<string | null> {
    const url = await this.db.url.findUnique({
      where: {
        id
      }
    });

    return url?.url ?? null;
  }
}
