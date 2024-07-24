function ProductCard({cardDetails}) {
    const {name, description, price, category} = cardDetails;
    return (
      <div className="border-2 border-slate-300 bg-red-600 p-4 text-center text-2xl">
            <h1>{name}</h1>
           <h4>{description}</h4>
           <p>{price}</p>
           <p>{category}</p>
      </div>
    )
  }
  
  export default ProductCard
  