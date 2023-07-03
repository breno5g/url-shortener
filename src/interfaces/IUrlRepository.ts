export interface IUrlRepository {
  createUrl(url: string): Promise<string>
  findOneById(id: string): Promise<string | null>
}
