var roomInfo = [
  {
    id: 1,
    roomDetail: document.querySelector("#room1").innerText,
    bookingPrice: document.querySelector("#pay1").innerText,
    img_url:"data:image/jpeg;base64,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"
  },
  {
    id: 2,
    roomDetail: document.querySelector("#room2").innerText,
    bookingPrice: document.querySelector("#pay2").innerText,
    img_url:"data:image/jpeg;base64,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"
  },
  {
    id: 3,
    roomDetail: document.querySelector("#room3").innerText,
    bookingPrice: document.querySelector("#pay3").innerText,
    img_url:"data:image/jpeg;base64,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"
  },
];
// console.log(21);
var newBooking=[];
document.querySelector("#btn1").addEventListener("click",function(){
    var i=1
    bookTheRoom(i);
    // console.log(id)
})
function bookTheRoom(i){
    newBooking=JSON.parse(localStorage.getItem("bookTheRoom")) ||[];
    // ele.preventDefault();
//    / console.log(id);
    var room1=roomInfo.filter(function(elem){
        return elem.id==i;
    })
    newBooking.push(room1[0]);
    localStorage.setItem("bookTheRoom",JSON.stringify(newBooking));
    alert("You are booking for Deluxe Private Room(ensuite),If you Want To Continue Click Your Bookings")
    //console.log(room1);
}
document.querySelector("#btn2").addEventListener("click",function(){
    var i=2
    bookTheRoom(i)
})
function bookTheRoom(i){
    var newBooking=JSON.parse(localStorage.getItem("bookTheRoom")) ||[];
    //console.log(newBooking)
    // ele.preventDefault();
    var room2=roomInfo.filter(function(elem){
        return elem.id==i;
    })
    newBooking.push(room2[0]);
    localStorage.setItem("bookTheRoom",JSON.stringify(newBooking));
    alert("You are booking for 10 Bed Mixed Dorm (Shared Washroom),If you Want To Continue Click Your Bookings")
}
document.querySelector("#btn3").addEventListener("click",function(){
    var i=3;
    bookTheRoom(i)
})
function bookTheRoom3(i){
    var newBooking=JSON.parse(localStorage.getItem("bookTheRoom")) ||[];
//    ele.preventDefault();
    var room3=roomInfo.filter(function(elem){
        return elem.id==i;
    })
    newBooking.push(room3[0]);
    localStorage.setItem("bookTheRoom",JSON.stringify(newBooking));
    alert("You are booking for Deluxe Twin Bed Private Room (ensuite),If you Want To Continue Click Your Bookings")
}
