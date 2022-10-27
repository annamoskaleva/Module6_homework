const inputValue = prompt('Введите число')
const value = +inputValue;
function numbers () {
  if(value == 0) {
    console.log ('ноль')
  } else if (value %2 == 0) {
    console.log ('четное число')
  } else {
    console.log ('нечетное число')
  } 
}
numbers ();

//задание 2 

function definePrime (num) {
	let isPrime, result;
	isPrime = true;
	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isPrime = false;
			}
		}
		result = isPrime ? `Число ${num} - простое число` : `Число ${num} - составное число`;
	} else if (num > 1000){
		result = 'Данные неверны';
	}
	return result;
}

//Задание 3

function myFunction(a) {
    return function(b) {
      return a+b
   }
  }
  const sumfunction = myFunction(2);
  const sum = sumfunction(3);
  console.log(sum)

//Задание 4 

const func = function (a, b) {
    timer = setInterval(function () {
        if (a <= b) {
            console.log(a)
            a++;
        } else {
            clearInterval(timer)
        }
    }, 1000);
  }
  func(5, 15);

  //Задание 5 

  const x = 2;
  const n = 8;
  
  const arrow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  console.log(arrow (x, n));
  
  

