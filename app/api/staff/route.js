import { NextResponse } from "next/server"
import db from "@/app/db";
import { staffService } from "../service/staff";
export async function GET() {
    const data = await staffService.findAll();
    // const data = [{ name: "John Doe" }, { name: "Minh" }];

    return NextResponse.json(data);
}