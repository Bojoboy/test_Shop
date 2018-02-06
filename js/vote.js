$("#vote1").val('0');
// Create a click handler for your increment button
$("#increaseButton1").click(function () {
    var newValue = 1 + parseInt($("#vote1").val());
    $("#vote1").val(newValue);
});
// .. and your decrement button
$("#decreaseButton1").click(function () {
    var newValue = parseInt($("#vote1").val()) - 1;
    $("#vote1").val(newValue);
});

// --------------$$$--------------

$("#vote2").val('0');

$("#increaseButton2").click(function () {
    var newValue = 1 + parseInt($("#vote2").val());
    $("#vote2").val(newValue);
});

$("#decreaseButton2").click(function () {
    var newValue = parseInt($("#vote2").val()) - 1;
    $("#vote2").val(newValue);
});


// --------------$$$--------------

$("#vote3").val('0');

$("#increaseButton3").click(function () {
    var newValue = 1 + parseInt($("#vote3").val());
    $("#vote3").val(newValue);
});

$("#decreaseButton3").click(function () {
    var newValue = parseInt($("#vote3").val()) - 1;
    $("#vote3").val(newValue);
});

// --------------$$$--------------

$("#vote4").val('0');

$("#increaseButton4").click(function () {
    var newValue = 1 + parseInt($("#vote4").val());
    $("#vote4").val(newValue);
});

$("#decreaseButton4").click(function () {
    var newValue = parseInt($("#vote4").val()) - 1;
    $("#vote4").val(newValue);
});