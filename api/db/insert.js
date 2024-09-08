const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Hsu",
      username: "Hsu",
      profile: "Profile",
      password: "Password",
      posts: {
        create: [
          { content: "Hsu post content" },
          { content: "Hsu post another content" },
          { content: "Another Content" },
        ],
      },
    },
  });

  console.log("Done...");
}

main();
