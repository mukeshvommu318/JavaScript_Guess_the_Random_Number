# Guess the Random Number Game
![Game](https://github.com/mukeshvommu318/JavaScript_Guess_the_Random_Number/blob/e2891cc35995f4e8c360e967c04470485a73a8e4/Screenshot%20(7).png)

**Live Link : https://mukeshvommu318.github.io/JavaScript_Guess_the_Random_Number/**

## Learnings
### ->Generating the random number
- Math.random()  : It will generate random number between the 0 - 1
  
    Ex : console.log(Math.random() * 100)   -> 25.67
- Math.ceil() : It rounds a number upwards to nearest number
  
    Ex : Math.ceil(Math.random() *100)   -> 26

### -> HTML Input Elements : To take inputs from the user

    <input type="text"/>
	  type = password, date, checkbox, radio, file....

  **Value Property**
  
  Ex : document.getElementById("inputElement").value
  
we use value property to get the input value from input element

### -> ( == vs === )
  - Loose equal to (==): Loose equality compares two values for equality but doesn’t compare types of values.
  - Strict equal to (===): Strict equality compares two values for equality including types of values.

        python 
	      print(2=='2')   // False
	      Javascript
	      console.log(2=='2') // true
	      console.log(2==='2') // false
