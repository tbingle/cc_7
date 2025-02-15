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
//Task 4- Shipping Cost
function calculateShippingCost(weight,location,expedited=false){
    let rates= {
        USA:{base:5,perPound:.5},
        Canada:{base: 10,perPound: .7},
    };
    let rate= rates[location]||{};
    if (!rate.base){
        return "Invalid location";
    }
    let cost = rate.base +(weight*rate.perPound);
    if (expedited){
        cost+=10;
    }
    return `Shipping Cost :$${cost.toFixed(2)}`;   
}
console.log(calculateShippingCost(10,"USA",true));
console.log(calculateShippingCost(5,"Canada",false));

