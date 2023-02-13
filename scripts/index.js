function fpv(x){
    var y =  0.7817506148 * x - 2.619386275
    document.getElementById("fpvr").innerHTML = "Result: $" + y +" million" 
}
function spv(){
    var x = parseFloat(document.getElementById("points").value) + parseFloat(document.getElementById("assists").value) + parseFloat(document.getElementById("rb").value)+ parseFloat(document.getElementById("st").value)+ parseFloat(document.getElementById("bk").value)- parseFloat(document.getElementById("to").value)
    var y = 0.977551447 * x -2.227569615
    document.getElementById("spvr").innerHTML = "Result: $" + y +" million" 

}
function rtt(num){
    return Math.round(num/0.001)*0.001

}
function trajectory(){
    var ballheight = document.getElementById("h").value
    var len = document.getElementById("l").value
    var rh = document.getElementById("rh").value
    var heightd = rh - ballheight
    var gravity = 32.17
    var velocity = rtt(len * Math.sqrt(gravity/(len-heightd)))
    var timetaken = rtt(len / (velocity * (Math.sqrt(2)/2)))
    var maxh = (0.5 * Math.pow(velocity,2) *Math.pow((Math.sqrt(2)/2),2) / gravity ) + parseInt(ballheight)
    var force = (velocity / 3.281) * 566 //first convert to meters since answer is in joules
    document.getElementById("trr").innerHTML = "Result: V<sub>o</sub> is " + velocity + "ft/s, the ball's max height is " + maxh + "ft from the ground, force exerted on the ball is " + force + "J, and total time taken until ball goes through rim is "+ timetaken + " seconds." 
}