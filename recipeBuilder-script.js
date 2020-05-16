$(document).ready(function () {
    $(document).foundation();
    var presetDiet = "";
    var presetMealType = "";
    var presetNumberOfRecipes = 5;

    /* PRESET MEALTYPE TOGGLE SWITCH */
    $(".presetMealTypeToggles .switch-input").on("click", function () {
        var mealTypeID = $(this).attr("id");
        presetMealType = "";
        presetMealType = "&mealType=" + mealTypeID;
        console.log(`The preset meal type is: ${presetMealType} `);
    })


    /* PRESET DIET TOGGLE SWITCH */
    $(".presetDietToggles .switch-input").on("click", function () {
        var dietPresetID = $(this).attr("id");

        if (dietPresetID === "keto-friendly") {
            $(".dietInfoText").animate({ left: "20px" });
            $(".dietInfoText").text("The ketogenic diet is a very low-carb, high-fat diet that shares many similarities with the Atkins and low-carb diets. It involves drastically reducing carbohydrate intake and replacing it with fat. This reduction in carbs puts your body into a metabolic state called ketosis.");
            presetDiet = "";
            presetDiet = `&health=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "   paleo") {
            $(".dietInfoText").animate({ left: '20px' });
            $(".dietInfoText").text("A paleo diet typically includes lean meats, fish, fruits, vegetables, nuts and seeds — foods that in the past could be obtained by hunting and gathering. A paleo diet limits foods that became common when farming emerged about 10,000 years ago. These foods include dairy products, legumes and grains.");
            presetDiet = "";
            presetDiet = `&health=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "low-fat") {
            $(".dietInfoText").animate({ left: '20px' });
            $(".dietInfoText").text("A low-fat diet is one that restricts fat, and often saturated fat and cholesterol as well. Low-fat diets are intended to reduce the occurrence of conditions such as heart disease and obesity.");
            presetDiet = "";
            presetDiet = `&diet=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "high-protein") {
            $(".dietInfoText").animate({ left: '20px', });
            $(".dietInfoText").text("A high-protein diet is a diet in which 20% or more of the total daily calories comes from protein. Most high protein diets are high in saturated fat and severely restrict intake of carbohydrates. Example foods in a high-protein diet include lean beef, chicken or poultry, pork, salmon and tuna, eggs, and soy.");
            presetDiet = "";
            presetDiet = `&diet=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "low-sodium") {
            $(".dietInfoText").animate({ left: '20px', });
            $(".dietInfoText").text("A low-sodium diet limits high-sodium foods and beverages. Healthcare professions typically recommend these diets to treat conditions such as high blood pressure or heart disease. Although there are variations, sodium intake is generally kept to less than 2–3 grams (2,000–3,000 mg) per day ( 3 )");
            presetDiet = "";
            presetDiet = `&diet=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "high-fiber") {
            $(".dietInfoText").animate({ left: '20px', });
            $(".dietInfoText").text("A high fiber diet also promotes healthier eating patterns overall. High fiber foods such as whole grains, fruits, vegetables, nuts, and seeds can take longer to chew than other foods and will help keep you full longer.");
            presetDiet = "";
            presetDiet = `&diet=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        } else if (dietPresetID === "low-carb") {
            $(".dietInfoText").animate({ left: '20px', });
            $(".dietInfoText").text("A low-carb diet is a diet that restricts carbohydrates, such as those found in sugary foods, pasta and bread. It is high in protein, fat and healthy vegetables. There are many different types of low-carb diets, and studies show that they can cause weight loss and improve health.");
            presetDiet = "";
            presetDiet = `&diet=` + dietPresetID;
            console.log(`The preset diet array is: ${presetDiet}`);
        }
    })


    var apiKey = "&app_key=deec5a423eb3724726276082be688ba1";
    var appID = "&app_id=9c10ba7a";
    var baseURL = "https://api.edamam.com/search?q=";
    var preset_URLQUERY = "";
    var recipeResponse = [];
    /* var textObj = {}; */

    /* PRESET DIET SUBMIT /CLEAR */
    $("#presetDietsubmitBtn").on("click", function () {
        
        $(".recipeDump").empty();
        $(".recipesPage").css("display", "block");
        var foodType = "beef"; /* have a mixed up array with different food items here */
        presetNumberOfRecipes = `&from=0&to=` + ($(`#presetNumberOfRecipes`).val() || 5);

        /* BUILD URL QUERY SEARCH STRING */
        preset_URLQUERY = baseURL + foodType + appID + apiKey +
            presetNumberOfRecipes /* + "&calories=591-800"  */ + presetDiet + presetMealType;
        console.log(`QUERIED URL: ${preset_URLQUERY}`);
        $.ajax({
            url: preset_URLQUERY,
            type: "GET",
            success: function (response) {
                recipeResponse.length = 0;
                var r_numberOfRecipes = JSON.stringify(response.hits.length - 1);
                console.log(`NUMBER OF HITS = ${r_numberOfRecipes} `);

                var r_img = "";
                var https_index = "";

                if (r_numberOfRecipes < 3) {
                    $(".recipeError").css("display", "block");
                    console.log("NO RECIPES LOADED");
                } else {

                    for (var i = 0; i <= r_numberOfRecipes; i++) {
                        recipeResponse.push(JSON.stringify(response.hits[i]));
                        r_img = JSON.stringify(response.hits[i].recipe.image);
                        https_index = r_img.substring(r_img.indexOf("https"));
                        https_index = https_index.slice(0, -1);
                        console.log(`URL IMAGE URL: ${https_index}`)
                        $(".recipeDump").append(` 
                            <div class="recipe1">
                            <img class="recipe-img float-left" src="
                            ${https_index}" alt="Generated Recipe Image" data-missing-img = "assets/missingImgPlaceholder.png">
                            <h3 class="top-right recipe-title">${JSON.stringify(response.hits[i].recipe.label)}</h3> <br>
                            <strong> Recipe URL: </strong> <p> <a href="#" class = "recipe-URL"> ${JSON.stringify(response.hits[i].recipe.url)}   </a> </p>
                            <strong> Meal-Type: </strong> <p class = "recipe-mealType"> ${JSON.stringify(response.hits[i].recipe.mealType)} </p>
                            <strong> Dish Type: </strong> <p class = "recipe-dishType">${JSON.stringify(response.hits[i].recipe.dishType)}</p> <br>
                            <strong> Cusine: </strong> <p class = "recipe-cuisineType">${JSON.stringify(response.hits[i].recipe.cuisineType)} </p>
                            <strong> Calories: </strong> <p class = "recipe-calories">${Math.round(parseInt(JSON.stringify(response.hits[i].recipe.calories)), 10)} </p>
                            <strong> Time to Prepare: </strong> <p class = "recipe-prepareTime">${JSON.stringify(response.hits[i].recipe.totalTime)}</p>
                            <strong>Ingredients Needed:</strong> <p class = "recipe-ingredients">${JSON.stringify(response.hits[i].recipe.ingredientLines)}</p>
                            <strong>Health Labels:</strong> <p class = "recipe-healthLabels">${JSON.stringify(response.hits[i].recipe.healthLabels)}</p>
                            <strong>Health Caution Labels:</strong> <p class = "recipe-healthCautionLabels">${JSON.stringify(response.hits[i].recipe.cautions)}</p>
                    
                    
                            <button type="submit" value="Tag-Recipe" id="saveBtn${i}" class="text-center button success saveRecipeBtn">Bookmark Recipe <svg
                                class="bi bi-bookmark-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                d="M4.5 2a.5.5 0 00-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 011 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 014.5 1h4a.5.5 0 010 1h-4zm9-1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z"
                                clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"
                                clip-rule="evenodd" />
                            </svg> </button> <br> <hr>
                        </div> `);
                    }
                }
            }
        });
    })

    $(document).on("click", ".saveRecipeBtn", function(){
        console.log("you pressed me");
        console.log($(this).attr("id"));
        
    
    })



    $("#presetDietClearBtn").on("click", function () {
     /*    $('input:checkbox').each(function() { this.checked = false; });

        console.log("CLEAR FORM");
 */

    })


    /* grabRecipes("pork", "low-carb", "peanut", 11); */
    var arry_dietary = []; // load this into an object? than this object gets sent to URLQUERY builder function?
    var arry_cusineType = [];
    var arry_typeOfDish = [];
    var numberOfRecipes = 0;
    /*   $(".recipeOptionForm").prop('disabled', true); */


    /* CUSTOM RECEIPE TOGGLE SWITCH */
    /* $("#custom-recipe").on("click", function () {
        if ($(this).is(":checked")) {
            console.log("ON");
            $(".topPane").addClass("is-active");
            $(".bottomPane").removeClass("is-active");
            $(".recipeOptionForm").prop('disabled', false);
            $(".dietToggleForm").prop('disabled', true);
            $(".dietToggleForm").css('background-color', "grey");
            $(".dietToggleForm").attr("data-state", "true")
     
    
        } else if (!$(this).is(":checked")) {
            console.log("OFF");
            $(".topPane").removeClass("is-active");
            $(".bottomPane").addClass("is-active");
            $(".recipeOptionForm").prop('disabled', true);
            $(".dietToggleForm").prop('disabled', false);
            $(".dietToggleForm").css('background-color', "rgba(48, 189, 48)");
            $(".dietToggleForm").attr("data-state", "false");
        }
    }) */

    /* DIETARY OPTION FORM */
    $(document).on("click", ".dietaryOptionSet button", function () {
        var btnID = ($(this).attr("id"));
        console.log(btnID);

        if (arry_dietary.length === 0) {
            $(".resetCustomOptionsBtn").css("display", "block");
            $(`.submitCustomOptionsBtn`).css("display", "block");
            $(".recipeBtnDump").append(`<button class="secondary button small" data-delete=true id=${btnID} >${btnID}    <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/>
          </svg><button> `);
            $(".recipeBtnDump").append(` `);
            arry_dietary.push(btnID);
            console.log(`Array for dietary options is: ${arry_dietary}`);
        } else {
            if (arry_dietary.includes(btnID)) {
                console.log(`This value: ${btnID} is already in the array`);
                console.log(`Array for dietary options is: ${arry_dietary}`);

            } else if (!arry_dietary.includes(btnID)) {
                console.log(`This value: ${btnID} isn't in the array yet. Pushing it to array now...`);
                $(".recipeBtnDump").append(`<button class="secondary button small" data-delete=true id=${btnID}>${btnID} <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/><button> `);
                $(".recipeBtnDump").append(` `);
                arry_dietary.push(btnID);
                console.log(`Array for dietary options is: ${arry_dietary}`);

            }
        }
    })

    $(document).on("click", ".recipeBtnDump button", function () {
        var btnDelID = ($(this).attr("id"));
        console.log(`You want ${btnDelID} to be deleted`);
        var delIndex = arry_dietary.indexOf(btnDelID);
        if (delIndex > -1) {
            arry_dietary.splice(delIndex, 1)
        }
        $(`.recipeBtnDump #${btnDelID}`).remove();
        console.log(`Array for dietary options is now: ${arry_dietary}`);

    })

    /* ************************************************************************************************************************************* */
    /* CUSINE OPTION BUTTONS */
    $(document).on("click", ".cusineOptionSet button", function () {
        var btnID = ($(this).attr("id"));

        if (arry_cusineType.length === 0) {
            $(".resetCustomOptionsBtn").css("display", "block");
            $(`.submitCustomOptionsBtn`).css("display", "block");
            $(".recipeBtnDump").append(`<button class="primary button small" data-delete=true id=${btnID} >${btnID}    <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/>
          </svg><button> `);
            $(".recipeBtnDump").append(` `);
            arry_cusineType.push(btnID);
            console.log(`Array for dietary options is: ${arry_cusineType}`);

        } else {
            if (arry_cusineType.includes(btnID)) {
                console.log(`This value: ${btnID} is already in the array`);
            } else if (!arry_cusineType.includes(btnID)) {
                console.log(`This value: ${btnID} isn't in the array yet. Pushing it to array now...`);
                $(".recipeBtnDump").append(`<button class="primary button small" data-delete=true id=${btnID}>${btnID} <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/><button> `);
                $(".recipeBtnDump").append(` `);
                arry_cusineType.push(btnID);
                console.log(`Array for dietary options is: ${arry_cusineType}`);

            }
        }
    })

    $(document).on("click", ".cusineBtnDump button", function () {
        var btnDelID = ($(this).attr("id"));
        console.log(`You want ${btnDelID} to be deleted`);
        var delIndex = arry_cusineType.indexOf(btnDelID);
        if (delIndex > -1) {
            arry_cusineType.splice(delIndex, 1)
        }
        $(`.cusineBtnDump #${btnDelID}`).remove();
        console.log(`Array for cusine options is: ${arry_cusineType}`);
    })
    /* ************************************************************************************************************************************* */
    /* TYPE OF MEAL OPTION BUTTONS */
    $(document).on("click", ".typeOfDishOptionSet button", function () {
        var btnID = ($(this).attr("id"));

        if (arry_typeOfDish.length === 0) {
            $(".resetCustomOptionsBtn").css("display", "block");
            $(`.submitCustomOptionsBtn`).css("display", "block");
            $(".typeOfDishDump").append(`<button class="warning button small" data-delete=true id=${btnID} >${btnID} <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/>
            </svg><button> `);
            $(".typeOfDishDump").append(` `);
            arry_typeOfDish.push(btnID);
            console.log(`Array for type of dish options is: ${arry_typeOfDish}`);


        } else {
            if (arry_typeOfDish.includes(btnID)) {
                console.log(`This value: ${btnID} is already in the array`);
            } else if (!arry_typeOfDish.includes(btnID)) {
                console.log(`This value: ${btnID} isn't in the array yet. Pushing it to array now...`);
                $(".typeOfDishDump").append(`<button class="warning button small" data-delete=true id=${btnID}>${btnID} <svg class="bi bi-x-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"/><button> `);
                $(".typeOfDishDump").append(` `);
                arry_typeOfDish.push(btnID);
                console.log(`Array for type of dish options is: ${arry_typeOfDish}`);
            }
        }
    })

    $(document).on("click", ".typeOfDishDump button", function () {
        var btnDelID = ($(this).attr("id"));
        console.log(`You want ${btnDelID} to be deleted`);
        var delIndex = arry_typeOfDish.indexOf(btnDelID);
        if (delIndex > -1) {
            arry_typeOfDish.splice(delIndex, 1)
        }
        $(`.typeOfDishDump #${btnDelID}`).remove();
        console.log(`Array for type of dish options is now: ${arry_typeOfDish}`);
    })

    /* RESETS ENTIRE FORM */
    $(".resetCustomOptionsBtn").on("click", function () {
        console.log("resetting options builder");
        $(`.recipeBtnDump`).empty();
        arry_dietary.length = 0;
        arry_cusineType.length = 0;
        arry_typeOfDish.length = 0;
        console.log(`Array for dietary options is now : ${arry_dietary}_empty`);
        console.log(`Array for cusine type options is now : ${arry_cusineType}_empty`);
        console.log(`Array for type of dish options is now : ${arry_typeOfDish}_empty`);
    })

    var recipeObj = {
        dietaryOptions: [],
        cusineOptions: [],
        mealTypeOptions: [],
        numberOfRecipes: 0,
        desciption: '',
        URL: ' ',
        calories: 0,
        prepareTime: 0,
        dishType: ''
    };

    var arry_RecipeObjects = [];
    var bookmarkedRecipes = [];
    localStorage.setItem('bookmarkedRecipes', bookmarkedRecipes);

    $(".submitCustomOptionsBtn").on("click", function () {

        recipeObj.dietaryOptions = arry_dietary;
        recipeObj.cusineOptions = arry_cusineType;
        recipeObj.mealTypeOptions = arry_typeOfDish;
        arry_RecipeObjects.push(recipeObj);

        console.log(`CUSINE-TYPE ARRAY: ${arry_cusineType}`);
        console.log(`DIETARY-OPTIONS ARRAY: ${arry_dietary}`);
        console.log(`MEAL-TYPE ARRAY: ${arry_typeOfDish}`);

        console.log(`RECIPE OBJECT:
        
            Entire Object: ${recipeObj};
            Object Dietary Array: ${recipeObj.dietaryOptions};
            Object Cusine Array: ${recipeObj.cusineOptions};
            Object Meal Type Array: ${recipeObj.mealTypeOptions};
        `)

        console.log(`
            ENTIRE ARRAY OF RECIPE OBJECTS: ${arry_RecipeObjects};
            1st OBJECT ELEMENT INSIDE ARRAY OF RECIPE OBJECT's DIETARY OPTIONS: ${arry_RecipeObjects[0].dietaryOptions}
            1st OBJECT ELEMENT INSIDE ARRAY OF RECIPE OBJECT's CUSINE OPTIONS: ${arry_RecipeObjects[0].cusineOptions}
            1st OBJECT ELEMENT INSIDE ARRAY OF RECIPE OBJECT's MEAL TYPE OPTIONS: ${arry_RecipeObjects[0].mealTypeOptions}
        `)
    })





    // END CURLY FOR DOCUMENT READY

})