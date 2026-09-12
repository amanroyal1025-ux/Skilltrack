function showLogin() {

    alert(
        "Login Portal\n\n" +
        "Trainee Login\n" +
        "Government Login\n" +
        "Training Provider Login\n\n" +
        "Login system will be connected in the next stage."
    );

}


function startTracking() {

    alert(
        "Welcome to SkillTrack Maharashtra!\n\n" +
        "Trainee employment tracking will be available here."
    );

}


function learnMore() {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

}


document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked");

    });

});
