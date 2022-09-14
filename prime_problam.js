let number=13;
let count=0
for(let i=2;i<=number-1;i++){
    for(number%i==0){
        count++
    }
}
if(count==0){
    console.log(number,"is a Prime")
}
else{console.log(number,"is a not Prime")}