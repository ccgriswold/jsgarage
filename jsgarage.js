function makeNormalCar (make, model){
    return {
        make: make,
        model: model,
        size: 1,
       
    };
     console.log (make, model);
}
function makeLargeCar(make, model){
    return {
         make: make,
        model: model,
        size: 2,
    };
        console.log (make, model);

}

function makeGarage(lotSize){
    return{
        
        filledspots: [],
        available: lotSize,
        
        park: function (car){
            //Check how many vehicles/spaces are occupied
            if(car.size <= this.available){
                this.filledspots.push(car); 
                this.available= this.available -car.size;
                console.log('Parked the ' + car.make);
        
            } else {
                return false;
            }
            },
        
        //return available. if space add car, else return
        full: function (){
            
                if(this.available === 0){
                    return 'full';
                }else {
                    return 'not full';
                }
                
            }
};
}

    
