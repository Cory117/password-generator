const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Set the DOM
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let generatePasswordsButton = document.getElementById("generate-passwords-btn")

// Set password length
let passwordLength = 15

// Listen for clicks
generatePasswordsButton.addEventListener("click", renderPasswords)

// Functions
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

function renderPasswords() {
    let firstPassword = generateRandomPassword()
    let secondPassword = generateRandomPassword()
    
    passwordOne.textContent = firstPassword
    passwordTwo.textContent = secondPassword
}

// Copy passwords
passwordOne.addEventListener("click", copyFirstPassword)
passwordTwo.addEventListener("click", copySecondPassword)

function copyFirstPassword() {
      navigator.clipboard.writeText(passwordOne.textContent)
}

function copySecondPassword() {
    navigator.clipboard.writeText(passwordTwo.textContent)
}

