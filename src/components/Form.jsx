import React, { useState, useRef } from 'react'

export default function Form(){

    const [email, setEmail] = useState('')
    const inputValue = useRef(null)
    

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email)
        // Clearing the values in input field
        setEmail('')
    }

    const submitHandlerTwo = (e)=>{
        e.preventDefault()
        console.log(inputValue.current.value)
    }

    return(
        <div className="form">
            <h1>Two ways to grab the vaules from Input fields</h1>
            
            <h2>Onchange and Value</h2>
            <form onSubmit={ submitHandler }>
                <input type="text" value={email} onChange = { e => setEmail(e.target.value) } />
                <button>SUBMIT INPUT</button>
            </form>

            <h2>useRef Hook</h2>
            <form onSubmit={submitHandlerTwo} >
                <input type="text" ref={inputValue}/>
                <button>SUBMIT INPUT</button>
            </form>
        </div>
    )
}