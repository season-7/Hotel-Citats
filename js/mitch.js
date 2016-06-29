var blue = document.getElementById("slider");

var orange = [
    "url('images/beeed.jpg')",
    "url('images/conferencesector.jpg')",
    "url('images/hotel-swimming-pool.jpg')",
    "url('images/theoutsidesea.jpg')",
    "url('images/livingroomsuite.jpg')"
];
var counter = 0;

function slidy() {
    blue.style.backgroundImage = orange[counter];
    counter++;

    if (counter >= orange.length) {
        counter = 0
    }
}
setInterval(slidy, 6000);
