// Code your solution here
function findMatching(drivers, name){
 
    return  drivers.filter(driver =>{
        
        if (driver.toLowerCase() === name.toLowerCase()){
            return driver
        }
     
        
    });

}

function fuzzyMatch(drivers, name){
 
    return  drivers.filter(driver =>{
       

        if (driver.toLowerCase().split("") == name.toLowerCase().split("")){
            return driver
        }
        
    
     
        
    });

}

function matchName(drivers, name){
 
    return  drivers.filter(driver =>{
        
        if (driver.name.toLowerCase() === name.toLowerCase()){
            return driver
        }
     
        
    });

}