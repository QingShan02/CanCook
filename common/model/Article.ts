export interface Article {
    id?: number,
    title: string,
    image?: string,
    content?: string,
    createDate?: string,
    categoryid?: string,
    directory?: Array<{
        id: string;
    }>,
    staffId?: string,
    nameStaff?: string,
    sumLike?: number,
    sumComment?: number,
    comment?: number,
    view: number,
}