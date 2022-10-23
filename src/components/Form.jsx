import React, { useState } from 'react'

export default function Form(){

    const [email, setEmail] = useState('')
    

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(email)
        // Clearing the values in input field
        setEmail('')
    }

    return(
        <div className="form">
            <form onSubmit={ submitHandler }>
                <input type="text" value={email} onChange = { e => setEmail(e.target.value) } />
                <button>SUBMIT INPUT</button>
            </form>
        </div>
    )
}