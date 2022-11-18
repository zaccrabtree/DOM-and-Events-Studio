// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    //get data you need
    //define the objects you need to access and the variables you will use
const takeoffbutton = document.getElementById("takeoff");
const landingbutton = document.getElementById("landing");
    //put content on page to be displayed immediately
    //listen for events and interact with user (declare any additional objects that don't need
    //to be in scope for other listeners)
    takeoffbutton.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    });
    
    landingbutton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });
    
    //Add utility functions at the end

})