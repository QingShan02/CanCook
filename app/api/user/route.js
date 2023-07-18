import { NextResponse } from "next/server"
export async function GET() {
    const data = [{ name: "John Doe" }, { name: "Minh" }];

    return NextResponse.json(data);
}