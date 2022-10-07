import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifSearcherApp = () => {

  const [categories, setCategories] = useState([ "Anime"])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
      console.log(newCategory)
      setCategories([newCategory, ...categories ])
  }


  return (
    <>
    <h1>GifSearcherApp</h1>

    {/* Input */}
    <AddCategory onAddCategory={ onAddCategory }/>

    {/* Listado de Gifs */}
  
      {categories.map((category) => {
        return (
          <GifGrid key={category} category={category}/>
      )})}
      {/* Gifs */}
    
    </>
  )
}
