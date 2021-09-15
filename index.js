// Code your solution here
function findMatching(drivers, name){
 
    return  drivers.filter(driver =>{
        
        if (driver.toLowerCase() === name.toLowerCase()){
            return driver
        }
     
        
    });

}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'obbby'];
function fuzzyMatch(drivers, name){
 
    
        return drivers.filter(function(el) {
          return el.toLowerCase().indexOf(name.toLowerCase()) === 0
        })
       

}

function matchName(drivers, name){
 
    return  drivers.filter(driver =>{
        
        if (driver.name.toLowerCase() === name.toLowerCase()){
            return driver
        }
     
        
    });

}