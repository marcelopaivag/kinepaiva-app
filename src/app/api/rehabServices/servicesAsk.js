import { prisma } from '@/libs/prisma';

export default async function handler(req, res) {
  const services = await prisma.service.findMany();
  res.json({ services });
}
