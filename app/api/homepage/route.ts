import { NextResponse } from "next/server"
import { directoryService } from "../service/directory";
import { categoryService } from "../service/category";
export async function GET() {
    const dic = await directoryService.findAll();
    const cate = await categoryService.findAll();
    const combined = {
        category: cate,
        directory: dic
    };
    return NextResponse.json(combined);
}