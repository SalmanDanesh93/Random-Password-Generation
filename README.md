# Random-Password-Generation

Description
This site is shows the functionality of Javascript implemented in with HTML & CSS to create a Random Password Generator.

When the user wishes to generate a new password, they have the freedom to select if they would like the alphabet, special characters, numbers, or all together in their randomly generated password.

The user also has the ability to select the length of the password generated with a minimum length of 8 characters and maximum of 128. 

When the user clickes the generate password button a password will generate in accordance to whatever criteria the user has selected. 
When the user clicks the generate password button again following the initial click, the text box will reset and regenerate a password to the specific length determined. 

Screenshots

The image below shows the parameters for the length value of the password as well as the seperated checkBox div, allowing me to generate a block display for the check boxes underthe generate password button.
![HTML](https://user-images.githubusercontent.com/107973681/180890266-ce2c939e-734b-4a02-a18d-2d76a9265913.png)

The image below shows the assignment for the variables in JavaScript that will be used.
![JS Assign](https://user-images.githubusercontent.com/107973681/180890677-b7219b01-0fe8-4705-b47a-d1a90039f6db.png)

The image below shows the parameters for the getElementId function to the previously shown variables that will utilized below.
![JS getElementById](https://user-images.githubusercontent.com/107973681/180890777-97dbe130-fe18-4bef-ac77-f52fca6108f9.png)

The image below shows the parameters for the first click event listener for the generate password button.
Shows the the logic for the computer to determine if the user unchecked or checked a certain variable box.
![JS EventListener 1stclick](https://user-images.githubusercontent.com/107973681/180890846-d72ffb9e-fe33-4394-b8cc-275ab174f9e2.png)

The image below shows the logic used to generate and return the random password. It uses the Math.floor & Math.Random logic to achieve a truly random collection of variables that adhere to the parameters determined by the user.
![JS generatePassword](https://user-images.githubusercontent.com/107973681/180890969-c98c23a8-da86-4d8b-adcb-677d281ee87e.png)

The image below shows the parameters that reset the value of the password textbox each time the user reclicks the generate password button following the initial click.
![JS Reset TextBox](https://user-images.githubusercontent.com/107973681/180891065-70920ed1-925c-4889-8652-10e90ebccd94.png)

The image below shows what the user will see on the site with all boxes checked and the password generated.
![site - all variables generated](https://user-images.githubusercontent.com/107973681/180891137-33b1c499-1de5-4ff6-b731-5e3060aa9b42.png)

The image below shows what the user will see on the site with the alphabet characters excluded from the random password that is generated.
![site - alphabet excluded](https://user-images.githubusercontent.com/107973681/180891223-2872795d-d80f-430a-845a-1127389eb4ca.png)

The image below shows what the user will see on the site with the numbers excluded from the random password that is generated.
![site - numbers excluded](https://user-images.githubusercontent.com/107973681/180891308-62d22ad1-6cb5-44ae-9e49-a62950a69a0e.png)

The image below shows what the user will see on the site with the symbols excluded from the random password that is generated.
![site - symbols excluded](https://user-images.githubusercontent.com/107973681/180891331-13660b85-25eb-4d8e-87cc-fa4ce7cf40ae.png)

Link: https://salmandanesh93.github.io/Random-Password-Generation/
