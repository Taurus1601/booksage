import { useState } from 'react';
import './apply.css';
import axios from 'axios';

function Apply() {
 const [values , setValues] = useState({
    address: '',
    name: '',
    Aadhar_number: '',
    RD_number: '',
    income: '',
    bookname: '',
    bookcost: ''
  });
  const handlechange =(e) => { 
    setValues({...values , [e.target.name]: [e.target.value]});
    console.log({[e.target.name]:[e.target.value]});
  }
  const handlesubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/applicants', values)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  };
  return (
    <>
    <center>
      <form className='bg-gradient-to-r from-blue-500 to-green-500' onSubmit={handlesubmit}>
        <h1 className='heading'>Apply</h1>

        <input type="text" placeholder="        Name" className='input' name='name'  onChange={handlechange}/>
        <input type="text" placeholder="        Address" className='input'name='address'  onChange={handlechange}/>
        <input type="text" placeholder="        City" className='input' name='city'  onChange={handlechange}/>
        <input type="text" placeholder="        State" className='input' name='state' onChange={handlechange}/>
        <input type="number" placeholder="        Zip-Code" className='input' name='zipcode' onChange={handlechange}/>
        <input type="text" placeholder="          Aadhar Number" className='input' name='Aadhar_number' onChange={handlechange}/>
        <input type="number" placeholder="         Income" className='input' name='income' onChange={handlechange}/>
        <input type="text" placeholder="        RD-Number" className='input' name='RD_number' onChange={handlechange}/>
        <input type="text" placeholder="          Book-Name" className='input' name='bookname' onChange={handlechange}/>
        <input type="number" placeholder="          Book-Cost" className='input' name='bookcost' onChange={handlechange}/>
       < input type="submit"  className='submit'/>
      </form>
    </center>
    </>
  );
};

export default Apply;
