import Link from "next/link";

export default function ProductDescription(params) {
  console.log("params", params)
  console.log("process", process.env.NODE_ENV)
  return (
    <div>
      {process.env.NODE_ENV == "" ?<h3>development product description</h3> : <h3> production product description</h3>}
      <Link href="/product_list_server_component">Go to product list page</Link>
    </div>
  );
}
