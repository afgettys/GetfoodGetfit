$(document).ready(function() {
    $(document).foundation();

var compoundiso = $('<a href="#">Click here for examples and demos</a>')
var backarrow = $("<i id='backarrow' class='fas fa-arrow-left'></i>");




$('#cardio').click(function(){
    $('body').css("background-image", "url(assets/cardio.png)");
    $('body').css("background-repeat", "no-repeat");
    
    $('.container').css("visibility", "visible");
    $('.container').empty();
    $('.container').css("height", "670px");
    $('.container').append("Cardio exercise simply means that you're doing a rhythmic activity that raises your heart rate into your target heart rate zone.  This target zone is where one burns the most fat and calories.<br><strong>Some benefits of cardio include:</strong><ul><li>lowers risk of heart disease</li><li>lowers blood pressure</li><li>helps regulate blood sugar</li><li>reduces asthma symptoms</li><li>reduces chronic pain</li><li>aids sleep</li><li>regulates weight</li><li>stregthens immune system</li></ul><strong>Choosing the best form of cardio for you</strong><br>There is no one cardio exercise that is superior to all of the rest.  First, think about what is accessible to you.  If you are a member of a gym, you have access to many more options, i.e., stationary bikes, ellipticals, treadmills, rowing machines, stair climbers, and more!  If you have a history of joint pain, you want to pick an exercise that is low impact.  Swimming and jumping rope are great examples- virtually no impact on the joints while swimming; jumping rope only requires jumping less than an inch off the ground.");
});

$('#yoga').click(function(){
    $('body').css("background-image", "url(assets/sunset.jpg)");
    $('body').css("background-repeat", "no-repeat");
    $('.container').css("visibility", "visible");
    $('.container').empty();
    $('.container').css("height", "420px");
    $('.container').append("The practice of yoga dates back to around 3000 B.C.  It has evolved into a posture-based form of physical fitness.  Besides the many physical benefits yoga offers, it can also be a great tool for increasing overall mental health.<br><br><strong>Some physical benefits of yoga include:</strong><ul><li>increased flexibility</li><li>increased muscle strength and tone</li><li>improved respiration, energy, and vitality</li><li>maintaining a balanced metabolism</li><li>weight reduction</li><li>cardio and circulatory health</li><li>improved athletic performance</li><li>protection from injury</li></ul>")
});

$('#weights').click(function(){
    $('body').css("background-image", "url(assets/weight.jpg)");
    
    $('body').css("background-repeat", "repeat");
    $('.container').css("visibility", "visible");
    $('.container').empty();
    $('.container').css("height", "710px");
    $('.container').append("Contrary to popular belief, weight lifting isn’t just about bulking up and building muscle mass.  Although lifting weights is great for gaining muscle, the benefits of it go way beyond that.  At a heavy weight and low repetitions, strength training can improve one’s overall physical and mental health.  At high repetitions, lifting weights promotes hypertrophy and can even be a form of cardio.  It is also amazing for toning up and bettering one’s aesthetics.<br><strong>Some benefits of weight lifting include:</strong><ul><li>keeping your bones strong and healthy</li><li>boosting metabolism and fat loss</li><li>regulating insulin and lowering inflammation</li><li>improving posture, sleep, mood, and energy levels</li><improving strengh and endurance</li><li>improving balance and reducing the risk of falls</li></ul><strong>Compound vs. Isolation Movements</strong><br>There are two main movements when it comes to weight lifting.  Compound movements are exercises that work multiple muscle groups at the same time.  Isolation movements target a specific muscle.  If you are doing a split of both in your workout, you typically want to start with the compound movements and finish with the isolations to burn out specific muscles at the end. ");
    $('.container').append(compoundiso);
});



$(compoundiso).click(function(){
    console.log('hello');
    // $('.row').css("height", "420%");
    $('.container').remove();
    $('.sidebar').remove();
    $('body').css("background-repeat", "repeat");
    $('footer').css("display", "none");
    $('body').append(backarrow);
    $('body').append("<div class='compoundmovements'>Compound Movements</div>");
    $('body').append("<div class='squats'><strong>Squats:</strong>  One of the best leg workouts.  Engages your quads, hamstrings, glutes, and core.  Keep the weight on your heels, make sure core is tight, and do not let your knees go past your toes. <iframe width='560' height='315' src='https://www.youtube.com/embed/MVMNk0HiTMg' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>")
    $('body').append("<div class='bench'><strong>Bench Press:</strong>  One of the best upper body exercises.  Engages your chest, triceps, and shoulders. <iframe width='560' height='315' src='https://www.youtube.com/embed/4aVy2Xj6wYs' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
    $('body').append('<div class="deadlift"><strong>Deadlift:</strong>  A full body workout.  Engages your back, legs, and arms.  Note that deadlifts are one of the riskiest exercises one can do.  Make sure to not overload the weight and remember to focus on strict form! <iframe width="560" height="315" src="https://www.youtube.com/embed/DNJya2CBQJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    $('body').append("<div class='isomovements'>Isolation Movements</div>");
    $('body').append("<div class='curl'><strong>Bicep Curls:</strong>  Can be done with dumbbells, barbells, or resistance bands. <iframe width='560' height='315' src='https://www.youtube.com/embed/ykJmrZ5v0Oo' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>")
    $('body').append('<div class="tricep"><strong>Tricep Extension:</strong>  Can be done with dumbbells, barbells, or resistance bands. <iframe width="560" height="315" src="https://www.youtube.com/embed/_gsUck-7M74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')


});

$(backarrow).click(function(){
    window.location.href= "exercise.html";

});


// JS for responsive nav bar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('top-bar-right')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


});


