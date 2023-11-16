import React, { useState } from 'react';
import Assiduus from '../Images/assiduus.png';
import {UserData} from './Data'
import BarChart from './BarChart';
import LineChart from './LineChart';
const Home = () => {
 function loadAllgraph()
 {
  setdispalyAllgraph(false);
  setisplayLoader(true);
  setTimeout(() => {

    setdispalyAllgraph(true);
    setisplayLoader(false);
  }, 2000);
 
 }


const[dispalyAllgraph,setdispalyAllgraph]=useState(true);
const[displayLoader,setisplayLoader]=useState(false);
//const[userData,setuserData]=useState();


  const userData= {
    labels: UserData.map((data)=>data.month),
    datasets: [{
        label: "total message",
        data: UserData.map((data)=>data.message),
        barPercentage: 0.25,  
      
    }]
   
    }
   
    
  // useEffect(() => {

  //   setuserData(data);
  //     console.log("hello");
  // },[])


    return ( 
<div className="home">



{/* <div>,,,,,,,,,,,,,,,,,,,,,,NAV....................bar..    </div> */}
<div className="navBar">
<img src={Assiduus}  className='logo' alt='logo' />
<div className='navBarOtherDeatails'>
<div className='adjustSearch'>
<i class="fa fa-search" aria-hidden="true"></i>
    <input type="search"  />

</div>
<i class="fa fa-bell bellIcon" aria-hidden="true"></i>
<i class="fa fa-user-circle bellIcon" aria-hidden="true"></i>
<select >
        <option value=""></option>
        <option value="option1"></option>
        <option value="option2"></option>
        <option value="option3"></option>
      </select>

</div>  
</div>
{/* <div>afterr,,,,,,,,,,,,,,,,,,,,,,nav....................bar     </div> */}
<div className='afterNavbar'>



{/* <div>,,,,,,,,,,,,,,,,,,,,,,side....................bar     </div> */}
<div className='sideBar'>
<div className="button-list">
      <button className="custom-button" onClick={loadAllgraph}><i class="fa fa-dashcube sideBarIcons" aria-hidden="true"></i>Dashboard</button>
      <button className="custom-button"  onClick={loadAllgraph} style={{paddingRight:'11px'}}><i class="fa fa-address-card sideBarIcons" aria-hidden="true"></i>Accounts</button>
      <button className="custom-button" onClick={loadAllgraph} style={{paddingRight:'30px'}}><i class="fa fa-usd sideBarIcons" aria-hidden="true" ></i>Payroll</button>
      <button className="custom-button" onClick={loadAllgraph} style={{paddingRight:'18px'}}><i class="fa fa-file sideBarIcons" aria-hidden="true"></i>Reports</button>
      <button className="custom-button" onClick={loadAllgraph} style={{paddingRight:'27px'}}><i class="fa fa-user sideBarIcons" aria-hidden="true"></i>Advisor</button>
      <button className="custom-button" onClick={loadAllgraph} style={{paddingRight:'14px'}}><i class="fa fa-database sideBarIcons" aria-hidden="true"></i>Contacts</button>

    </div>
</div>


{/* <div>,,,,,,,,,,,,,,,,,,,,,,allGraph....................bar     </div> */}
{  dispalyAllgraph  &&    

 <div className='allGraph'>
<div className='pair1'>
<div className='barChart'>
    <div className='lineDiv'>
<h5>Checking account</h5>
<div>
<button>Message</button>
<button>January</button>
</div>


    </div>
<hr />
<LineChart chartData={userData}/>
</div>


<div className='barChart'>  
<div className='lineDiv2'>
<h5>Invoices owed to you</h5>
<div class="file-input-container">
    <label for="fileInput" class="file-input-label">New sales invoice</label>
    <input type="file" id="fileInput" class="file-input" />
  </div>
 </div>
<hr />
<BarChart chartData={userData}/>
</div>

</div>






<div className='pair1'>
<div className='barChart'>  
<div className='lineDiv'>
<h5>Toltal cash flow</h5>
</div>
<hr />
<BarChart chartData={userData}/>
</div>


<div className='barChartTable'>  
<div className='lineDiv'>
<h5>Account watchlist</h5>
</div>
<hr />
<table>
      <thead>
        <tr>
          <th>Account</th>
          <th>This Month</th>
          <th>YTD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>sales</td>
          <td>1,194.58</td>
          <td>11,418.29</td>
        </tr>
        <tr>
          <td>Advertising</td>
          <td>6,879.02</td>
          <td>9,271.36</td>
        </tr>
        <tr>
          <td>Inventory</td>
          <td>4,692.26</td>
          <td>9,768.09</td>
        </tr>
        <tr>
          <td>Entertainment</td>
          <td>0.0</td>
          <td>0.0</td>
        </tr>
        <tr>
          <td>Product</td>
          <td>4,652.10</td>
          <td>2,529.90</td>
        </tr>
      
      </tbody>
    </table>
  </div>
   </div>


</div>  }  

{displayLoader &&  <div className='allload'>
<div className="loader">
  <div class="bar">
   <div class="circle"></div>
   <p className="word">Loading</p>
 </div ></div> </div> }



</div>
</div>

    
    
     );
}
 
export default Home;