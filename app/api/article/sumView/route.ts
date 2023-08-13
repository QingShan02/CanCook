import { NextRequest, NextResponse } from "next/server";
import { articleService } from "../../service/article";

export async function GET(req: NextRequest) {
    let sumView = await articleService.sumView();
    return NextResponse.json(sumView.sumview);
}