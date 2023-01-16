// JavaScript Document

$(document).ready(function() {
    // creates working tabs
    $("li.nav").click(function() {
        $("li.nav").removeClass("current");
        $("div").removeClass("current");

        $(this).addClass("current");

        var tabId = $(this).attr("data-tab");

        $("#" + tabId).addClass("current");
    });
});

// call the init function when the page is done loading
$(init);

function init() {
    // calls function to find season when button is clicked
    $("#submit").click(findSeason); 
}

function validateQuiz(e) {
    e.preventDefault();
}

function findSeason(e) {
    e.preventDefault();

    // gets eye temperature
    var eyeTemp = $("select#eyes option:checked").attr("data-temp");

    // validates eye color
    if (!eyeTemp) {
        return alert("Please select your eye color.");
    }

    // gets skin temperature
    var skin = $("input[type=radio][name=tone]:checked").val();

    // validates  skin tone
    if (!skin) {
        return alert("Please select your skin tone.");
    }

    // gets hair color
    var hair = $("select#hair option:checked").val();

    // validates eye color
    if (!hair) {
        return alert("Please select your hair color.");
    }

    // gets hair temperature
    var hairTone = $("select#hair option:checked").attr("data-temp");

    // determines hair shade
    let hairShade;
    if (hair === "warmBlonde" | hair === "strawberry" | hair === "coolBlonde" | hair === "coolLight" | hair === "warmLight") {
        hairShade = "light";
    } else if (hair === "coolMedium" || hair === "warmMedium" || hair === "warmDark" || hair === "coolDark" || hair === "ginger") {
        hairShade = "dark";
    }

    // determines overall temperature
    let temp = skin;
    if (skin === "cool" && eyeTemp === "cool" && hairTone === "cool" ||
    skin === "cool" && eyeTemp === "cool" && hairTone === "warm" ||
    skin === "cool" && eyeTemp === "warm" && hairTone === "cool" ||
    skin === "warm" && eyeTemp === "cool" && hairTone === "cool") {
        temp = "cool";
    } else if (skin === "warm" && eyeTemp === "warm" && hairTone === "warm" ||
    skin === "warm" && eyeTemp === "warm" && hairTone === "cool" ||
    skin === "warm" && eyeTemp === "cool" && hairTone === "warm" ||
    skin === "cool" && eyeTemp === "warm" && hairTone === "warm") {
        temp = "warm";
    }

    // determines user's season
    let season = "neutral";
    if (temp === "cool" && hairShade === "light") {
        season = "summer";
    } else if (temp === "cool" && hairShade === "dark") {
        season = "winter";
    } else if (temp === "warm" && hairShade === "light") {
        season = "spring";
    } else if (temp = "warm" && hairShade === "dark") {
        season = "autumn";
    }

    // message output
    if (season === "autumn") {
        $("#output").html(`You are most likely an autumn!`);
    } else {
        $("#output").html(`You are most likely a ${season}!`);
    }
}