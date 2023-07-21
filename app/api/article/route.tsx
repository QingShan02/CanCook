import { NextResponse } from "next/server"
import { articleService } from "../service/article";
export async function GET() {
    const data = await articleService.findAll();

    return NextResponse.json(data);
}