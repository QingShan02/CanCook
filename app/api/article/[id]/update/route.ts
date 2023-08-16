import { NextResponse, NextRequest } from "next/server"
import { articleService } from "../../../service/article";
import { unlink } from 'fs/promises';
import path from "path";
import fs from "fs";


export async function PUT(req: NextRequest, context) {
    const id = context.params.id;  // Lấy id từ đường dẫn
    const body = await req.json();
    console.log(body);
    await articleService.updatea(id, body);
    const filePath = path.join(process.cwd(), "\\public\\content\\" + id + '.txt');
    await unlink(filePath);
    const newpath = path.join(process.cwd() + "\\public\\content\\" + id + ".txt");
    await fs.promises.writeFile(newpath, body.content.toString());
    return NextResponse.json({});
}