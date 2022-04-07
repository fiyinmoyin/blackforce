let oddID =[];
let evenID =[];

for (let i = 1; i<= 100; i++) {

if (i % 2 === 0) {
    evenID.push(i);
}
else{
    oddID.push(i);
}
}
console.log(oddID);
console.log(evenID);
