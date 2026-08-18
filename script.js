// =================================
// RENZ PRINTS - MAIN JAVASCRIPT
// =================================

// SECTIONS
const welcome = document.querySelector(".welcome");
const customer = document.querySelector(".customer");
const products = document.querySelector(".products");

const startBtn = document.getElementById("startBtn");
const nextCustomer = document.getElementById("nextCustomer");


// =================================
// LET'S ORDER
// =================================

startBtn.addEventListener("click", function () {

    welcome.classList.add("hide");
    customer.classList.remove("hide");

    window.scrollTo(0, 0);

});


// =================================
// CUSTOMER INFORMATION
// =================================

nextCustomer.addEventListener("click", function () {

    const inputs = customer.querySelectorAll("input");

    const fullName = inputs[0].value.trim();
    const contactNumber = inputs[1].value.trim();
    const section = inputs[2].value.trim();
    const messengerName = inputs[3].value.trim();


    if (fullName === "") {

        alert("Please enter your full name.");
        inputs[0].focus();
        return;

    }


    if (contactNumber === "") {

        alert("Please enter your contact number.");
        inputs[1].focus();
        return;

    }


    if (section === "") {

        alert("Please enter your grade & section.");
        inputs[2].focus();
        return;

    }


    // SAVE CUSTOMER INFORMATION

    const customerInfo = {

        fullName: fullName,
        contactNumber: contactNumber,
        section: section,
        messengerName: messengerName

    };


    localStorage.setItem(
        "renzPrintsCustomer",
        JSON.stringify(customerInfo)
    );


    // GO TO PRODUCTS

    customer.classList.add("hide");
    products.classList.remove("hide");

    window.scrollTo(0, 0);

});


// =================================
// ACRYLIC KEYCHAIN
// =================================

const acrylicPage = document.getElementById("acrylicPage");
const acrylicDesignPage = document.getElementById("acrylicDesignPage");

let selectedAcrylicSize = "";


// OPEN ACRYLIC

function openAcrylic() {

    products.classList.add("hide");
    acrylicPage.classList.remove("hide");

    window.scrollTo(0, 0);

}


// SELECT ACRYLIC SIZE

function selectAcrylicSize(size) {

    selectedAcrylicSize = size;

    document.getElementById("selectedAcrylicSize").textContent =
        "Selected Size: " + size;


    document.getElementById("design35").classList.add("hide");
    document.getElementById("design28").classList.add("hide");
    document.getElementById("design30").classList.add("hide");


    if (size === "3.5 × 7.5 cm") {

        document.getElementById("design35").classList.remove("hide");

    }


    if (size === "2.8 × 5.3 cm") {

        document.getElementById("design28").classList.remove("hide");

    }


    if (size === "3.0 × 5.6 cm") {

        document.getElementById("design30").classList.remove("hide");

    }


    acrylicPage.classList.add("hide");
    acrylicDesignPage.classList.remove("hide");

    window.scrollTo(0, 0);

}


// =================================
// ACRYLIC DESIGN TYPE
// =================================

function chooseAcrylicType(type) {

    const pictureForm =
        document.getElementById("pictureDesignForm");

    const songForm =
        document.getElementById("songDesignForm");


    pictureForm.classList.add("hide");
    songForm.classList.add("hide");


    if (type === "Picture Design") {

        pictureForm.classList.remove("hide");

    }


    if (type === "Song Design") {

        songForm.classList.remove("hide");

    }

}


// =================================
// BACK TO ACRYLIC SIZE
// =================================

function backToAcrylicSize() {

    acrylicDesignPage.classList.add("hide");
    acrylicPage.classList.remove("hide");

    window.scrollTo(0, 0);

}


// =================================
// BACK TO PRODUCTS
// =================================

function backToProducts() {

    acrylicPage.classList.add("hide");

    acrylicDesignPage.classList.add("hide");

    document.getElementById("documentPage").classList.add("hide");

    document.getElementById("documentOptionsPage").classList.add("hide");

    products.classList.remove("hide");

    window.scrollTo(0, 0);

}


