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
let calculateLoyaltyDiscount= (amount,years)=>{//declare discount
    let discount;
    if(years>=5){
        discount=.15;
    }else if (years>=3){
        discount=.10;
    }else{
        discount=.05;
    }
    let discountedPrice=amount-(amount*discount);
    return `Discounted Price $${discountedPrice.toFixed(2)}`//return value
}
console.log(calculateLoyaltyDiscount(100,6));//log
console.log(calculateLoyaltyDiscount(200,2));//log
//Task 4- Shipping Cost
function calculateShippingCost(weight,location,expedited=false){//declare function
    let rates= {
        USA:{base:5,perPound:.5},//shipping rates
        Canada:{base: 10,perPound: .7},//shipping rates
    };
    let rate= rates[location]||{};
    if (!rate.base){
        return "Invalid location";
    }
    let cost = rate.base +(weight*rate.perPound);
    if (expedited){
        cost+=10;
    }
    return `Shipping Cost :$${cost.toFixed(2)}`;   //return value 
}
console.log(calculateShippingCost(10,"USA",true));//log
console.log(calculateShippingCost(5,"Canada",false));//log

//Task 5- Returning values
function calculateLoanInterest(principal,rate,years) {//declare function
    let interest = principal*rate*years;
    return `Total Interest: $${interest.toFixed(2)}`;//return value
}
console.log(calculateLoanInterest(1000,.05,3));//log
console.log(calculateLoanInterest(5000,.07,5));//log

//Task 6- Higher order Functions
function filterHighValueTransactions(transactions, filterFunction) {//declare function
    return transactions.filter(filterFunction);//return value
}

let transactions = [500, 1200, 3000, 800, 2200];//transaction data

console.log(filterHighValueTransactions(transactions, amount => amount > 1000));//log

//Task 7- Closures
function createBudgetTracker() {//DECLARE FUNCTION
    let balance = 0;  // Initial balance 

    return function(expense) {
        balance -= expense;  // Subtract the expense from the balance
        return `Current Balance: $${balance}`;
    };
}

let budget = createBudgetTracker();

console.log(budget(300));  //LOG
console.log(budget(200)); 