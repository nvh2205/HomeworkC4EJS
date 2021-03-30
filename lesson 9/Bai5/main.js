let content=document.querySelector('.header1');
console.log(content);

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let score=document.querySelector('.score');
console.log(score)
let x= getRandom(-1,1);
let y= getRandom(-1,1);
let result=getRandom(-2,2);
let check=0;

let clickElemnt=document.querySelectorAll('.click');

content.innerHTML = `<h4> ${x} + ${y} = ${result} </h4>`


let settingScore=document.querySelector('.show-score');
let settingTimer=document.querySelector('.show-timer');

console.log(settingScore,settingTimer)

function clickScore(set){
    settingScore.onclick=function(){
        showScore();
    }
}

function showScore(){
    if(settingScore.checked){
        score.innerHTML=`<h4>Score: ${check}</h4>`
    }
    else{
        score.innerHTML=``;
    }
}


let cardElement=document.querySelector('.card');



let timer=document.querySelector('.slidecontainer');

console.log(timer);

 

clickScore(settingScore);
let time=100;



let a;
function clickTimer(set){
    player(clickElemnt);
    settingTimer.onclick=function(){
        if(settingTimer.checked){
            a=setInterval(function(){
                timer.innerHTML=`<input disabled type="range" min="1" max="100" value="${time--}" class="slider" id="myRange">`
                if(time==1){
                    clearInterval(a);
                    check--;
                    score.innerHTML=`<h4>Score: ${check}</h4>`
                    
                    //player(clickElemnt);
                    //break;
                }
                player(clickElemnt);
            },100)

        }
        else{
            timer.innerHTML=``;
            clearInterval(a);
            player(clickElemnt);
        }

        
    }
}

clickTimer(time);






function player(clickElemnt){
    Array.from(clickElemnt).forEach(function(element,index){
        
        element.onclick=function(){

            // let x= getRandom(-1,1);
            // let y= getRandom(-1,1);
            // let result=getRandom(-2,2);
            //let x=0, y=0,result=0;
            //content.innerHTML = `<h4> ${x} + ${y} = ${result} </h4>`
            // if(settingTimer.checked){
            //     a=setInterval(function(){
            //         timer.innerHTML=`<input disabled type="range" min="1" max="100" value="${time--}" class="slider" id="myRange">`
            //         if(time==1){
            //             clearInterval(a);
            //             check--;
            //             score.innerHTML=`<h4>Score: ${check}</h4>`
            //         }
            //     },100)
            // }
            // else{
            //     timer.innerHTML=``;
            //     clearInterval(a);
            // }

            console.log(x,y,result);
            //console.log(a,b,c);
            if(time==1){
                let b=setInterval(function(){
                    timer.innerHTML=`<input disabled type="range" min="1" max="100" value="${time--}" class="slider" id="myRange">`
                },100);
            }
            
            if(index==1){     
                if((x+y)==result ){
                    check++;                   
                }
                else{                   
                    check--;                 
                }
            }
            else{

                if((x+y)!=result){
                   
                    check++;
                    
                }
                else{                   
                    check--;
                }
            }
            time=100;
            clickScore(settingScore);
            showScore();
            content.innerHTML = `<h4> ${x} + ${y} = ${result} </h4>`
            let a= getRandom(-1,1);
            let b= getRandom(-1,1);
            let c=getRandom(-2,2);
             x=a;
             y=b;
             result=c;
             console.log(a,b,c);
             content.innerHTML = `<h4> ${x} + ${y} = ${result} </h4>`
        }
    })
}


//player(clickElemnt);