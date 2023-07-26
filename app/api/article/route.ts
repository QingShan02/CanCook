import { NextResponse } from "next/server"
import { articleService } from "../service/article";
export async function GET() {

    const data = await articleService.findAll();

    return NextResponse.json(data);
}
export async function POST(req, res) {
    const { title, content, image, createDate, staffId, categoryId, directory } = req.body;

    const article = await articleService.insert({
        title,
        content,
        image,
        createDate,
        staffId,
        categoryId,
        directory
    });

    return NextResponse.json(article);
}