import React from 'react'
import { DrinkH } from '@/components/definitions';
import Link from 'next/link';
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const getDrink = async (id : string) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("response is not ok");
  }

  const data = await response.json();
  return data.drinks[0];
}

export default async function Drink({params} : {params : any}) {

  const drink : DrinkH= await getDrink(params.id);
  const name = drink.strDrink;
  const thumb = drink.strDrinkThumb;
  const instructions = drink.strInstructions;



  return (
    <div>
      <Link href="/bar" className="btn btn-primary my-8">Back</Link>
      <Image className="rounded-lg shadow-lg mx-auto " src={thumb} width={300} height={300} alt={''}/>
      <h1 className="text-4xl my-8">{name}</h1>
      <p>{instructions}</p>
    </div>
  )
}
