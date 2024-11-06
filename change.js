const showbtnElm=document.getElementById("showbtn");
const resultCategoryElm=document.getElementById("resultCategory");
const rmElm=document.getElementById("rm");

showbtnElm.addEventListener("click",()=>{
    const category=document.getElementById("category").value;
    const kg=parseFloat(document.getElementById("kg").value);
    const rep=Number(document.getElementById("rep").value);
    // 入力を確認
    if(kg<=0 || kg===null || kg===undefined ||isNaN(kg)){
        return alert("重量を数値で入力してください");
    }
    if(rep<=0 || rep===null || rep===undefined || isNaN(rep)){
        return alert("回数を整数値をで入力してください");
    }
    switch(category){
        case "bench":
            resultCategoryElm.textContent="ベンチプレスの1RMは約";
            rmElm.textContent=(kg*rep/40+kg).toFixed(1)+"kg";
            break;
        case "squat":
            resultCategoryElm.textContent="スクワットの1RMは約";
            rmElm.textContent=(kg*(1+rep/33.3)).toFixed(1)+"kg";
            break;
        case "deadlift":
            resultCategoryElm.textContent="デッドリフトの1RMは約";
            rmElm.textContent=(kg*(1+rep/33.3)).toFixed(1)+"kg";
            break;

    }
})
