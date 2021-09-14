import axios from 'axios'
import React, { useState } from 'react'

function Serch() {

 const [serch , setSerch] = useState('');
 const [userData , setuserData] = useState([]);

  //  function sandData(){

  //   let user ={username : username}
        
    

  //   axios.post('/api/post' , user)
  //   .then(res => {
  //       console.log(res);
  //       setbedata(res.data)
  //   }).catch(err => {
  //       console.log(err);
  //   })

    

  //   }
const fetchUser = (query) => {

  setSerch(query)

  fetch('/serchData',{
    method:"post",
    headers:{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({query : query})
  }).then(res => res.json())
    .then(result => {
      console.log(result);
      setuserData(result.data)
    })




}

   const userList =  userData.map(item => {
     return  <tr>
 
     <td>{item.name}</td>
    
   </tr>
   
   })

    return (
<>
        
  <div className="row mb-3 mt-5">
    <label for="inputEmail3" className="col-sm-2 col-form-label" style={{fontWeight:"bolder"}}>Serch Student</label>
    <div className="col-sm-10 ">
      <input type="text" className="form-control" id="inputEmail3" value={serch} onChange={(e) => {fetchUser(e.target.value)}} />
    </div>
  </div>

  

    <div className="container">
    <table class="table table-warning mt-3">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Address</th>
            <th scope="col">School</th>
          </tr>
        </thead>
        <tbody>
     {/* {userData.map(item => {

return  <tr>
 
  <td>{item.name}</td>
 
</tr>



})} */}
{userList}

</tbody>
       
      </table>

    </div>
   
     </>   
    )
}

export default Serch;
