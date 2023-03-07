import { INews } from "./news.interface";
import axios, { AxiosResponse } from "axios";

export class NewsService {
  private _path: string = "https://jsonplaceholder.typicode.com/posts";

  constructor() {}

  public async GetPostsAsync(): Promise<INews[]> {
    const posts = await axios.get<INews[]>(this._path);
    return posts.data;
  }
}
