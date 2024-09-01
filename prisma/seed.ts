import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.product.createMany({
        data: [
            {
                name: "Product 1",
                description: "Description 1",
                price: 100,
                images: ["image1.jpg", "image2.jpg"],
                category: "Category 1",
                rating: 4
            },
            {
                name: "Samsung Galaxy S24 Ultra",
                description: "Descrição",
                price: 100000,
                images: ["image1.jpg", "image2.jpg"],
                category: "Smartphones",
                rating: 5
            },
        ],
        skipDuplicates: true
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })