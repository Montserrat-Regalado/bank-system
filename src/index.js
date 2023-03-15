import Account from "./classes/account/account.js";
import Customers from "./classes/customers/customers.js";

const x = new Customers("Jose Carlos Gonzalez", "MariaA 225", "12345", "4321")

x.createCustomers()
console.log(x.verifyPassword("4321", "12345"))

const account=  new Account("12345",0)
console.log(account.deposit(500,"12345"))
