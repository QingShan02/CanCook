import fs from 'fs';
import { NextRequest, NextResponse } from "next/server"
import { articleService } from "../service/article";
import path from 'path';
export async function GET(req: NextRequest) {
    const p : any = req.nextUrl.searchParams.get("p");
    let data = null;
    if (p == null || p == undefined) {
        data = await articleService.findAll();
    }else{
        let article = await articleService.findByPage(p*8);
        let sum = await articleService.getSum();
        data = {
            article:article,
            pageCount:Math.ceil(sum[0].count*1/8),
        }
    }
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

