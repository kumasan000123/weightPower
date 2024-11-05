const showbtnElm=document.getElementById("showbtn");
const resultCategoryElm=document.getElementById("resultCategory");
const rmElm=document.getElementById("rm");

showbtnElm.addEventListener("click",()=>{
    const category=document.getElementById("category").value;
    const kg=parseFloat(document.getElementById("kg").value);
    const rep=Number(document.getElementById("rep").value);
    if(kg<=0 || kg===null || kg===undefined ||isNaN(kg)){
        return alert("数値入力してください");
    }
    if(rep<=0 || rep===null || rep===undefined || isNaN(rep)){
        return alert("数値を入力してください");
    }
    switch(category){
        case "bench":
            resultCategoryElm.textContent="ベンチプレスの1RMは";
            rmElm.textContent=(kg*rep/40+kg).toFixed(1)+"kg";
            break;
        case "squat":
            resultCategoryElm.textContent="スクワットの1RMは";
            rmElm.textContent=(kg*rep/33.3+kg).toFixed(1)+"kg";
            break;
        case "deadlift":
            resultCategoryElm.textContent="デッドリフトの1RMは";
            rmElm.textContent=(kg*rep/33.3+kg).toFixed(1)+"kg";
            break;

    }
})