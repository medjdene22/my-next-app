import DrinksList from '@/components/drinkList';
import React from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"

export default async function Bar() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("response is not ok");
  }
  const data = await response.json();

  return (
    <div>
      <DrinksList drinks={data.drinks}/>
    </div>
  )
}
