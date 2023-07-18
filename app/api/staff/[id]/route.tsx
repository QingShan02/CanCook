import { NextResponse,NextRequest } from "next/server"
import { staffService } from "../../service/staff";
import { query } from "../../constant/staff";
export async function GET(request,context) {
    const id = context.params.id;
    const data = await staffService.findById(id);
    return NextResponse.json(data);
}