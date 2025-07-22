// function starter(cb)
// {
//   console.log("starter order");
//   setTimeout(()=>
//   {
//     console.log("starter served")
//     cb(sweets)
//     },1000)

// }
// function maincourse(cb){
//      console.log("maincourse order");
//   setTimeout(()=>
//   {
//     console.log("maincourse served")
//     cb(bill)
//   },1000)

// }
// function sweets()
// {
//      console.log("sweet order")
//   setTimeout(()=>
//   {
//     console.log("sweet served")
   
//   },1000)

// }
// function bill()
// {
//      console.log("your bill is paid");
//   setTimeout(()=>
//   {
//     console.log("bill paid");
//   },1000)

// }
// starter(maincourse) //callback ki help se starter ke baad is func ko call krvaya
// maincourse()
// sweets()
// bill();


//*************
function starter(cb) {
  console.log("starter order");
  setTimeout(() => {
    console.log("starter served");
    cb(); // Call maincourse
  }, 1000);
}

function maincourse(cb) {
  console.log("maincourse order");
  setTimeout(() => {
    console.log("maincourse served");
    cb(); // Call sweets
  }, 1000);
}

function sweets(cb) {
  console.log("sweet order");
  setTimeout(() => {
    console.log("sweet served");
    cb(); // Call bill
  }, 1000);
}

function bill(cb) {
  console.log("your bill is paid");
  setTimeout(() => {
    console.log("bill paid");
    cb(); // Final hello
  }, 1000);
}

starter(function () {
  maincourse(function () {
    sweets(function () {
      bill(function () {
        console.log("hello");
      });
    });
  });
});
