import axios from 'axios';
import React,{useEffect, useState} from 'react';


function AllStudent() {

    const[userlist, setuserlist] = useState([]);


   useEffect( () => {

axios.post('/getuser').then(res => {
    console.log(res.data);
    setuserlist(res.data);
}).catch(err => {
    console.log(err);
})




   },[])
   const userdata = userlist.map(obj =>{
       
    return <tr>
    
    <td>{obj.name}</td>
    <td>{obj.email}</td>
    <td>{obj.age}</td>
    <td>{obj.add}</td>
    <td>{obj.mob}</td>
    <td>{obj.school}</td>
  </tr>
})

    return (
        <table class="table table-info mt-3">
        <thead>
          <tr>
            
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Address</th>
            <th scope="col">School</th>
          </tr>
        </thead>
        <tbody>
            {userdata}
        
        </tbody>
      </table>
    )
}

export default AllStudent
