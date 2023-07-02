import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main (): Promise<void> {
  await prisma.url.create({
    data: {
      url: 'https://www.google.com'
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
