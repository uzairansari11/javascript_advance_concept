/* write a regex for removing all the extra space with single space and capitalize the first letter of each word */
const regexRemoveSpaces = /\b\s+/g;
const regexUpperCase = /\b\w{1}/g;

const string = "hello  hey    some   1we   new    will hit       slop!";

const result = string
	.replace(regexRemoveSpaces, " ")
	.replace(regexUpperCase, (ele) => ele.toUpperCase());
console.log(result);

/* write a regex to verify phone number which must start above 5 and must include only digits and max length of 10 */

const regexForNumber = /^[6-9]{1}\d{9}/;

const number = "7  5     678        3      901 2";


let  result2 = number.replace(regexRemoveSpaces, "")
result2=regexForNumber.test(result2) 
console.log(result2);
