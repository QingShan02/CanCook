import { NextResponse,NextRequest } from "next/server"
import { articleService } from "../../service/article";
import path from "path";
import  fs from "fs";

export async function GET(request,context) {
    const id = context.params.id;
    const data = await articleService.totalLikeAndComment(id);
        
    const newpath = path.join(process.cwd() + "/public/content/" + id + ".txt");

    const readFile = await fs.promises.readFile(newpath, 'utf8');
    
    return new NextResponse(readFile, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
        },
      });
}
export async function DELETE(request,context){
  const id = context.params.id;
  await articleService.deleteById(id);
  return NextResponse.json({});
}
