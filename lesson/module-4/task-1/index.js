const data1 = '20';
const data2 = 320;
const data3 = false;
const data4 = undefined;
const data5 = null;
const data6 = BigInt(450);
const data8 = {};
const data7 = Symbol('id');

console.log(String(data1), Boolean(data1), Number(data1));
console.log(String(data2), Boolean(data2), Number(data2));
console.log(String(data3), Boolean(data3), Number(data3));
console.log(String(data4), Boolean(data4), Number(data4));
console.log(String(data5), Boolean(data5), Number(data5));
console.log(String(data6), Boolean(data6), Number(data6));
console.log(String(data8), Boolean(data8), Number(data8));
console.log(String(data7), Boolean(data7), Number(data7));
