 const range = document.getElementById('characterAmtRange')
 const number = document.getElementById('characterAmtNumber')
 const form = document.getElementById('generatorForm')
 const includeUpperCaseEl = document.getElementById('includeUpperCase')
 const includeLowerCaseEl = document.getElementById('includeLowerCase')
 const includeNumbersEl = document.getElementById('includeNumbers')
 const includeSymbolsEl = document.getElementById('includeSymbols')
 //get password
 const passwordDisplay = document.getElementById('displayPassword')


 const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
 const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
 const NUMBER_CHAR_CODES  = arrayFromLowToHigh(48,57)
 const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47)
 .concat(arrayFromLowToHigh(58,64)
 ).concat(arrayFromLowToHigh(91,96))
 .concat(arrayFromLowToHigh(123,126))


 range.addEventListener('input',syncAmt)
 number.addEventListener('input', syncAmt )

 function syncAmt(e){
     const value = e.target.value
     range.value = value
     number.value = value

}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const characterAmt = number.value
    const includeUpperCase = includeUpperCaseEl.checked
    const includeNumbers = includeNumbersEl.checked
    const includeSymbols = includeSymbolsEl.checked
    const password = generatePassword(characterAmt,includeUpperCase,includeNumbers,includeSymbols)
    passwordDisplay.innerText = password
    
})

function generatePassword(characterAmt,includeUpperCase,includeNumbers,includeSymbols){
  let charCodes =  LOWERCASE_CHAR_CODES 
  if(includeUpperCase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES) 
  if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES) 

  const passwordChar = []
  for(let i=0; i<characterAmt;i++){
      const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
      passwordChar.push(String.fromCharCode(characterCode));

  }
  return passwordChar.join('')
}
function arrayFromLowToHigh(low,high){
    const array = []
    for(let i=low;i<=high;i++ ){
        array.push(i)
    }
    return array

}
