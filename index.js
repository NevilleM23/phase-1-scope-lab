// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
} 

function setBestCustomer(){
    bestCustomer = "not bob"
    return bestCustomer
} 

function overwriteBestCustomer(){
    bestCustomer= "maybe bob"
    return bestCustomer
} 

const leastFavoriteCustomer = "jeff"

function changeLeastFavoriteCustomer(){ 
    leastFavoriteCustomer = "hugh"
}