//Inital commit
function calculateInvoice (subtotal, taxRate, discount) {
    total = (subtotal + (subtotal * taxRate)) - discount
    return `Total Invoice: $${total.toFixed(2)}`
}
console.log(calculateInvoice (100,.08,5))
console.log(calculateInvoice (500,.1,20))
