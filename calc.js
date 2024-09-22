const display=document.getElementById('display');

//Number buttons
document.getElementById('0').addEventListener('click', ()=>display.value+='0');
document.getElementById('1').addEventListener('click', ()=>display.value+='1');
 document.getElementById('2').addEventListener('click', ()=>display.value+='2');
 document.getElementById('3').addEventListener('click', ()=>display.value+='3');
document.getElementById('4').addEventListener('click', ()=>display.value+='4');

document.getElementById('5').addEventListener('click', ()=>display.value+='5');

document.getElementById('6').addEventListener('click', ()=>display.value+='6');

document.getElementById('7').addEventListener('click', ()=>display.value+='7');

document.getElementById('8').addEventListener('click', ()=>display.value+='8');

document.getElementById('9').addEventListener('click', ()=>display.value+='9');


//Delete button
document.getElementById('del').addEventListener('click', ()=>
    {
display.value=display.value.slice(0,-1); 
});


//Equals button 
document.getElementById('equals').addEventListener('click', ()=>
    {
        //Evaluate the expression in the display
        try{
            
        display.value=eval(display.value);
        }catch(e){
            display.value="syntax error";
        }
    });
    

//Operators
document.getElementById('add').addEventListener('click', ()=>display.value+='+');
document.getElementById('subtr').addEventListener('click', ()=>display.value+='-');
document.getElementById('mult').addEventListener('click', ()=>display.value+='*');
document.getElementById('divid').addEventListener('click', ()=>display.value+='/');

//Trigonometric functions 
document.getElementById('sin').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.sin(parseFloat(currentValue)*Math.PI / 180);
    display.value=result;
  }
});

document.getElementById('cos').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.cos(parseFloat(currentValue) * Math.PI / 180);
    display.value = result;
  }
});

document.getElementById('tan').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.tan(parseFloat(currentValue) * Math.PI / 180);
    display.value = result;
  }
});


//clear all
document.getElementById('clr').addEventListener('click', ()=>{
    display.value="";
})


//Hyperbolic functions
document.getElementById('sinh').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.sinh(parseFloat(currentValue)*Math.PI / 180);
    display.value=result;
  }
});

document.getElementById('cosh').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.cosh(parseFloat(currentValue) * Math.PI / 180);
    display.value = result;
  }
});

document.getElementById('tanh').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const result = Math.tanh(parseFloat(currentValue) * Math.PI / 180);
    display.value = result;
  }
});


//Inverse trigonometric functions 
document.getElementById('asin').addEventListener('click', () => {
  const value = Math.asin(parseFloat(display.value))*(180 /Math.PI);   
    display.value=value;
});

document.getElementById('acos').addEventListener('click', () => {
  const value = Math.acos(parseFloat(display.value))*(180 /Math.PI);   
    display.value=value;
});

document.getElementById('atan').addEventListener('click', () => {
  const value = Math.atan(parseFloat(display.value))*(180 /Math.PI);   
    display.value=value;
});


//brackets 
document.getElementById('lbrkt').addEventListener('click', ()=>display.value+='('); 

document.getElementById('rbrkt').addEventListener('click', ()=>display.value+=')');


//Change to vulgar fraction 
document.getElementById('frac').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue.includes('.')) {
    const decimalValue = parseFloat(currentValue);
    const fraction = decimalToFraction(decimalValue);
    display.value = fraction;
  }
});

function decimalToFraction(decimal) {
  const whole = Math.floor(decimal);
  const fractionPart = decimal - whole;
  const precision = 10; // adjust precision as needed
  const denominator = precision;
  const numerator = Math.round(fractionPart * precision);
  const gcd = greatestCommonDivisor(numerator, denominator);
  return `${whole} ${numerator / gcd}/${denominator / gcd}`;
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}


//Decimal point 
document.getElementById('decimal').addEventListener('click', ()=>display.value+='.');


//Common Logarithm 
document.getElementById('log').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '') {
    const base = prompt('Enter the base for the logarithm (default is 10)');
    const result = Math.log(parseFloat(currentValue)) / Math.log(parseFloat(base || 10));
    display.value = result;
  }
});


//Exponential function 
document.getElementById('exp').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '' && parseFloat(currentValue) >= 0) {
    const result = Math.exp(parseFloat(currentValue));
    display.value = result;
  } else {
    display.value = 'Error';
  }
});


//Factorial 
document.getElementById('fact').addEventListener('click', () => {
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}
  const currentValue = display.value;
  if (currentValue !== '') {
    const factorialResult = calculateFactorial(currentValue);
    display.value = factorialResult;
  }
});


//Square root
document.getElementById('sqrt').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '' && parseFloat(currentValue) >= 0) {
    const result = Math.sqrt(parseFloat(currentValue));
    display.value = result;
  } else {
    display.value = 'Error';
  }
});


//Reciprocal 
document.getElementById('reci').addEventListener('click', () => {
  const currentValue = display.value;
  if (currentValue !== '' && currentValue !== '0') {
    display.value = 1 / parseFloat(currentValue);
  }
});


//Raised to power
const btnPower = document.getElementById('pow');
btnPower.addEventListener('click', () => {
  const value = parseFloat(display.value);
  const exponent = parseFloat(prompt('Enter the exponent:'));
  const result = Math.pow(value, exponent);
  display.value = result;
});
