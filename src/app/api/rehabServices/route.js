import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma";

export async function GET() {
    const services = await prisma.service.findMany()
    return NextResponse.json(services)
}

export async function POST(request) {
    const { image, title, description, text } = await request.json()
    const newService = await prisma.service.create({
        data: {
            image,
            title,
            description,
            text
        }
    })
    return NextResponse.json(newService)
}

