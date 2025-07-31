// compile time errors
// run time errors

//IDE Integrated Development Environment


try {
//   //open database connection
// let firstName  
// console.log(firstName.toUpperCase())
let dbError = new Error("Could not connect to the database")
throw dbError



} catch (error) {
  console.log(error.message)
} finally{
  console.log("this will run regardless of the error")
  //close the database connection
}