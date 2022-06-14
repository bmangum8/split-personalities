/*const fullName = "Juan:Carlos:Rodriguez"
const [ firstName, middleName, surName ] = fullName.split(":")

console.log(firstName)  // Juan
console.log(middleName)  // Carlos
console.log(surName)  // Rodriguez*/

const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const newFormat = originalDisorderFormat.split("|$|");

const divItems = newFormat.join("</div><div>")
console.log(`<div>${divItems}</div>`)
