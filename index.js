// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. upperCaseCustomerName function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. setBestCustomer function to declare bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. overwriteBestCustomer function to change bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'some initial value';

// 6. changeLeastFavoriteCustomer function to attempt changing the constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error
}
