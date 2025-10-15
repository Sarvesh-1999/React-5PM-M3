import { useEffect, useState } from "react";

const FetchProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  async function getProducts() {
    let resp = await fetch("https://dummyjson.com/products");
    let data = await resp.json();
    console.log(data); // {products:[] , skip: 0, total:194, limit:30}
    setAllProducts(data.products); // [{},{},{}....]
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <h1 className="font-bold">All Products</h1>

      <article>
        {allProducts.length === 0 ? (
          <div>
            <p>No products available...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {allProducts.map((product) => {
              return (
                <div key={product.id} className="bg-white m-3 shadow-2xl p-5 rounded-2xl flex flex-col justify-between">
                  <img src={product.thumbnail} height={150} width={150} alt="" className="block mx-auto"/>
                  <h2 className="font-bold text-xl">{product.title}</h2>
                  <p className="py-3 text-sm text-gray-800">{product.description}</p>
                  <p className="font-semibold flex justify-between">
                    <span>Rs. {product.price}</span>
                    <span className="bg-neutral-200 px-3 py-0.5 rounded-full">
                        {product.rating} ⭐
                    </span>
                   </p>
                  <button className="block bg-violet-500 w-full rounded py-2 mt-4 text-white font-semibold">
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </article>
    </div>
  );
};

export default FetchProducts;
