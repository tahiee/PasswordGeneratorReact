import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [password, setPassword] = useState('Pass');
  const [length, setLength] = useState(5);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [lowerLetters, setLowerLetters] = useState(false);
  const [upperLetters, setUpperLetters] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, symbols, lowerLetters, upperLetters]);

  function includeNumbers(e) {
    setNumbers(e.target.checked);
  }

  function includeSymbols(e) {
    setSymbols(e.target.checked);
  }

  function includeLower(e) {
    setLowerLetters(e.target.checked);
  }

  function includeUpper(e) {
    setUpperLetters(e.target.checked);
  }

  function handleHomeClick() {
    alert('You are in the home page!');
  }

  function generatePassword() {
    let pass = '';
    let str = '';
    if (numbers) {
      str += '0123456789';
    }
    if (symbols) {
      str += '!@#$%^&*_+><?/~{}-,.';
    }
    if (lowerLetters) {
      str += 'abcdefghijkmlo';
    }
    if (upperLetters) {
      str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    for (let i = 0; i < length; i++) {
      let createPass = Math.floor(Math.random() * str.length);
      let char = str.charAt(createPass);
      pass += char;
    }
    setPassword(pass);
  }

  function copyToClipboard() {
    if (password === '') {
      alert('Please Select below Row');
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = password;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Password Copied Successfully');
    }
  }

  return (
    <>
      <body>
        <Navbar expand="lg" className="bg-white">
          <Container>
            <Navbar.Brand href="#home" className='hover:text-red-800'>Password Generator</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className='hover:text-red-800' onClick={handleHomeClick}>Home</Nav.Link>
                <Nav.Link href="https://github.com/tahiee" className='hover:text-red-800'>Github</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='bg-teal-100 '>
          <br />
          {/* text area start */}
          <section className='sm:text-lg sm:pr-20 sm:pl-20 pr-96 pl-96 relative bg-teal-100 font-black items-center text-center text-5xl leading-normal' >
            <h1>Instantly generate a secure, random password with the LastPass online tool</h1>
          </section>
          {/* text area end */}

          {/* password show area start */}
          <section className='mt-2 flex text-center items-center justify-center bg-teal-100'>
            <div className='sm:w-auto w-96 ' >
              <h1 className='text-blue-950 bg-white shadow-lg h-28 rounded-t-3xl text-4xl mt-2 flex text-center items-center justify-between '>
                <label className='ml-2' htmlFor="">
                {password}
                </label>
                <Button className='ml-1 mr-1' variant="info" onClick={() => copyToClipboard()}>Copy</Button>
                {/* <Button className='mr-1' variant="info" onClick={() => copyToClipboard()}>Refresh</Button> */}
              </h1>
            </div>
          </section>
          {/* password show area end */}

          {/* length area start */}
          <section className=' flex text-center items-center justify-center  mt-2 bg-teal-100'>
            <div className='px-4 sm:w-72  w-96 bg-white shadow-lg h-18 rounded '>
              <div className=' h-14 flex text-center items-center justify-center '>
                <label className='mr-4 italic text-3xl text-blue-950' htmlFor="length">{length}</label>
                <input className='w-80 lp-custom-range__number ' name="length" type="range" id="Length" step="1"  min={5} max={15} onChange={(e) => setLength(e.target.value)} value={length} />
              </div>
            </div>
          </section>
          {/* length area end */}

          {/* checkbox start here */}
          <section className=' flex text-center items-center justify-center  mt-2 bg-teal-100'>
            <div className='font-display text-blue-950 px-6 sm:w-72 w-96 bg-white shadow-lg h-18 rounded'>
              <div className='flex text-center items-center justify-between'>
                <label className='text-2xl ' htmlFor="numbers">Numbers</label>
                <input className='ml-2 h-4 w-4' type="checkbox" id="numbers" onChange={includeNumbers} checked={numbers} />
              </div>

              <div className='flex text-center items-center justify-between'>
                <label className='text-2xl' htmlFor="symbols">Symbols</label>
                <input className='ml-2 h-4 w-4' type="checkbox" id="symbols" onChange={includeSymbols} />
              </div>

              <div className='flex text-center items-center justify-between'>
                <label className='text-2xl' htmlFor="LowerLetters">Lower Letters</label>
                <input className='ml-2 h-4 w-4' type="checkbox" id="LowerLetters" onChange={includeLower} />
              </div>

              <div className='flex text-center items-center justify-between'>
                <label className='text-2xl' htmlFor="UpperLetter">Upper Letters</label>
                <input className='ml-2 h-4 w-4' type="checkbox" id="UpperLetter" onChange={includeUpper} />
              </div>
            </div>
          </section>
          <br />
          {/* checkbox end here */}
        </div>

      </body>

    </>
  );
}

export default App;