$(document).ready(function () {
    var checkerVar;
    var storedRecipes;
if (localStorage.length < 1){

    console.log("Nothing in local storage");
  

} else {
    checkerVar = (localStorage.getItem("LS_ObjArray"));
    storedRecipes = JSON.parse(checkerVar);
    console.log(storedRecipes);


    if (storedRecipes.length < 1 ) {
        console.log("No recipes in locker!");
        $("#recipeEmpty").css("display", "block")
        $(".emptyMsg").css("display", "block")
    } else {

        for (var i = 0; i < storedRecipes.length; i++) {
            r_img = storedRecipes[i].recipe.image;
            /*  https_index = r_img.substring(r_img.indexOf("https"));
             https_index = https_index.slice(0, -1); */
            $(".recipeDump").append(` 
                <div class="${i}">
                <img class="recipe-img float-left" src="
                ${r_img}" alt="Generated Recipe Image" data-missing-img = "assets/missingImgPlaceholder.png">
                <h2 class="top-right recipe-title">${storedRecipes[i].recipe.label}</h2> <br>
                <strong> Recipe URL: </strong> <p> <a href="#" class = "recipe-URL"> ${storedRecipes[i].recipe.url}   </a> </p>
                <strong> Meal-Type: </strong> <p class = "recipe-mealType"> ${storedRecipes[i].recipe.mealType} </p>
                <strong> Dish Type: </strong> <p class = "recipe-dishType">${storedRecipes[i].recipe.dishType}</p> <br>
                <strong> Cusine: </strong> <p class = "recipe-cuisineType">${storedRecipes[i].recipe.cuisineType} </p>
                <strong> Calories: </strong> <p class = "recipe-calories">${Math.round(parseInt(storedRecipes[i].recipe.calories))} </p>
                <strong> Time to Prepare: </strong> <p class = "recipe-prepareTime">${storedRecipes[i].recipe.totalTime}</p>
                <strong>Ingredients Needed:</strong> <p class = "recipe-ingredients">${storedRecipes[i].recipe.ingredientLines}</p>
                <strong>Health Labels:</strong> <p class = "recipe-healthLabels">${storedRecipes[i].recipe.healthLabels}</p>
                <strong>Health Caution Labels:</strong> <p class = "recipe-healthCautionLabels">${storedRecipes[i].recipe.cautions}</p>
                
                <button type="submit" value="Tag-Recipe" id="lockerDelBtn${i}" class="text-center button alert lockerDelBtn">Delete Recipe <svg class="bi bi-x-octagon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.54.146A.5.5 0 014.893 0h6.214a.5.5 0 01.353.146l4.394 4.394a.5.5 0 01.146.353v6.214a.5.5 0 01-.146.353l-4.394 4.394a.5.5 0 01-.353.146H4.893a.5.5 0 01-.353-.146L.146 11.46A.5.5 0 010 11.107V4.893a.5.5 0 01.146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
              </svg> </button> <br> <hr>
            </div> `);
        }

    }


    $(document).on("click", ".lockerDelBtn", function () {
        console.log("you pressed me");

  
        var index = parseInt($(this).attr("id").substring(12));
        console.log(`You pressed ${index} delete btn.`);
        console.log(storedRecipes);
        storedRecipes.splice(index, 1);
        console.log(storedRecipes);
        
        localStorage.setItem("LS_ObjArray", JSON.stringify(storedRecipes));

        $(`.recipeDump .${index}`).remove();
         
           
    })

}
 

    
















})