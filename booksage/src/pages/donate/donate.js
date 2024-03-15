import {useState} from 'react';
import './donate.css';
import axios from 'axios';
function Donate() {
   const [values , setValues] = useState({
      donation: '',
      email: ''
    });
  
   
    const handlechange =(e) => { 
      setValues({...values , [e.target.name]: [e.target.value]});
    }
    const handlesubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/donate', values)
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
        <h1 className='heading'>Donate</h1>

        <input type="text" placeholder="        Name" className='input'name='name'/>
        <input type="text" placeholder="        Email" className='input' name='email' onChange={handlechange}/>
        <input type="text" placeholder="        Address" className='input' name='address'/>
        <input type="text" placeholder="        City" className='input'name='city'/>
        <input type="text" placeholder="        State" className='input' name='state'/>
        <input type="number" placeholder="        Zip-Code" className='input' name='zipcode'/>
        <input type="number" placeholder="        Enter the Amount for Donation" className='input' name='donation' onChange={handlechange}/>
       < input type="submit"  className='submit '/>
      </form>
    </center>
    </>
  );
};

export default Donate;
