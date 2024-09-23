// fake login to send user to dashboard /editor page 

import { NextRequest,NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    return NextResponse.json({message: "Login successful",success:true},{status: 200});
    
}