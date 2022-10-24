import React, { useState, useRef, useEffect } from 'react'

export default function Form(){

    const [email, setEmail] = useState('')
    const inputValue = useRef(null)
    const focusInput = useRef(null)
    
    //  Using the value and onChange attribute
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email)
        // Clearing the values in input field
        setEmail('')
    }

    // Using useRef Hook
    const submitHandlerTwo = (e)=>{
        e.preventDefault()
        console.log(inputValue.current.value)
    }

    const submitHandlerThree = (e) => {
        e.preventDefault()
        console.log(focusInput.current.value)
    }

    // Making input field focus on page load
    useEffect(() => {
        focusInput.current.focus()
    }, [])

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

            <h2>Focus input with useRef Hook</h2>
            <form onSubmit={submitHandlerThree} >
                <input type="text" ref={focusInput}/>
                <button>SUBMIT INPUT</button>
            </form>
        </div>
    )
}