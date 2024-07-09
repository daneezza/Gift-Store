function getRadioValue(form, name) {
    let val;
    let radios = form.elements[name];
    for (let i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            val = radios[i].value;
            break;
        }
    }
    return val;
}

function getSelectedValue(select) {
    return select.value;
}

function getSelectedText(select) {
    return select.options[select.selectedIndex].text;
}

function CheckOptions(formRef) {
    let selectedOption = getSelectedValue(formRef.bouquetOptions);
    if (selectedOption.includes("withChampagne")) {
        document.getElementById("product_01").querySelector("img").src = "white-gift.jpeg";
        document.getElementById("product_02").querySelector("img").src = "pink-gift.jpeg";
        document.getElementById("product_03").querySelector("img").src = "red-gift.jpeg";
    } else {
        document.getElementById("product_01").querySelector("img").src = "white.jpeg";
        document.getElementById("product_02").querySelector("img").src = "pink.jpeg";
        document.getElementById("product_03").querySelector("img").src = "red.jpeg";
    }

    let chosenBouquet = getRadioValue(formRef, "colour");
    displayBouquet(chosenBouquet);
}

function displayBouquet(bouquet) {
    let orderDiv = document.getElementById("order");
    let orderDescription = document.getElementById("orderDescription");
    if (bouquet) {
        let productDiv = document.getElementById("product_" + (bouquet === "White" ? "01" : bouquet === "Pink" ? "02" : "03")).outerHTML;
        orderDiv.innerHTML = productDiv;
        orderDescription.innerText = "Your " + bouquet + " bouquet";
    } else {
        orderDiv.innerHTML = "";
        orderDescription.innerText = "";
    }
}

function resetOrder() {
    document.getElementById("product_01").querySelector("img").src = "white.jpeg";
    document.getElementById("product_02").querySelector("img").src = "pink.jpeg";
    document.getElementById("product_03").querySelector("img").src = "red.jpeg";
    document.getElementById("order").innerHTML = "";
    document.getElementById("orderDescription").innerText = "";
}

document.getElementById("bouquetOptions").addEventListener("change", function() {
    CheckOptions(this.form);
});

document.querySelector("form").addEventListener("reset", function() {
    resetOrder();
});

let radioButtons = document.querySelectorAll('input[name="colour"]');
radioButtons.forEach(function(radio) {
    radio.addEventListener('change', function() {
        CheckOptions(this.form);
    });
});
