"use client"
import Link from "next/link";
import "../login.css";
import { usePathname } from "next/navigation";

export default function StudentLogin() {

  const route = usePathname()
  

  return (
    <div className="page-heading">
      <h3>Login student page</h3>
      <Link href={`/student_list/`} >Go to student list</Link>
    </div>
  );
}
