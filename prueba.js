var car, car2, car3;

car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
};
car2 = {    
    make: 'Honda',
    model: 'Civic',
    year: 2021
};

car3 = {
    make: 'Ford',
    model: 'Focus',
    year: 2019
};

// Function to show car details lllsss
showCarDetails(car, car2, car3);	

function showCarDetails(car, car2, car3) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
    console.log(`Make: ${car2.make}, Model: ${car2.model}, Year: ${car2.year}`);
    console.log(`Make: ${car3.make}, Model: ${car3.model}, Year: ${car3.year}`);
    console.log('------------------------');
}

