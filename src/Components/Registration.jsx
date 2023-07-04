import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ isCheckedAC, setIsCheckedAC ] = useState(false);
    const [ isCheckedLocker, setIsCheckedLocker ] = useState(false);
    const [ name,setName ] = useState('')
    const [ date,setDate ] = useState('')
    const [ days,setDays ] = useState('')
    const [ persons,setPersons ] = useState('')
    const [radioValue,setRadioVAlue ] = useState("")
    const [ userData,setUserData ] = useState([])
    const [ showDate,setShowData ] = useState(false)
    const [ advance,setAdvance ] = useState("")



    const handleSumbit = (e) => {
      e.preventDefault();
  
        setShowData(true)  
        const newUser = {
            name:name,
            date:date,
            days:days,
            persons:persons,
            advance:advance
        }
        setUserData([newUser,...userData])
        
        
    }
    const handleRadioButton = (e) => {
        setRadioVAlue(e.target.value)
    }

 

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
    const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const handleDelete = (index) => {
    const updatedData = [...userData];
    updatedData.splice(index, 1);
    setUserData(updatedData);
  };

  
    
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'ac') {
      setIsCheckedAC(checked);
    } else if (name === 'locker') {
      setIsCheckedLocker(checked);
    }
  }
  let amenitiesValue = 0;
  if (isCheckedAC && isCheckedLocker) {
    amenitiesValue = 1300;
  } else if (isCheckedAC) {
    amenitiesValue = 1000;
  } else if (isCheckedLocker) {
    amenitiesValue = 300;
  }

   let extraCharges;
   if(persons > 2){
    extraCharges = days * 1000;
   }
   else{
    extraCharges = 0
   }

  let dayshelive = parseInt(radioValue) * parseInt(days);
  let totalAmount = (parseInt(amenitiesValue)  + dayshelive + parseInt(extraCharges) - parseInt(advance));
    
  
  return (
    <>
    <form  onSubmit={handleSumbit}>
        <h1 className='main-title mt-5 pt-5'>hotel registration form</h1>
        {/* <Link to="/"><button className="go-back">Go Back</button></Link> */}
        <div className="title">custumer info</div>
        <div className="custumer-data">
            <div className="fields">
                <h3>Customer Name :</h3> <input type="text" placeholder='Name...' required className='cus-field' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="fields">
                <h3>Check in Date :</h3> <input type="date" placeholder='Booking Date...' required className='cus-field'value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="fields">
                <h3>Total Numbers of Days :</h3> <input type="number" placeholder='Total Days...' required className='cus-field'value={days} onChange={(e) => setDays(e.target.value)}/>
            </div>
            <div className="fields">
                <h3>Total Numbers of Persons :</h3> <input type="number" placeholder='Persons...' required className='cus-field'value={persons} onChange={(e) => setPersons(e.target.value)}/>
            </div>
        </div>
        <div className="room-section">
            <div className="title">select room type</div>
            <div className="room-container">
                <div className="images">
                    <div className='room-info'>
                        <img src="/assets/delux.avif" alt="" />
                        <h2 className='room-type'>Delux Room</h2>
                        <h5> RS 2500</h5>
                        <input 
                           type="radio"
                           className='radio'
                           name='radio'
                           value="2500" 
                           checked = {radioValue == "2500"} 
                           onChange={handleRadioButton}
                         />
                    </div>
                    <div className='room-info'>
                         <img src="/assets/suite.avif" alt="" />
                         <h2 className='room-type'>Suite Room</h2>
                         <h5>RS 4000</h5>
                         <input 
                            type="radio" 
                            className='radio' 
                            name='radio'
                            value='4000'
                            checked = {radioValue == '4000'} 
                            onChange={handleRadioButton} 
                            />
                    </div>
                </div>
            </div>
        </div>

        <div className="room-section amenities mt-5">
            <div className="title">select  amenities</div>
            <div className="room-container">
                <div className="images">
                    <div className='room-info'>
                        <img src="/assets/locker.avif" alt="" />
                        <h2 className='mt-3'>Locker</h2>

                        <h5> RS 300</h5>
                        <input 
                           type="checkbox"
                           className='check'
                           name='locker'
                           value={isCheckedLocker}
                           checked={isCheckedLocker}
                           onChange={handleCheckboxChange}
                          
                         />
                    </div>
                    <div className='room-info'>
                         <img src="/assets/ac.webp" alt="" className='acimg' />
                         <h2 className='mt-3'>A/C</h2>

                         <h5>RS 1000</h5>
                         <input 
                            type="checkbox" 
                            className='check' 
                            name='ac'
                            value={isCheckedAC}
                            checked={isCheckedAC}
                            onChange={handleCheckboxChange}
                            
                            />
                    </div>
                </div>
            </div>
        </div>

        <div className="title mt-5">advance  amount</div>
        <div className="advance">
            <h3 className='ad'>Advance Amount</h3>
            <input type="number" className='advancefield' placeholder='Advance Payment...'value={advance} onChange={(e) => setAdvance(e.target.value)}/>
        </div>
        <div className="register-section">
            <button className="register">Register</button>
        </div>

        {showDate ? (
          <div className='searchbox text-center mt-3'>
          <input 
            type="text" 
            placeholder='search client'
            className='search-field px-3'
            value={searchTerm} 
            onChange={handleSearch}
            />
        </div>
        ):""}
        
      

    <div className="customers-data-section">
       {filteredUsers.length > 0  && showDate ?  (
         <div className='user-data-and'>
              {filteredUsers.map((user,index) => (
                <div className='user-data complete' key={index}>
                    <button onClick={() => handleDelete(index)} className='remove'><span>×</span></button>
                    <span>Name: <span className='field-data'>{user.name}</span></span><br />
                    <span>Booking Date: <span className='field-data'>{user.date}</span></span><br />
                    <span>Total Days: <span className='field-data'>{user.days}</span></span><br />
                    <span>Total Persons: <span className='field-data'>{user.persons}</span></span><br />
                    <span>Amenties Amount: <span className='field-data'>{amenitiesValue} </span></span><br />
                    <span>Room Amount: <span className='field-data'>{radioValue}</span></span><br />
                    <span>Extra Charges: <span className='field-data'>{extraCharges}</span></span><br />
                    <span>Advance Amount: <span className='field-data'>{user.advance}</span></span><br />
                    <span>Total Amount: <span className='field-data'>{totalAmount}</span></span><br />
                </div>
              ))}
         </div>
        ):""}
     </div>
     </form>
    </>
  )
}

export default Registration
