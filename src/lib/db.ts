import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient().$extends({
    query: {
      designers: {
        async create({ args, query }) {
          // Automatically create the slug
          if (!args.data.slug && args.data.firstName && args.data.lastName) {
            let baseSlug = `${args.data.firstName}-${args.data.lastName}`
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, ""); // Remove special characters

            let slug = baseSlug;
            let count = 1;

            while (await prisma.designers.findUnique({ where: { slug } })) {
              slug = `${baseSlug}-${count}`;
              count++;
            }

            args.data.slug = slug;
          }

          return query(args);
        },
      },
    },
  });
};

declare const globalThis: {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
