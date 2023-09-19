import React, { useState } from "react";

function Form() {
    const[inputText, setInputText] = useState("")
    const[counter, setCounter] = useState(0)
    const[selectedOption, setSelectedOption] = useState("option1")
    const[itemList, setItemList] = useState([])

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleCounter = () => {
        setCounter(counter + 1)
    }

    const handleAddItem = () => {
        const newItem = {
            text: inputText,
            option: selectedOption,
            count: counter,
        }
        setItemList([...itemList, newItem])
        setInputText("")
        setCounter(0)
    }

    return (
        <div>
            <h1>Component with lists</h1>
            <input type="text"
            placeholder="Enter text"
            value={inputText}
            onChange={handleInputChange}
            />
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <br></br>
            <button onClick={handleCounter}>Click {counter}</button>
            <br></br>
            <button onClick={handleAddItem}>Add Item</button>
            <br></br>
            <ul>
                {itemList.map((item, index) => (
                    <li key={index}>
                        Text: {item.text}, Option: {item.option}, Count: {item.count}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Form;