// let el1 = document.getElementById("homepage");
// console.log(el1); 

// //2.class name
// let el2=document.getElementsByClassName("user");
// console.log(el2[2]);//getting user with the help of index

// //3.tag name
// let el4 = document.getElementsByTagName("p");
// console.log(el4);

// //4.query selector
//id btatni hai # krke
let el5=document.querySelector("#homepage");
console.log(el5);

//id btani hai . krke
//query selector always give 1st element
//no need to pass index number
let el6=document.querySelector(".user");
console.log(el6);

let el7 = document.querySelectorAll(".user");
console.log(el7);

let el8 =document.querySelector("p");
// console.log(el8);
console.dir(el8);

//property
//1.innerText //used both for setter and getter
//2.innerHTML
//3.textContent
let content = el8.innerText
console.log(content);

el8.innerText="set using JavaScript" //this will upadte on html page 
// not update on console beacuse humne console per to update ki hi nahi 
//innerText use krne se sirf text text ata hai
//innerHTML use krne se pura HTML ata hai 
