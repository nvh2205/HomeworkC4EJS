// // Bài 1........................
// function findOppositeNumber(n,inputNumber){
//     let nElemetnChihld=Number(360/(n));
//     let inputNumber_;

//      inputNumber_=inputNumber*nElemetnChihld


//     let kq;
    
    
//     if(inputNumber_>180){
//         kq=inputNumber_-180;
//     }
//     else{
//         kq=180+inputNumber_;
//     }
    
//     let DoiDien=kq/nElemetnChihld;
//     console.log(DoiDien);
//     //let kq=Math.ceil(DoiDien/nElemetnChihld);
//     //console.log(kq);
// }

// findOppositeNumber(10,2);
// findOppositeNumber(10,6);


// //Bài 2......................
let string1="abc";
let string2="123";

let arr1=string1.split("");
let arrNew=[];
let arr2=string2.split("");

let length2=arr2.length;
let length1=arr1.length;
let arr3= arr1.concat(arr2)
let length3=arr3.length
if(length1<=length2){
    for(let i=0;i<length2;i++){
        if(arr2.length>0){
            arrNew.push(arr1[0]);
            arrNew.push(arr2[0]);
            arr1=[...arr1.splice(1,arr1.length-1)];
            arr2=[...arr2.splice(0,arr2.length-1)];
            console.log(arr1,arr2,"24")
        }
    }
}


console.log(arrNew,"123");





//console.log(arrNew,"acb")


//Bài 3.......................

let a=1,b=10;
let content=document.querySelector(".content");
function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let kq = TaoSoNgauNhien(a,b);

content.innerText+=`Dự đoán con số của bạn nằm trong khoảng ${a} đến ${b}`;
let valueInput=document.querySelector("#input_");
let Quay__=document.querySelector("#Quay__");
let count=3;



Quay__.onclick=()=>{
    
    console.log(valueInput.value);
    if(valueInput.value != kq){
        count--;
        content.innerText+=` -- Bạn dự đoán sai còn ${count} lần nữa`;
    }
    else{
        alert("Bạn đúng kết quả là kq");
    }
    if(count==0){
        alert("Ban đã hết lượt dự đoán")
        
    }
}

console.log(kq);






