import { NextResponse,NextRequest } from "next/server"
import { articleService } from "../../service/article";
import path from "path";
import  fs from "fs";
export async function GET(request,context) {
    const id = context.params.id;
    const data = await articleService.totalLikeAndComment(id);
    const content = data.content;
        
    const filePath = path.join('D:\\PTBT_WEB\\app\\api\\article', content.toString());

    const readFile = await fs.promises.readFile(filePath, 'utf8');
    return NextResponse.json(readFile);
}

