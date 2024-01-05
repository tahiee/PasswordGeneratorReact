import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [password, setPassword] = useState('Pass')
  const [length, setLength] = useState(5)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [lowerLetters, setLowerLetters] = useState(false)
  const [upperLettes, setUpperLetters] = useState(false)

  useEffect(() => {
    generatePassowrd()
  }, [length, numbers, symbols, lowerLetters, upperLettes])

  function inculdeNumbers(e) {
    setNumbers(e.target.checked)
  }
  function inculdeSymbols(e) {
    setSymbols(e.target.checked)
  }
  function includeLower(e) {
    setLowerLetters(e.target.checked)
  }
  function includeUpper(e) {
    setUpperLetters(e.target.checked)
  }

  function generatePassowrd() {
    let pass = ''
    let str = ''
    if (numbers) {
      str += '0123456789'
    }
    if (symbols) {
      str += '!@#$%^&*_+><?/~{}-,.'
    }
    if (lowerLetters) {
      str += 'abcdefghijkmlo'
    }
    if (upperLettes) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    for (let i = 0; i < length; i++) {
      let createPass = Math.floor(Math.random() * str.length)
      let char = str.charAt(createPass)
      pass += char
    }
    setPassword(pass)
  }


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Password Generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>

        <h1>
          {password} <br />
        </h1>
        <h1>{ }</h1>
        <label htmlFor="length">{length}</label>
        <input type="range" id="Length" min={5} max={20} onChange={(e) => setLength(e.target.value)} value={length} />
        <br />
        <label htmlFor="numbers">Numbers</label>
        <input type="checkbox" id="numbers" onChange={inculdeNumbers} checked={numbers} />
        <br />
        <label htmlFor="symbols">Symbol</label>
        <input type="checkbox" id="symbols" onChange={inculdeSymbols} />
        <br />
        <label htmlFor="LowerLetters">Lower Letters</label>
        <input type="checkbox" id="LowerLetters" onChange={includeLower} />
        <br />
        <label htmlFor="UpperLetter">Upper Letters</label>
        <input type="checkbox" id="UpperLetter" onChange={includeUpper} />
      </section>
    </>
  )
}

export default App
