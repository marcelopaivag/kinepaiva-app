import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {

    const service = await prisma.service.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(service)
    return NextResponse.json(service)
}

export async function PUT(request, { params }) {
    const data = await request.json()
    const updateService = await prisma.service.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(updateService)
}

export async function DELETE(request, { params }) {
    try {
        const removeService = await prisma.service.delete({
            where: {
                id: Number(params.id)
            }
        }
        )
        return NextResponse.json(removeService)

    } catch (error) {
        return NextResponse.json(error.message)
    }
}