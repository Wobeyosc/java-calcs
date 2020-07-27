let siteVisits = 1000;
let conversionPercent = 10;

function conversionRate (visitors, percentage) {
    percentage = percentage / 100;
    return Math.floor(visitors * percentage);
}

function formValues () {
    siteVisits = document.getElementById('numVisit').value;
    conversionPercent = document.getElementById('rate').value;
    result = conversionRate(siteVisits, conversionPercent);
    console.log("If you have " + siteVisits + " site visits a month and " + conversionPercent + "% conversion then you have");
    console.log(result + " Potential customers");
}

function updatePage () {
    formValues();
    document.getElementById("visitors").innerHTML = siteVisits;
    document.getElementById("convertID").innerHTML = conversionPercent;
    document.getElementById("customerResult").innerHTML = result;
    document.getElementById("results").style.color = "black";
    document.getElementById("results").style.backgroundColor = "aliceblue";
    document.getElementById("visitors").style.color = "#0249a5";
    document.getElementById("convertID").style.color = "#0249a5";
    document.getElementById("customerResult").style.color = "#0249a5";
}

