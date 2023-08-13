import { NextResponse, NextRequest } from "next/server"
import { articleService } from "../../service/article";
import path from "path";
import fs from "fs";

export async function GET(request, context) {
  const id = context.params.id;
  const data = await articleService.totalLikeAndComment(id);

  const newpath = path.join(process.cwd() + "/public/content/" + id + ".txt");

  const readFile = await fs.promises.readFile(newpath, 'utf8');
  const resp = {
    view:data.view,
    content:readFile
  }
  return NextResponse.json(resp);
}
export async function DELETE(request, context) {
  const id = context.params.id;
  await articleService.deleteById(id);
  return NextResponse.json({});
}
export async function PUT(request, context) {
  const id = context.params.id;
  await articleService.updateView(id);
  return NextResponse.json({});
}