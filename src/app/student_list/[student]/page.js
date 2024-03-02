"use client"
import { usePathname, useRouter } from "next/navigation";

export default function Student({params}) {
  const route= useRouter()
  const path = usePathname()
  const navigate = (url)=>{
    route.push(url)
  }
  return (
    <div className="page-heading" style={{width:"400px", textAlign:"right"}}>
      <h3>student name {params.student}</h3>
      <button onClick={()=>navigate('/login/login_student/')}> Go to student login page</button>
    </div>
  );
}
