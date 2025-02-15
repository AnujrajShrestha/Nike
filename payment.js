function cardspace(){
    const cardno=document.getElementById("cardno").value;
    if(cardno.length==4 || cardno.length==9 || cardno.length==14){
        document.getElementById("cardno").value=cardno+" ";
        document.getElementById("cardno").max=1;
    }
}

//payment form date format
function addSlashes(){
    const vlaid=document.getElementById("validtill").value;
    if(vlaid.length==4 || vlaid.length==7){
        document.getElementById("validtill").value=vlaid+"/";
        document.getElementById("validtill").max=1;
    }
}
