import { data } from "@/app/page"
import Image from "next/image"

export default function page({params}) {
    const star = data.find(pro => pro.id === params.slug)


  return (
    <section className="bg-amber-700 font-serif m-auto">
       <h1 className="font-bold text-2xl"> {star.name}</h1>
       <Image src={star.image} alt={star.name} width={300} height={300}/>
       <h2>Nationality: {star.nationality}</h2>
       <p>Profession: {star.profession}</p>
       <p>Date of Birth: {star.date_of_birth}</p>
       <p>Net Worth: {star.net_worth}</p>
       <p>Description: {star.description}</p>
    </section>
  )
}