// =================================
// ACRYLIC CONTINUE
// =================================

function continueAcrylic() {

    if (selectedAcrylicSize === "") {

        alert("Please select an acrylic size.");
        return;

    }


    alert(
        "Acrylic Keychain\n\n" +
        "Size: " + selectedAcrylicSize + "\n" +
        "Price: PHP 30"
    );

}
// =================================
// DOCUMENT PRINTING
// =================================

const documentPage =
    document.getElementById("documentPage");

const documentOptionsPage =
    document.getElementById("documentOptionsPage");

const documentServiceTitle =
    document.getElementById("documentServiceTitle");

const documentColor =
    document.getElementById("documentColor");

const documentSize =
    document.getElementById("documentSize");

const documentPrice =
    document.getElementById("documentPrice");

let selectedDocumentService = "";


// =================================
// OPEN DOCUMENT PRINTING
// =================================

function openDocument() {

    products.classList.add("hide");

    documentPage.classList.remove("hide");

    window.scrollTo(0, 0);

}


// =================================
// SELECT DOCUMENT SERVICE
// =================================

function selectDocumentService(service) {

    selectedDocumentService = service;

    documentServiceTitle.textContent = service;

    documentPage.classList.add("hide");

    documentOptionsPage.classList.remove("hide");

    const colorGroup =
        document.getElementById("colorGroup");


    // Front Page does not need color selection

    if (service === "Front Page") {

        colorGroup.classList.add("hide");

    } else {

        colorGroup.classList.remove("hide");

    }


    documentColor.value = "";
    documentSize.value = "";

    documentPrice.textContent = "₱0";

    window.scrollTo(0, 0);

}


// =================================
// DOCUMENT PRICE
// =================================

function updateDocumentPrice() {

    const color = documentColor.value;
    const size = documentSize.value;
    const qty = Number(document.getElementById("documentQty").value) || 1;

    let price = 0;


    if (selectedDocumentService === "Text Only") {

        const prices = {
            "Black & White": {
                "A4": 6,
                "Short": 6,
                "Long": 7
            },

            "Partially Colored": {
                "A4": 7,
                "Short": 7,
                "Long": 8
            },

            "Fully Colored": {
                "A4": 10,
                "Short": 9,
                "Long": 10
            }
        };

        price = prices[color]?.[size] || 0;

    }


    else if (selectedDocumentService === "Picture Printing") {

        const prices = {
            "Black & White": {
                "A4": 8,
                "Short": 8,
                "Long": 10
            },

            "Partially Colored": {
                "A4": 15,
                "Short": 12,
                "Long": 17
            },

            "Fully Colored": {
                "A4": 17,
                "Short": 15,
                "Long": 20
            }
        };

        price = prices[color]?.[size] || 0;

    }


    else if (selectedDocumentService === "Front Page") {

        const prices = {
            "A4": 17,
            "Short": 16,
            "Long": 20
        };

        price = prices[size] || 0;

    }


    else if (selectedDocumentService === "Text and Image") {

        const prices = {
            "Black & White": {
                "A4": 7,
                "Short": 7,
                "Long": 8
            },

            "Partially Colored": {
                "A4": 9,
                "Short": 9,
                "Long": 10
            },

            "Fully Colored": {
                "A4": 12,
                "Short": 12,
                "Long": 15
            }
        };

        price = prices[color]?.[size] || 0;

    }

documentPrice.textContent = "₱" + (price * qty);
}


// =================================
// AUTOMATIC PRICE UPDATE
// =================================

documentColor.addEventListener(
    "change",
    updateDocumentPrice
);

documentSize.addEventListener(
    "change",
    updateDocumentPrice
);
document.getElementById("documentQty")
.addEventListener(
    "input",
    updateDocumentPrice
);


// =================================
// BACK TO DOCUMENT SERVICES
// =================================

function backToDocumentServices() {

    documentOptionsPage.classList.add("hide");

    documentPage.classList.remove("hide");

    window.scrollTo(0, 0);

}


// =================================
// CONTINUE DOCUMENT
