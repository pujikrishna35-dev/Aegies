import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Aegis Overseas database...');

  // Create Destinations
  const uk = await prisma.destination.upsert({
    where: { code: 'UK' },
    update: {},
    create: {
      name: 'United Kingdom',
      code: 'UK',
      slug: 'uk',
      currency: 'GBP',
      overview: 'World-renowned universities and 2-year post-study work visa.',
    },
  });

  const usa = await prisma.destination.upsert({
    where: { code: 'USA' },
    update: {},
    create: {
      name: 'United States',
      code: 'USA',
      slug: 'usa',
      currency: 'USD',
      overview: 'Leading research powerhouses with 3-year STEM OPT extensions.',
    },
  });

  // Create University
  const oxford = await prisma.university.upsert({
    where: { slug: 'oxford' },
    update: {},
    create: {
      name: 'University of Oxford',
      slug: 'oxford',
      destinationId: uk.id,
      city: 'Oxford',
      ranking: 1,
      tuitionRange: '£28,000 - £44,000',
    },
  });

  console.log('Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
