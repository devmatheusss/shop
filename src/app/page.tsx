import { prisma } from "@/prisma"

export default async function Home() {
  const products = await prisma.product.findMany()

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}
      <span>Hello</span>
    </div>
  )
}