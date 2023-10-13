/**Prompt user for year of birth */
let yearOfBirth=prompt("Enter year of birth.");

/**Here have calculated age */
let age=2023-yearOfBirth;

/**Used if statement to compare the age. */
if (age<18) {console.log("Minor");
    
} 
else if(age>=18 && age<=36){console.log("Youth");
    
}
else if(age>36){console.log("Elder");}