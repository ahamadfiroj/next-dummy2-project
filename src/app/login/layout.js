"use client"
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const path = usePathname()

  return (
    <div >
      {children}
      <div className="navigator">
        <h3>login navigator</h3>
        <Link href="/login/login_student">Student login </Link>
        <Link href="/login/login_teacher">Teacher login</Link>
        <Link href="/">Go to Home page</Link>
      </div>
    </div>
  );
}
