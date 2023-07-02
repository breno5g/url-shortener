import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main (): Promise<void> {
  await prisma.user.create({
    data: {
      email: 'johndoe@mail.com',
      name: 'John Doe'
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
