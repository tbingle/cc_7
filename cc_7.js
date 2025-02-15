//Inital commit
//Task 1- Customer Invoice 
function calculateInvoice (subtotal, taxRate, discount) {
    total = (subtotal + (subtotal * taxRate)) - discount
    return `Total Invoice: $${total.toFixed(2)}`
}
console.log(calculateInvoice (100,.08,5));//Log in console 
console.log(calculateInvoice (500,.1,20));//Log

//Task 2- Employee hourly wage 
function calculateHourlyWage(salary, hoursPerWeek) {
    hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage ${hourlyWage.toFixed(2)}`;
}
console.log(calculateHourlyWage(52000, 40))
console.log(calculateHourlyWage(75000,35))