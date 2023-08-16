import { NextRequest, NextResponse } from "next/server";
import { articleService } from "../../service/article";

export async function GET(req: NextRequest) {
    let hotTopics = await articleService.findTop4View();
    return NextResponse.json(hotTopics);
}