import {useState,useEffect} from 'react'
import "./status.css"
import "tailwindcss/tailwind.css";
function Status() {
  //border px-4 py-2"

  const   [data , setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/status')
            .then((res) => res.json())
            .then((data) => {
              let midpoint = Math.ceil(data.length / 2);
              let firstHalf = data.slice(0, midpoint);

                setData(firstHalf);
                console.log(firstHalf);
                console.log(typeof(data));
                
            })
            .catch((err) => console.log(err)); 
    },
    []);

  return (
    <>
    <center>
        <h1 className='heading text-5xl mb-10'>
            Status 
        </h1>
        
            <table className="table-auto ">
                <thead>
                    <tr>
                        <th className="px-4 py-2 ">ID</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2 ">Name</th>
                        <th className="px-4 py-2">Aadhar Number</th>
                        <th className="px-4 py-2 ">RD Number</th>
                        <th className="px-4 py-2">Income</th>
                        <th className="px-4 py-2 ">Book Name</th>
                        <th className="px-4 py-2">Book Cost</th>
                        <th className="px-4 py-2 ">Book ID</th>
                        <th className="px-4 py-2">Status</th>
                        
                    </tr>
                </thead>
                <tbody>
                {data.map((item , index) => {
    console.log(typeof(item.email),item.Email);
    return (
        <tr key={index}>
            <td className='px-4 py-2 '>{item.beneficiary_id}</td>
            <td className='px-4 py-2'>{item.beneficiary_address}</td>
            <td className='px-4 py-2 '>{item.beneficiary_name}</td>
            <td className='px-4 py-2'>{item.Aadhar_number}</td>
            <td className='px-4 py-2 '>{item.RD_number}</td>
            <td className='px-4 py-2'>{item.income}</td>
            <td className='px-4 py-2 '>{item.bookname}</td>
            <td className='px-4 py-2'>{item.bookcost}</td>
            <td className='px-4 py-2 '>{item.book_id}</td>
            <td className='px-4 py-2'>{item.book_status}</td>
            
        </tr>
    );
})}
                    
                </tbody>
            </table>
        
    </center>
    </>
  )
}

export default Status   ;