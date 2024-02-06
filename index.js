


const form = document.querySelector('#form');
const name = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const city = document.querySelector('#city')


// form.addEventListener('submit',(e)=>{
//    e.preventDefault()
//    validateInputs() 
// })


form.addEventListener('submit',(e)=>{

   if(!validateInputs()){ 
   e.preventDefault()
   }
})
function validateInputs(){
   const fullnamevalue = fullname.value.trim();
   const emailvalue = email.value.trim();
   const passwordvalue = password.value.trim();
   const cpasswordvalue = cpassword.value.trim();
   const cityvalue = city.value.trim();
   let success = true;

   if(fullnamevalue === ''){
      success=false;
      setError(fullname,'username is required')
   }
   else {
    setSuccess(fullname)
   }

   if(emailvalue===''){
      success=false;
      setError(email,'email is required')
   }
   // else if(!validateEmail(emailvalue))
   // setError(email,'please enter valid email')
else{
   setSuccess(email)
   // console.log(typeof email)
}

if(passwordvalue ===''){
   success=false;
  setError(password,'password is required')
}
else if(passwordvalue.length<8){
   success = false;
    setError(password,'password must 8 charecter')
   }
else{
   setSuccess(password)
}

if( cpasswordvalue ===''){
   success=false;
  setError(cpassword, 'confirm password is required')
}
else if(cpasswordvalue !== passwordvalue){
setError(cpassword,'password is not match')
success = false;
}
else{
   setSuccess(cpassword)
}
if(cityvalue ===''){
   success = false;
 setError(city,'city required')
}
else{
   setSuccess(city)
}
return success;
}
// element is password (or)get the elements error set panna
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error') //error erukura child ah mattum eduthu kudukum
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
   }
   function setSuccess(element){
      const inputgroup = element.parentElement;
      const errorElement = inputgroup.querySelector('.error')
      errorElement.innerText = ' ';
      inputgroup.classList.add('success')
      inputgroup.classList.remove('error')
     }

   //  const validateEmail =(email) =>{
   //     return String(email)
   //     .toLocaleLowerCase()
   //     .match(
   //       /^[A-Za-z\._\-0-9]*\[@\][A-Za-z]*\[\.\][a-z]{2,4}$/
   //       );
   //  };
  
    