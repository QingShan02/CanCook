import { NextRequest, NextResponse } from "next/server"
import { staffService } from "../service/staff";
export async function GET(req:NextRequest) {
    let email = req.nextUrl.searchParams.get("email");
    const data = email ? await staffService.findByEmail(email) : await staffService.findAll();
    return NextResponse.json(data);
}
