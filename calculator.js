
function parseQuote(response) {
    console.log(response);
    $("#quote").text('"' + response.quoteText + '"-' + response.quoteAuthor)
};
var tag = document.createElement("script");
tag.src = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote";
$('#quote').html(tag);

console.log("=============")
function calsPerDay(event) {
    event.preventDefault();
    function find(id) {
        return document.getElementById(id)
    }

    var age = find("age").value;
    var heightFeet = find("heightFeet").value * 12;
    var heightInches = find("heightInches").value * 2.54;
    var weight = find("weight").value / 2.2;
    var result = 0;
<<<<<<< HEAD
    // console.log(document.getElementById("test").value);
=======
    console.log(document.getElementById("test").value);
>>>>>>> ca0b7692a551ac97eca1fb74b1a22c4f89b5809b
    console.log(heightInches, "----------------");

    if (find("male").checked)
        result = 66.47 + (13.75 * weight) + (5.0 * ((heightInches) + (heightFeet * 2.54)) - (6.75 * age))
    else if (find("female").checked)
        result = 665.09 + (9.56 * weight) + (1.84 * ((heightInches) + (heightFeet * 2.54)) - (4.67 * age))
    console.log(result);
    find("totalCals").innerHTML = Math.round(result)
    console.log(heightInches, "=============");
}
console.log("==============")
<<<<<<< HEAD



function calculateBmi() {
                var bmiWeight = document.bmiForm.bmiWeight.value
                var height = document.bmiForm.height.value
                if(bmiWeight > 0 && height > 0){
                var finalBmi = bmiWeight/(height/100*height/100)
                document.bmiForm.bmi.value = finalBmi
                if(finalBmi < 18.5){
                document.bmiForm.meaning.value = "That you are too thin."
                }
                if(finalBmi > 18.5 && finalBmi < 25){
                document.bmiForm.meaning.value = "That you are healthy."
                }
                if(finalBmi > 25){
                document.bmiForm.meaning.value = "That you have overweight."
                }
                }
                else{
                alert("Please Fill in everything correctly")
                }
                }
=======
>>>>>>> ca0b7692a551ac97eca1fb74b1a22c4f89b5809b
