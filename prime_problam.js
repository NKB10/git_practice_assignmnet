let number=13;
let count=5
for(let i=0;i<=number;i++){
    for(number%i==0){
        count--
    }
}
if(count==0){
    console.log(number,"is a Prime")
}
else{console.log(number,"is a not Prime")}