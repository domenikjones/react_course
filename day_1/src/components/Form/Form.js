import React, { useState, useEffect } from 'react'

const Form = () => {
  const [foo, setFoo] = useState('bar')
  const [bar, setBar] = useState('foo')

  useEffect(() => {
    console.log('useEffect_1')
    return () => {
      console.log('didUnmount')
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    console.log('onSubmit', foo, bar)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Foo: {foo}</p>
      <p>Bar: {bar}</p>
      <input
        name="foo"
        type="text"
        value={foo}
        onChange={e => {
          setFoo(e.target.value)
          setBar('HAHA')
        }}
      />
      <input
        name="bar"
        type="text"
        value={bar}
        onChange={e => {
          setBar(e.target.value)
        }}
      />
      <button>Submit</button>
    </form>
  )
}

export default Form
