import { NextResponse, NextRequest } from "next/server"
import { articleService } from "../../service/article";
import path from "path";
import fs from "fs";
import { useEffect } from "react";

export async function GET(request, context) {
  const id = context.params.id;
  const data = await articleService.totalLikeAndComment(id);
  const data2 = await articleService.findById(id);
  const dataCategory = await articleService.findByCategoryId(id);
  const dataDirectory = await articleService.findByDirectoryId(id);

  const newpath = path.join(process.cwd() + "/public/content/" + id + ".txt");

  const readFile = await fs.promises.readFile(newpath, 'utf8');


  const resp = {
    view: data.view,
    content: readFile,
    title: data.title,
    thumbnail: data2.thumbnail,
    category: dataCategory.categoryid,
    directory: dataDirectory
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
