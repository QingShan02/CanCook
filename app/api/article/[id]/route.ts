import { NextResponse,NextRequest } from "next/server"
import { articleService } from "../../service/article";

export async function GET(request,context) {
    const id = context.params.id;
    const data = await articleService.totalLikeAndComment(id);
    return NextResponse.json(data);
}

