import Link from "next/link";
import "./globals.css";

export const metadata = {
  title:"my first next app"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        {/* <Link href="/products_list_client_component">Go to client side product render page</Link>
        <Link href="/products_list_client_component">Go to client side product render page</Link> */}
      </body>
    </html>
  );
}
