import fs from 'fs';
import { NextRequest, NextResponse } from "next/server"
import { articleService } from "../service/article";
<<<<<<< HEAD
import path from 'path';
export async function GET() {
=======
import fs from 'fs';
import path from "path";
export async function GET() {

>>>>>>> 17d11d8d79a4f63b627fba39af7f6b2e6794dd10
    const data = await articleService.findAll();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    await articleService.insert(body);
    const id = await articleService.lastInsertId();
    const newpath = path.join(process.cwd() + "\\public\\content\\" + id.last_insert_id + ".txt");
    await fs.promises.writeFile(newpath, body.content.toString());
    return NextResponse.json({});
}