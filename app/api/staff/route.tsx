import { NextResponse } from "next/server"
import { staffService } from "../service/staff";
export async function GET() {
    const data = await staffService.findAll();
    // const data = [{ name: "John Doe" }, { name: "Minh" }];
    return NextResponse.json(data);
}
