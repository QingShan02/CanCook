import { NextResponse } from "next/server"
import { articleService } from "../service/article";
import fs from 'fs';
import path from "path";
export async function GET() {

    const data = await articleService.findAll();

    return NextResponse.json(data);
}