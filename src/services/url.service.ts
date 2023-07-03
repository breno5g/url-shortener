import { IUrlRepository } from '@interfaces/IUrlRepository';

export class UrlService {
  private readonly repository: IUrlRepository;
  constructor (urlRepository: IUrlRepository) {
    this.repository = urlRepository;
  }

  public async createUrl (url: string): Promise<string> {
    const newUrl = await this.repository.createUrl(url);
    return newUrl;
  }

  public async findOneById (id: string): Promise<string | null> {
    const url = await this.repository.findOneById(id);
    return url;
  }
}
