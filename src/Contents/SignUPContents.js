import React from 'react';
import  '../css/SignUPContents.css'


const SignUPContents =()  => {

   return(
     <div className='form-mod'>


<form>
  <div className='form-group'>
  <input 
type="text" 
placeholder='Firstname'
className='form-control '
  /> 

  </div>



<div className='form-group'>
<input 
type="text"
 placeholder='Surname'
 className='form-control'
 />

</div>


<div className='form-group'>
<input 
type="email"
 placeholder='email'
 className='form-control'
 />

</div>


<div className='form-group'>
 <input 
type="password"
 placeholder='password'
 className='form-control'
 />
</div>

<div className='form-group'>
<input 
type="text"
 placeholder='confirm password'
 className='form-control'
 />

</div>

<div className='form-group'>
<button type='submit'>
  Create
</button>

</div>




  
</form>

</div>
     

     
 

   )
   }


export default SignUPContents