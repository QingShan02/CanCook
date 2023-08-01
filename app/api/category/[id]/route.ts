import { NextResponse, NextRequest } from "next/server"
import { categoryService } from "../../service/category";

export async function GET(request, context) {
    const id = context.params.id;
    const data =  await categoryService.findById(id);
    return NextResponse.json(data);
}