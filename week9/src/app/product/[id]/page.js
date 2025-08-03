export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return products.map(product => ({ id: product.id.toString() }))
}

export default async function ProductDetail({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const product = await res.json()

  return (
    <div className="pt-15 pb-15 pl-35 pr-35 bg-white rounded shadow-md min-h-screen ">
      <img src={product.image} alt={product.title} className="h-60 mx-auto object-contain" />
      <h1 className="text-xl text-red-700 font-bold mt-4">{product.title}</h1>
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      <p className="text-green-700 font-bold text-lg mt-4">${product.price}</p>
    </div>
  )
}
