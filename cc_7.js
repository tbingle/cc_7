//Inital commit
//Task 1- Customer Invoice 
function calculateInvoice (subtotal, taxRate, discount) {
    total = (subtotal + (subtotal * taxRate)) - discount//function
    return `Total Invoice: $${total.toFixed(2)}`
}
console.log(calculateInvoice (100,.08,5));//Log in console 
console.log(calculateInvoice (500,.1,20));//Log

//Task 2- Employee hourly wage 
function calculateHourlyWage(salary, hoursPerWeek) {
    hourlyWage = salary / (hoursPerWeek * 52);//Function
    return `Hourly Wage $${hourlyWage.toFixed(2)}`;
}
console.log(calculateHourlyWage(52000, 40))//Log
console.log(calculateHourlyWage(75000,35))//Log

//Task 3- loyalty discount
let calculateLoyaltyDiscount= (amount,years)=>{
    let discount;
    if(years>=5){
        discount=.15;
    }else if (years>=3){
        discount=.10;
    }else{
        discount=.05;
    }
    let discountedPrice=amount-(amount*discount);
    return `Discounted Price $${discountedPrice.toFixed(2)}`
}
console.log(calculateLoyaltyDiscount(100,6));
console.log(calculateLoyaltyDiscount(200,2));