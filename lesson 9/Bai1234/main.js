// //1......................

// let button=document.getElementsByClassName('button')

// let h1Element=document.querySelector('h1');
// console.log(h1Element);

// let countContent=0;
// h1Element.innerHTML=countContent;


// function render(){

//     button[0].addEventListener('click',function(){
//         countContent++;
//         h1Element.innerHTML=countContent;
//     });

//     button[1].addEventListener('click',function(){
//         countContent--;
//         h1Element.innerHTML=countContent;
//     });

// }


// render();



// //2.......................


// let button=document.getElementsByClassName('button')

// let h2Element=document.querySelector('h2');

// let inputElement=document.querySelector('input');

// let valueInput;
// let p;


// button[0].onclick=function(){

//     button[1].classList.add('css');
    
//     valueInput=Number(inputElement.value);
//     console.log(typeof valueInput);
//     if(typeof valueInput==='number'&&isNaN(valueInput)===false&&valueInput!=""){
//         p = setInterval(function(){
//             valueInput--;
//             h2Element.innerHTML=valueInput;
//             if(valueInput<=0){
//                 inputElement.value=valueInput;
//                 clearInterval(p);
//             }
//         },1000)
//     }
//     else{
//         alert("Nhap so!!");
//     }
// }

// button[1].onclick=function(){
//     button[0].classList.add('css');
//     button[1].classList.remove('css');
//     h2Element.innerHTML='STOP'
//     inputElement.value=valueInput;
//     clearInterval(p);
// }

// //3...........................................


// let reloadElement=document.querySelector('.head');

// let pElement=document.querySelector('p');
// let hElement=document.querySelector('h4');

// const DATA="https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json";

// fetch(DATA)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         reloadElement.onclick=function(){
//             let value=data[Math.floor(Math.random() * data.length)];
//             pElement.innerHTML=value.quoteText;
//             hElement.innerHTML=value.quoteAuthor;
//         }
//     })



// //4...............................
// let tbodyElement=document.querySelector('#ts_tbody');
// console.log(tbodyElement);

// let obj=[
//     {Project:"Learn Front-End",Task:"Learn HTMl",Time_Spent:6},
//     {Project:"Learn Front-End",Task:"Learn Css",Time_Spent:8},
//     {Project:"Learn Front-End",Task:"Learn js",Time_Spent:6},
//     {Project:"Learn Git",Task:"Learn HTMl",Time_Spent:2},
// ];


// for(let value of obj){
//     tbodyElement.innerHTML += `<tr><td>${value.Project}</td><td>${value.Task}</td><td>${value.Time_Spent}</td><th><button class="remove">X</button></th></tr>`
// }
// let trElement=document.getElementsByTagName('tr');
// tbodyElement.removeChild(trElement[1]);

// let buttonElement=document.querySelector('button');
// let inputElement=document.querySelectorAll('.add');

// buttonElement.onclick=function(){
//     let arr =Array.from(inputElement).map(function(element){
//         let value=element.value;
//         element.value="";
//         return value;
//     })
//     let obj1={Project:arr[0],Task:arr[1],Time_Spent:arr[2]};
//     obj.push(obj1);
//     tbodyElement.innerHTML += `<tr><td>${obj1.Project}</td><td>${obj1.Task}</td><td>${obj1.Time_Spent}</td><th><button class="remove">X</button></th></tr>`
//     console.log(obj);
//     let remove1=document.querySelectorAll('.remove');
//     removeFunction(remove1);
// }

// let remove=document.querySelectorAll('.remove');
// function removeFunction(remove){
//     Array.from(remove).forEach(function(element,index){
//         element.onclick=function(){
//             console.log(element)
//             let p1 = element.parentElement;
//             let trParent=p1.parentElement;
//             let tdValue=trParent.querySelectorAll('td');
//             console.log(tdValue);



//             // let objRemove = Array.from(tdValue).reduce(function(objR,items){
//             //     objR.push(items.innerHTML)
//             //     return objR;
//             // },[])
//             // console.log(objRemove);
//             // let objRemove1={Project:objRemove[0],Task:objRemove[1],Time_Spent:Number(objRemove[2])};
//             // let objRemoveT=objRemove1;
//             // console.log(objRemove1);
//             // for(let index in obj){
//             //     console.log(obj[index]==objRemoveT);
//             //     let check=(obj[index]===objRemoveT);
//             //     //console.log(check)
//             //     if(check=='true'){
//             //         obj.splice(index,1);
                    
//             //     }
//             // }
        
//             trParent.remove();
//         }
//     })
// }
// removeFunction(remove);

