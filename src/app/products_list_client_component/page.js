"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    async function apiFect (){
      const data = await fetch("https://dummyjson.com/products")
        const aynData =await data.json()
        setProducts(aynData.products)
    }
    apiFect()

  }, [])
  console.log("products", products)
  return (
    <div className="page-heading" >
      <h3>Product list page</h3>
      
      {products.length && products.map((item)=>{
        return <Link href={`/products_list_client_component/${item.id}`} key={item.id}><div>Name:{item.title}</div></Link>
      })}
    </div>
  );
}
