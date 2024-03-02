import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>My First Next project</h3>
      <Link href="/products_list_client_component">Go to client side product render page</Link>
        <Link href="/product_list_server_component">Go to server side product render page</Link>
    </main>
  );
}
