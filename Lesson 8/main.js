
//1-b 2-a 3-c 4-d

//2.....................
// let a=setInterval(function(){
//     console.log('hello');
// },1000)


//3...........
//  -Biến let hay var khi khai báo trong hàm thì ra ngoài hàm ko thể chạy được



// //4............................
// let li=document.getElementsByTagName('li');
// console.log(li[0]);

// for(let value of li){
//     console.log(value);
// }


// //5-------------------------
// let div=document.getElementsByClassName('singer');
// console.log(div[1]);
// for(let value of div){
//     console.log(value);
// }


// //8...........................
// function wish(){
//     let name='Hieu';
//     let wish='Fullstack'
//     alert(`Name: ${name} \nWish to do this year:${wish}`);
// }
// wish();


// //9.......................
// function wishToDo(name,wish){
//     alert(`Name: ${name} \nWish to do this year:${wish}`);
// }

// wishToDo('Hieu','Fullstack');


// //10.......................
// function wishToDo(...orther){
//     if(orther.length>1){
//         alert(`Name: ${orther[0]} \nWish to do this year:${orther[1]}`);
//     }
//     else{
//         alert(`Name: ${orther[0]} \nWish to do this year:No wish to do this years`);
//     }
// }

// wishToDo('Hieu',);


// //11...............................
// let buttonElement=document.getElementById("my-button");
// console.log(buttonElement);

// buttonElement.addEventListener('click',function(){
//     console.log('Upper it');
//     console.log(`Name: ${inputElement.value}`);
//     console.log(`Name upper case: ${inputElement.value.toUpperCase()}`);
//     divElement.innerHTML=`Name: ${inputElement.value.toUpperCase()}`;
// })

// let inputElement=document.getElementById('my-input');
// console.log(inputElement);

// let divElement=document.getElementById('resul_div');
// console.log(divElement);


//12..........................
let items =[
    'Backpack',
    'MiBand watch',
    'Ring'
];

console.log(items);

let ulElement=document.getElementById('item_list_ul');
let liElement=document.getElementsByTagName('li');
console.log(ulElement);


ulElement.removeChild(liElement[0]);
ulElement.removeChild(liElement[0]);
let i=0;
for(let value of items){
    ulElement.innerHTML+=`<li><span>${value}</span> <button class="Remove">Remove</button> </li>`;
   // ulElement.innerHTML+=`<li><button>Remove</button></li>`;
}

let inputElement=document.getElementById('my-input');
console.log(inputElement);
let buttonElement=document.getElementById('my-button');

function add(){
    items.push(inputElement.value);
    console.log(items);
    ulElement.innerHTML+=`<li><span>${items[items.length-1]}</span></li>`;


}


buttonElement.addEventListener('click',function(){
    console.log('Add button click');
    console.log(` ${inputElement.value}`);
})

buttonElement.addEventListener('click',add);

let Remove=document.getElementsByClassName('Remove');




let SpanElement=document.getElementsByTagName('span');


for(let index in items){
    Remove[index].addEventListener('click',function(){
        console.log('Remove');
        items.splice(index,1);
        console.log(items);
        ulElement.removeChild(liElement[index]);
    })
}

