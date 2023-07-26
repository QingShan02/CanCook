export interface Article {
    id?: number,
    title: string,
    image?: string,
    content?: string,
    createDate?: Date,
    categoryId?:string,
    directory?: Array<{
        id: string;
    }>,
    staffId?: string,
    nameStaff?: string,
    sumLike?: number,
    sumComment?: number,
    comment?: string
}