import React , {useEffect , useState} from 'react';
import "tailwindcss/tailwind.css";
import './sponsor.css';

const Sponsor = () => {
 const   [data , setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/sponsor')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((err) => console.log(err)); 
    },
    []);
    return (
        <center>
            <div className="bg-white p-4">
                <h1 className="text-3xl font-bold">Sponsor</h1>
                <table className="mt-4">
                    <thead>
                        <tr>
                            <th className="p-2">SID</th>
                            <th className="p-2">Donation</th>
                            <th className="p-2">Email</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {data.map((item, index) => {
                            console.log(typeof(item.email), item.Email);
                            return (
                                <tr key={index}>
                                    <td className="p-2">{item.Sid}</td>
                                    <td className="p-2">{item.donation}</td>
                                    <td className="p-2">{item.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </center>
    );
};

export default Sponsor;
