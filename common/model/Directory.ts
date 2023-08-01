import { Article } from "./Article";

export interface Directory {
    id?: string,
    name?: string,
    listArticle: Array<Article>

}