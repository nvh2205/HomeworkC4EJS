//1.......................
// let a = 10;
// let b = 20;

// [a, b] = [b, a]; 

// console.log(a, b); // a = 20, b = 10

// let a=4,b=5,temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a,b);


// //2...................
// const s = 'Hello beauty there';
// var temp=[];
// temp=s.split(" ");
// console.log(temp);


// //3........................
// const a = [4, 5, 7, -8];
// console.log(...a);



// //4..................................
// const items=['Jean','T-Shirt','Socks'];
// var char=prompt('Hi there, welcom to shop admin panel - what do you want(C,R,U,D)?').toUpperCase();
// switch(char){
//     case 'R':
//         console.log('The current items are: ');
//         for(let i=0;i<items.length;i++){
//         console.log(`${i + 1}. ${items[i]}`);
//         }
//         break;
//     case 'C':
//         var newItem=prompt('Enter the name of the new item:')
//         alert('Done');
//         items.push(newItem);
//         console.log('The current items are: ');
//         for(let i=0;i<items.length;i++){
//         console.log(`${i + 1}. ${items[i]}`);
//         }
//         break;
//     case 'U':
//         var position=Number(prompt('Enter the position you want to update: '));
//         let newItem2 = prompt('Enter the new name');
//         alert('Done');
//         items.splice(position-1,0,newItem2);
//         console.log('The current items are: ');
//         for(let i=0;i<items.length;i++){
//         console.log(`${i + 1}. ${items[i]}`);
//         }
//         break;
//     case 'D':
//         var positionDelete= Number(prompt('Enter the position you want to delete: '));
//         alert('Done');
//         items.splice(positionDelete-1,1);
//         char=prompt('Hi there, welcom to shop admin panel - what do you want(C,R,U,D)?').toUpperCase();
//         console.log('The current items are: ');
//         for(let i=0;i<items.length;i++){
//         console.log(`${i + 1}. ${items[i]}`);
//         }
//         break;

//     default:
//         alert('This command');
//         break;

// }

//5......................................
// let arr = prompt(' Enter a sequence of numbers, the Numbers are separated by commas');
// arr = arr.split(',');
// let sum = 0;
// for( let i=0;i<arr.length;i++ ){
//     sum += Number(arr[i]);
// }
// alert(`The sum of them is ${sum}`);


// //6......................................
// let arr = prompt(' Enter a sequence of numbers, the Numbers are separated by commas');
// arr = arr.split(',');
// let min=0;
// for(let i=0;i<arr.length;i++){
//     if(min > arr[i]){
//         min=arr[i];
//     }
// }
// alert(min);


// //7...............................................
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let find=Number(prompt('Enter Number: '));

// for(let i=0;i<arr.length;i++){
//     if(find===arr[i]){
//         alert(`${find} is found in my array at index ${i}`);
//         break;
//     }
//     else{
//         alert(`${find} is NOT found in my array`);
//         break;
//     }
// }


// //8........................................
// var n = prompt("Enter the amount of sheep: ");
// var arr=new Array();
// for(let i=0;i<n;i++){
//     let size= Number(prompt("Enter the sheep size: "));
//     arr.push(size);
// }
// console.log('Hello,my name is Phuong An and here is my sheep sizes:' + '\n' + arr.join() );



// console.log(`Now my biggest sheep has size ${Math.max(...arr)}, let's shave it`);


// var defaultSize = Math.max(...arr);
// var index = arr.indexOf(defaultSize);
// arr[index] = 8;
// console.log('After shearing, here is my flock'+'\n'+arr.join() );


// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]+50;
// }
// console.log('One Month');
// console.log('One month has passed,my sheeps have grown, here are their sizes'+ '\n' + arr.join());




// var month=Number(prompt('Enter the number of months you want:'));
// for(let i=0;i<month;i++){

//     console.log(`After ${i} month of raising sheep..................`);
//     console.log(`Now my biggest sheep has size ${Math.max(...arr)}, let's shave it`);


//     var defaultSize = Math.max(...arr);
//     var index = arr.indexOf(defaultSize);
//     arr[index] = 8;
//     console.log('After shearing, here is my flock'+'\n'+arr.join() );


//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]+50;
//     }
//     console.log('One Month');
//     console.log('One month has passed,my sheeps have grown, here are their sizes'+ '\n' + arr.join());
// }



// var sum=0;
// var Money=Number(prompt('The amount you want to sell'));
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// var sum2=sum*Money;
// console.log('My flock size total: '+sum);
// console.log('I would get: '+sum2);




// //10.......................................................................................
// var Name=prompt('Enter a sequence of names,(separated by commas):');
// Name=Name.split(',');


// var conver=Name.map(function(items){
//     items = `<${items}>`;
//     return items;
// })

// alert(`${Name} => ${conver}`);



//11........................................................................
var arr = (prompt('Enter a sequence of number: '));
arr=arr.split(',');

var Odd=arr.filter(function(items){
    if(items%2===1){
        return items;
    }
})

alert(`${arr} => ${Odd}`);
