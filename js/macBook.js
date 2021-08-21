///set all zero common value
function setCommonValue(clickId, setId){
    document.getElementById(clickId).addEventListener("click", function(){
        const findSetId = document.getElementById(setId);
        findSetId.innerText = 0;
        getTotalPrice();
    });

};
setCommonValue("memoryBtnOne", "memoryCost");
setCommonValue("storageBtnOne", "storageCost");
setCommonValue("deliveryBtnOne", "deliveryCost");

// set all 180 common value
function setCommonvalueTwo(clickIdTwo, setIdTwo){
    document.getElementById(clickIdTwo).addEventListener("click", function(){
        const findSetId = document.getElementById(setIdTwo);
        findSetId.innerText = 180;
        getTotalPrice();
    });

};
setCommonvalueTwo("memoryBtnTwo", "memoryCost");
setCommonvalueTwo("storageBtnThree", "storageCost");

// set storage 100 
document.getElementById("storageBtnTwo").addEventListener("click", function(){
    let storageCost2 = document.getElementById("storageCost");
    storageCost2.innerText = 100;
    getTotalPrice();
});

// set delivery 20
document.getElementById("deliveryBtnTwo").addEventListener("click", function(){
    let deliveryCost2 = document.getElementById("deliveryCost");
    deliveryCost2.innerText = 20;
    getTotalPrice();
});


// get total price 

function getTotalPrice(){
    const bestPrice = document.getElementById("bestPrice").innerText;
    const memoryPrice = document.getElementById("memoryCost").innerText;
    const storagePrice = document.getElementById("storageCost").innerText;
    const deliveryPrice = document.getElementById("deliveryCost").innerText;
    const totalPrice = parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice);
    // console.log(totalPrice);
    // set total price
    const setTotalPrice = document.getElementById("totalPrice");
    setTotalPrice.innerText = totalPrice;

    // set total price two
    let setTotalPriceTwo = document.getElementById("totalPriceTwo");
    setTotalPriceTwo.innerText = totalPrice; 
};

// get offer from stevekaku
function getOffer(){
    // const inputText = document.getElementById("inputText");
    // console.log(inputText.value);
    // const totalPriceTwo = document.getElementById("totalPriceTwo");
    // console.log(totalPriceTwo.innerText);

}
// getOffer();

document.getElementById("applyBtn").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    // console.log(inputText.value);
    const totalPriceTwo = document.getElementById("totalPriceTwo");
    if(inputText.value == "stevekaku"){
        // console.log("done")
        const intTotalPriceTwo = parseInt(totalPriceTwo.innerText);
        const parcentOfOffer =  ((20/100)*intTotalPriceTwo);
        const offerFromSteveKaku = intTotalPriceTwo - parcentOfOffer;
        // console.log(offerFromSteveKaku); 
        totalPriceTwo.innerText = offerFromSteveKaku;
        inputText.value = '';
    };
    
});
    

