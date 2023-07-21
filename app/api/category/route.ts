import { NextResponse } from "next/server"
import { categoryService } from "../service/category";
export async function GET() {
    const data = await categoryService.findAll();

    return NextResponse.json(data);
}