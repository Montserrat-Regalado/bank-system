import Customers from "./classes/customers/customers.js";

const x = new Customers("Jose Carlos Gonzalez", "MariaA 225", "12345", "4321")

x.createCustomers()
console.log(x.verifyPassword("432", "12345"))
