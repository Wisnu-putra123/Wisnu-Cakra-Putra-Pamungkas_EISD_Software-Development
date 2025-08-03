export default async function HomePage() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-blue-950 p-5">
      {products.map(product => (
        <div key={product.id} className="border p-4 bg-white rounded m-5">
          <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
          <h3 className="text-red-700 font-semibold text-sm mt-2">{product.title}</h3>
          <p className="text-green-600 font-bold">${product.price}</p>
          <a href={`/product/${product.id}`} className="text-blue-500 text-sm">Lihat Detail</a>
        </div>
      ))}
    </div>
  )
}

