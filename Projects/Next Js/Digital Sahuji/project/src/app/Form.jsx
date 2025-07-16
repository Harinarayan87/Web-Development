import React, { useState } from 'react'

function Form() {
    let [input, setInput]= useState('Harry')
    let abcd=(e)=>{
        setInput(e.target.value)
    } 
  return (
    <div>
      <h1>HTML FOrm {input}</h1>
      <input name='fname' type="text" className='border p-3' onChange={abcd} />
    </div>
  )
}

export default Form
