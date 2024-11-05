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
    const weight=parseFloat(document.getElementById("weight").value);
    const bench=parseFloat(document.getElementById("bench").value);
    const squat=parseFloat(document.getElementById("squat").value);
    const deadlift=parseFloat(document.getElementById("deadlift").value);
    if(weight<=0){
        return alert("体重が入力されていないか正常な数値ではありません");
    }
    const benchLevel=benchWeigh(weight,bench);
    const squatLevel=squatWeigh(weight,squat);
    const deadliftLevel=deadliftWeigh(weight,deadlift);
    // 結果の初期化
    benchLavelElm.textContent = "";
    benchresultElm.textContent = "";
    squatLavelElm.textContent = "";
    squatresultElm.textContent = "";
    deadliftLavelElm.textContent = "";
    deadliftresultElm.textContent = "";

    if(benchLevel!==0){
        benchLavelElm.textContent="ベンチプレスのレベルは";
        benchresultElm.textContent=benchLevel;
    }
    if(squatLevel!==0){
    squatLavelElm.textContent="スクワットのレベルは";
    squatresultElm.textContent=squatLevel;
    }
    if(deadliftLevel!==0){
        deadliftLavelElm.textContent="デッドリフトのレベルは";
        deadliftresultElm.textContent=deadliftLevel;
    }
})

//判定用の関数
function benchWeigh(weight,bench){
    if(bench===0 || bench<=0 || bench===null || bench===undefined ||isNaN(bench)){
        return 0;
    }
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
    if(squat===0 || squat<=0 || squat===null || squat===undefined ||isNaN(squat)){
        return 0;
    }
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
    if(deadlift===0 || deadlift<=0 || deadlift===null || deadlift===undefined ||isNaN(deadlift)){
        return 0;
    }
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
