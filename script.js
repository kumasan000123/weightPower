//inputのとボタン要素取得

const showbtnElm=document.getElementById("showbtn");
//各結果表示用の要素取得
const benchLavelElm=document.getElementById("benchLavel");
const benchresultElm=document.getElementById("benchresult");
const squatLavelElm=document.getElementById("squatLavel");
const squatresultElm=document.getElementById("squatresult");
const deadliftLavelElm=document.getElementById("deadliftLavel");
const deadliftresultElm=document.getElementById("deadliftresult");
//const allresultElm=document.getElementById("allresult");

showbtnElm.addEventListener("click",()=>{
    const weight=document.getElementById("weight").value;
    const bench=document.getElementById("bench").value;
    const squat=document.getElementById("squat").value;
    const deadlift=document.getElementById("deadlift").value;
    const benchLevel=benchWeigh(weight,bench);
    const squatLevel=squatWeigh(weight,squat);
    const deadliftLevel=deadliftWeigh(weight,deadlift);
    benchLavelElm.textContent="ベンチプレスのレベルは";
    benchresultElm.textContent=benchLevel;
    squatLavelElm.textContent="スクワットのレベルは";
    squatresultElm.textContent=squatLevel;
    deadliftLavelElm.textContent="デッドリフトのレベルは";
    deadliftresultElm.textContent=deadliftLevel;
})

//判定用の関数
function benchWeigh(weight,bench){
    const power=bench/weight;
    if(power<0.5){
        return "超初心者";
    }else if(power<0.75){
        return "初心者";
    }else if(power<1.25){
        return "中級者";
    }else if(power<1.75){
        return "上級者";
    }else{
        return "エリート";
    }
}
function squatWeigh(weight,squat){
    const power=squat/weight;
    if(power<0.75){
        return "超初心者";
    }else if(power<1.25){
        return "初心者";
    }else if(power<1.5){
        return "中級者";
    }else if(power<2.25){
        return "上級者";
    }else{
        return "エリート";
    }
}
function deadliftWeigh(weight,deadlift){
    const power=deadlift/weight;
    if(power<1){
        return "超初心者";
    }else if(power<1.5){
        return "初心者";
    }else if(power<2){
        return "中級者";
    }else if(power<2.5){
        return "上級者";
    }else{
        return "エリート";
    }
}
