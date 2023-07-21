import { NextResponse } from "next/server"
import { directoryService } from "../service/directory";
export async function GET() {
    const data = await directoryService.findAll();

    return NextResponse.json(data);
}