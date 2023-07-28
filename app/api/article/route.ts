import fs from 'fs';
import { NextRequest, NextResponse } from "next/server"
import { articleService } from "../service/article";
import path from 'path';
export async function GET() {
    const data = await articleService.findAll();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    await articleService.insert(body);
    const id = await articleService.lastInsertId();
    const newpath = path.join(process.cwd() + "\\public\\article\\" + id.last_insert_id + ".txt");
    await fs.promises.writeFile(newpath, body.content.toString());
    return NextResponse.json({});
}