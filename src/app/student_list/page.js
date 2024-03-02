"use client"
import Link from "next/link";
import { useEffect } from "react";
const STUDENTS = [
  {name:"anil", id:1},
  {name:"subham", id:2},
  {name:"vivek", id:3},
  {name:"ayush", id:4},
  {name:"raj", id:5}
]
export default function StudentList() {
  useEffect(()=>{
    async function apiFect (){
      const data = await fetch("https://dummyjson.com/products")
        const aynData =await data.json()
        console.log("data", aynData.products)
        return aynData.products
    }
   
    console.log("data", apiFect())
  }, [])

  return (
    <div className="page-heading">
      <h3>Student list page</h3>
      
      {STUDENTS.map((item)=>{
        return <Link href={`/student_list/${item.name}`} key={item.id}>{item.name}</Link>
      })}
    </div>
  );
}
