
let dropdowns = document.querySelectorAll("select");
let btn = document.querySelector("button");


for(let select of dropdowns){
    for(let currCode in countryList){
        let option = document.createElement("option");
        option.innerText = currCode;
        if(select.name === "from" && currCode === "USD"){
            option.selected = "selected";
        } else if(select.name === "to" && currCode === "PKR"){
            option.selected = "selected";
        }
        select.append(option);
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag = (elm) =>{
    let currCode = elm.value;
    let countryCode = countryList[currCode];
    console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`
    let img = elm.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amountVal = amount.value;
    if(amountVal === 0 || amountVal<1){
        amountVal = 1;
        amount.value = "1";
    }
})