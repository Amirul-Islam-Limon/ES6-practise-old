const num1 = [1,2,3,4,5,6,7,8];
const num2 = [9,10, 11, 12, 13, 14, 15];
const total = [...num1, ...num2];
console.log(total);

const businessman = 500;
const chisib = 700;
const minister =900;

const maximam = Math.max(businessman,chisib,minister);
console.log(maximam);

const money = [450, 250, 550];
const max = Math.max(...money);
console.log(max);