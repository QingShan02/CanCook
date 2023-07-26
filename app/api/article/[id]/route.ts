import { NextResponse,NextRequest } from "next/server"
import { articleService } from "../../service/article";
import fs from 'fs';
import path from "path";
export async function GET(request,context) {
    const folder = '..\\public\\content';

    const id = context.params.id;
    
    const data = await articleService.findById(id);

    const content = data.content;


    const filePath = path.join('public',folder, content.toString());

    console.log(filePath);
    const readFile = await fs.promises.readFile(filePath, 'utf8');

    return NextResponse.json(readFile);
}

