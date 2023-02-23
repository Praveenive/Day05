// Anononyms Function
//1) Print the odd number
var odd = function(arr){
    let i,odd =[];
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]%2!==0)
      {
        odd.push(arr[i]);
      }
    }
    return odd;
  }
  console.log(odd([12,13,14,15]));

  //IIFE (Print the odd number)
  (function odd(arr){
    let i,oddnum;
    for(i=0;i<arr.length;i++)
    {
      if(i%2!==0)
      {
        console.log(arr[i]);
      }
    }
  })([12,13,14,15])

//2) Title case with Anonyms function
var str = function(str5){
    let str2 = str5.split(" ");
    for(let i=0;i<str2.length;i++)
    {
      str2[i] = str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
    }
    let final =str2.join(" ");
    return final;
  }
  console.log(str("this is my learning"));

  //IIFE METHOD 
  (function str(str5){
    let str2 = str5.split(" ");
    for(let i=0;i<str2.length;i++)
    {
        str2[i] = str2[i].charAt(0).toUpperCase()+str2[i].slice(1); 
    }
    var final = str2.join(" ");
    console.log(final);
  })("this is my learning");
    
  //3. SUM OF ALL NUMBERS IN ARRAY
  //Anonoyms method   
  let summ = function(arr)
  {
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum; 
  }
  console.log(summ([1,2,3,4]));

  //IIFE METHOD
  (function summ(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum); 
  })([1,2,3,4,5,6]);

  //4) Prime numbers Anonoyms method   
  let primee = function(arr)
  {
    let i,count,prim =[];
    for(i=0;i<arr.length;i++)
    { count =0;
        for(let j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            count++;
        }
        if(count===2)
        prim.push(arr[i]);
    }
    return prim;
  }

  console.log(primee([7,9,11]));

  //IIFE METHOD
  (function primee(arr){
    let i,count,prim =[];
    for(i=0;i<arr.length;i++)
    { count =0;
        for(let j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            count++;
        }
        if(count===2)
        prim.push(arr[i]);
    }
    console.log(prim);
  })([7,9,11]);

  /// 5)Palindrome in array (Anonoyms method)
let pali = function(arr)
{
let rev,i,emp = [];
for(let i=0;i<arr.length;i++){
rev = parseInt(arr[i].toString().split("").reverse().join(""));
if(rev === arr[i]){
emp.push(arr[i]);
}
}
return emp;
}
console.log(pali([121,134,1234,1551]));

//IIFE METHOD

(function palin(arr)
{
  let rev,i;
for(let i=0;i<arr.length;i++){
rev = parseInt(arr[i].toString().split("").reverse().join(""));
if(rev === arr[i]){
console.log(arr[i]);
}
}
})([123,131,144441]);

//6)Medaian Anonoyms method
let code = function(num,num2){
let comb = [...num,...num2];
let resu ,sum =0;
for(let i=0;i<comb.length;i++)
{
  sum+=comb[i];}
  resu = Math.floor(sum/comb.length);
  return resu;
}
console.log(code([3,11,12],[1,2,5]));

//IIFE METHOD 

(function code(num,num2)
{
  let comb = [...num,...num2];
  let resu ,sum =0;
  for(let i=0;i<comb.length;i++)
  {
    sum+=comb[i];}
    resu = Math.floor(sum/comb.length);
    console.log(resu);
  })([3,11,12],[1,2,5]);

  //7)remove duplicates
  let dupli = function(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++)
    {
      if(unique.indexOf(arr[i])=== -1)
      unique.push(arr[i]);
    }
    return unique;
  }
  console.log(dupli([1,2,3,1,1,2,4]));

  //IIFE METHOD
  (function dupli(arr){
    let unique = [];
    for(let i=0;i<arr.length;i++)
    {
      if(unique.indexOf(arr[i])=== -1)
      unique.push(arr[i]);
    }
    console.log(unique);
  })([1,2,3,1,1,2,4]);

  //8) Rotatae array by k times
  let rotate = function(arr){
    const k = 3;
  const n = arr.length;
  for(let i=0, j=n-k-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  for(let i= n-k,j=n-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  for(let i=0,j= n-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
  }
  console.log(rotate([1,2,3,4,5,6]));
  
  //IIFE METHOD
  (function rotate (arr){
    const k = 3;
  const n = arr.length;
  for(let i=0, j=n-k-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  for(let i= n-k,j=n-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  for(let i=0,j= n-1;i<j;i++,j--)
  {
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  console.log(arr);
  })([1,2,3,4,5]);



  //2nd qustion 
  //Print odd number in arrow function
  var odd = (arr) =>{
    let i,odd =[];
    for(i=0;i<arr.length;i++)
    {
      if(arr[i]%2!==0)
      {
        odd.push(arr[i]);
      }
    }
    return odd;
  }
  console.log(odd([12,13,14,15]));

//2) Title case with Arrow function
var str = (str5)=>{
  let str2 = str5.split(" ");
  for(let i=0;i<str2.length;i++)
  {
    str2[i] = str2[i].charAt(0).toUpperCase()+str2[i].slice(1);
  }
  let final =str2.join(" ");
  return final;
}
console.log(str("this is my learning"));

//3. SUM OF ALL NUMBERS IN ARRAY
  //Arrow function  method   
  let summ5 = (arr)=>{
    let sum = 0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum; 
  }
  console.log(summ5([1,2,3,4]));

  //4) Prime numbers Arrow method   
  let prime = function(arr)
  {
    let i,count,prim =[];
    for(i=0;i<arr.length;i++)
    { count =0;
        for(let j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            count++;
        }
        if(count===2)
        prim.push(arr[i]);
    }
    return prim;
  }
  console.log(prime([7,9,11]));

  /// 5)Palindrome in array (Anonoyms method)
let palin = function(arr)
{
let rev,i,emp = [];
for(let i=0;i<arr.length;i++){
rev = parseInt(arr[i].toString().split("").reverse().join(""));
if(rev === arr[i]){
emp.push(arr[i]);
}
}
return emp;
}
console.log(palin([121,134,1234,1551]));


  