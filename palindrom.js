let x=1001;
let str=x+"";
let newstr="";

for(let i=str.length-1;i>=0;i--)
{
newstr+=str[i]
}

if(newstr==str){

console.log("it is palindrome");
}
else{
console.log("not a palindrome");
}
