import { NextResponse } from "next/server";

export async function GET(){
    // return NextResponse.json({message: "hello"})
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
}