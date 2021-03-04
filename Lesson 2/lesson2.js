// //1-a-Var là const là 2 kiểu dữ liệu trong js
// 1-b . Let: có scope là block scoped
//             Không có bất kỳ giá trị khởi tạo nào
//       Var :Có scope là globally scoped
//            Được khởi tạo với giá trị là undefined
//        Const:Không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến
// 1-d:   Let:Dùng trong phạm vi block scoped
//         Var: Dùng khi ta khai báo biến globally scoped
//         const: Khi không muốn thay đổi giá trị    
// 2-  Boolean là một kiểu dữ liệu
//     Kết quả kiểu Boolean  là "true" hoặc "false"


// for(let i=0;i<7;i++){
//     console.log(i);
// }


// console.log(" --3b");
// let n = Number(prompt("Nhập n: "))
// for(let i = 0; i < n; i++)
// {
//     console.log(i);
// }


// console.log("--- 3c");
// let nC = Number(prompt("Nhập n-c: "))
// for(let i = 3; i < nC; i++)
// {
//     console.log(i);
// }


// console.log("--3d");
// let cD = Number(prompt("Nhập c-d: "));
// let nD = Number(prompt("Nhập n: "));
// for(let i = cD; i < nD; i++)
// {
//     console.log(i);
// }


// console.log("-- 3e");
// let c_e = Number(prompt("Nhập c-e: "));
// let n_e = Number(prompt("Nhập n-e: "));
// for(let i = c_e; i < n_e; i+=3)
// {
//     console.log(i);
// }


// console.log("--3f");
// let c_f = Number(prompt("Nhập c: "));
// let n_f = Number(prompt("Nhập n: "));
// let s_f = Number(prompt("Nhập s: "));
// for(let i = c_f; i < n_f; i+=s_f)
// {
//     console.log(i);
// }


// //4-----------------------
// let n=Number(prompt("Nhap n: "));
// while(n<0){
//     n=Number(prompt("Nhap n(n>0): "));
// }
// let value=1;
// for(let i=1;i<=n;i++){
//     value=value*i;
// }
// alert(value);


// //5--------------

// let age = Number (prompt("How old are you ? "));
// while(age<0){
//     age = Number (prompt("How old are you(age>0) ? "));
// }
// if (age < 14){
//     alert("You are not old enough to view this content");
// }
// else{
//     alert("Enjoy!");
// }



// //6------------------------------
// let x = prompt("Enter a number between 0 - 9: ");
// while(x < 0 || x > 9){
//    x= Number(prompt("Enter a number between 0 - 9:"));   
// } 
// if(x >=9/2){
//     alert(`${x} is higher half of 9`);
// }
// else {
//     alert(`${x} is lower half of 9 `);
// } 


// //7-----------------------
// let n = Number(prompt(" n ="));
// let x = Number(prompt(" x ="));

// if(x < n/2 ){
//     alert(`${x} is in lower half of ${n}`);
// }
// else if(x==n/2){
//     alert(`${x} is in Equal half of ${n}`);
// }
// else {
//     alert(`${x} is in higher half of ${n}`);
// }


// //8-----------------------------
// let x = Number(prompt("x= "));
// if(x % 2 == 0){
//     alert(`${x} is an even number ` );
// }else{
//     alert(`${x} is an odd number`);
// }


// //9---------------------------------
// for(let i = 0; i < 6; i++)
// {
//     if(i < 3)
//     {
//         console.log("L");
//     }
//     else
//     {
//         console.log("H");
//     }
// }

// let n = Number(prompt("Nhập n: "));
// for(let i = 0; i < n; i++)
// {
//     if(i <= n/2)
//     {
//         console.log("L");
//     }
//     else
//     {
//         console.log("H");
//     }
// }


// for(let i = 0; i < 8; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log("0");
//     }
//     else
//     {
//         console.log("1");
//     }
// }


// let n2 = Number(prompt("Nhập n: "))
// for(let i = 0; i < n2; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log("0");
//     }
//     else
//     {
//         console.log("1");
//     }
// }


//10--------------------------
// let Mass = Number(prompt("Your weight in kg ?: "));
// let Height = Number(prompt("Your height in cm ?: "));
// Height = Height/100;
// let Bmi = (Mass / Math.pow(Height,2));
// alert(`Your BMI is ${Bmi.toPrecision(3)}`);
// if(Bmi < 16)
// {
//     alert("You are severely underweight");
// }
// else if(Bmi < 18.5)
// {
//     alert("You are underweight");
// }
// else if(Bmi < 25)
// {
//     alert("You are normal ");
// }
// else if(Bmi < 30)
// {
//     alert("You are overweight ");
// }
// else
// {
//     alert("You are obese ");
// }