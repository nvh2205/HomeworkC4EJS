// function Pt(a,b,c){
//     let x1,x2,denlta;
//     if(a==0){
//         x1=x2=-c/a;
//         console.log(`x1=x2=${x1}`)
        
//     }
//     else{
//         denlta=b*b-4*a*c;
//         if(denlta==0){
//             console.log('Phương trình có 1 nghiệm');
//             x1=x2=-b/(2*a);
//             console.log(`x1=x2=${x1}`);
           
//         }
//         else if(denlta>0){
//             console.log('Phương trình có 2 nghiệm thực pb:');
//             x1=(-b + Math.sqrt(denlta)) / (2 * a);
//             x2=(-b - Math.sqrt(denlta)) / (2 * a);
//             console.log(`x1 = ${x1}, x2 = ${x2}`);
//         }
//         else if(denlta<0){
//             console.log('Phương trình có nghiệm phức: ');
//             let ao;
//             let thuc;
//             ao=Math.sqrt(denlta*(-1)) / (2 * a);
//             thuc=-b/(2*a);
//             console.log(`x1=${thuc} + ${ao.toFixed(2)}*i \nx1=${thuc} - ${ao.toFixed(2)}*i`);
//         }
//     }
// }

// let a,b,c;
// a=Number(prompt('Nhap a: '));
// b=Number(prompt('Nhap b: '));
// c=Number(prompt('Nhap c: '));
// Pt(a,b,c);


//2.............................
function average(...others) {
    let result=0;
    for(let value of others) {
        result += value;
    }
    let tb = result / others.length;
    if(tb < 5) {
        alert(`Trung Binh: ${tb} Hoc luc Tb`);
    }
    else if(tb <= 6.5) {
        alert(`Trung Binh: ${tb} Hoc luc Kha`);
    }
    else {
        alert(`Trung Binh: ${tb} Hoc luc Gioi`);
    }
    return tb;
}
let result;
result=average(1,2,3,4);
