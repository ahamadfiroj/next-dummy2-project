import Link from "next/link"
import PriceComponent from "./clicktoprice"
async function apiFetch() {
  const data = await fetch("https://dummyjson.com/products")
  const aynData = await data.json()
  return aynData.products
}
export default async function ProductList() {
  const listData = await apiFetch()

  return (
    <div className="page-heading">
      <h3>Product list page</h3>

      {listData.length && listData.map((item) => {
        return <div key={item.id}>
          <Link href={`/product_list_server_component/${item.id}`}><div>Name:{item.title}</div></Link>
          <PriceComponent itemData = {item} />
        </div>
      })}
    </div>
  );
}

export function generateMetadata () {
  return {
    title : "server page next app",
    description:""
  }
}
