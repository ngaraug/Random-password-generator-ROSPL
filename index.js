const caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const spl =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
let password = ''
const submit = document.querySelector("#submit")
const passwordHolder = document.querySelector('.password-holder')


function getRandomElement(element){
    return element[Math.floor(Math.random() * element.length)] 
    
}

submit.addEventListener('click', ()=>{
    passwordHolder.removeChild(passwordHolder.lastChild)

    let length = document.querySelector('#length').value
    let password = ''
    let req = [] 
    if(document.querySelector('#alph').checked == true){
        req += alph 
    }
    if(document.querySelector('#nums').checked == true){
        // req.append(  )
        req += numbers
    }
    if(document.querySelector('#spl').checked == true){
        // req.append(  )
        req += spl
    }
    if(document.querySelector('#caps').checked == true){
        // req.append( caps )
        req += caps
    }
    req = req.replaceAll(',', '')
    for(let i=0; i<length; i++){
        let randElement = Math.floor(Math.random() * req.length)
        password += getRandomElement( req[randElement] )
    }

    let passwordH2 = document.createElement('h1')
    passwordH2.classList.add("password")
    passwordH2.innerText = password
    passwordHolder.append(passwordH2)
    
})