import leadDetail from "../../lib/models/lead";
import connectMongoDB from "../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name,website,project,email,reason,decision,is_budget} = await request.json();
        await connectMongoDB();         
        await leadDetail.create({ name,website,project,email,reason,decision,is_budget});
        return NextResponse.json({ message: "lead Created" }, { status: 201 });
    } catch (error) {
        console.log({error})
        return NextResponse.json({ error: "Failed to create leads" }, { status: 500 });
    }
}
