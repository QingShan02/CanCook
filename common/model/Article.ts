export interface Article {
    id: number,
    title: string,
    image: string,
    content?: string,
    createDate?: Date,
    nameStaff?: string,
    sumLike?: number,
    sumComment?: number,
    comment?: string
}