import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState("")
    const OnInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length<=1) return
        
        onAddCategory(inputValue)
        setInputValue("")
        
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="buscar Gifs" value={inputValue} onChange={OnInputChange}/>

    </form>
  )
}
