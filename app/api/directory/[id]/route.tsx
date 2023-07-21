import { NextResponse,NextRequest } from "next/server"
import { directoryService } from "../../service/directory";

export async function GET(request,context) {
    const id = context.params.id;
    const data = await directoryService.findById(id);
    return NextResponse.json(data);
}