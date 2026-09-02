// Question 1: Value Detective

function describeValue(value){
    if(value === ""){
        return "string | falsy";
     } 
     else if (typeof value ===  "string"){
        return "string | truthy";
     }
     else if(value === 0){
        return "number | falsy"
     }
     else if(typeof value ===  "number"){
        return "number | truthy"
     }
     else if(value === true){
        return "boolean | truthy";
     }
     else if(value === false){
        return "boolean | truthy"
     }
     else if(value === null){
        return "object | falsy";
     }
     else if(value === undefined){
        return "undefined | falsy"
     }
}

// Question 2: Bangladesh Weekend Machine

function getDayType (day){
    if(day === "Friday" || day === "Saturday"){
        return "Weekend";
    } else if (day === "Sunday" || day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"){
        return "Working Day";
    } else{
        return "Invalid Day";
    }
}


// Question 3: Username Gatekeeper

function validateUsername(string){
    if (string.length < 4){
        return "Too Short"
    } else if(string.includes(" ")) {
        return "No Space Allowed";
    } else if(string.toLowerCase().includes("admin")){
        return "Reserved Word"
    } else{
        return "Available"
    }
}

// Question 4: Dhaka CNG Fare Meter



