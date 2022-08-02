const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');
const wallpaper = document.querySelector('.wallpaper');
let count = 1;
const handleFocus = ({ target }) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}




const record = setInterval(()=>{
    console.log('s')
    if(count<3){
        count++
        wallpaper.style.backgroundImage = "url('/images/wallpaper"+count+".jpg')"
    }else{
        count = 1
        wallpaper.style.backgroundImage = "url('/images/wallpaper"+count+".jpg')"
    }
    
       
}, 3000)

const handleFocusOut = ({ target }) =>{
    
    const span = target.previousElementSibling;
    if(target.value == ""){
        span.classList.remove('span-active');
    }
    
}

const handleChange = ({ target }) =>{
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    }else{
        button.setAttribute('disabled', 'true');
    }
     
}

inputs.forEach((input) =>input.addEventListener('focus', handleFocus));
inputs.forEach((input) =>input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) =>input.addEventListener('input', handleChange));