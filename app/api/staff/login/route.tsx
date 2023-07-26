
import { NextResponse } from "next/server";
import { staffService } from "../../service/staff";
import { NextApiResponse } from "next";

export async function GET(req, res:NextApiResponse) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    let object = {
        email: searchParams.get("email"),
        password: searchParams.get("password")
    }
    let data = await staffService.login(object);
    return new NextResponse(JSON.stringify(data || {message:"login fail!"}), {
        status: data==undefined? 500:200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}