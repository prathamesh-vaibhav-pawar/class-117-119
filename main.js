timer_count = 0
timer_check = ""
drawn_image = ""
answer_holder = ""
score = 0
canvas_image = ""
function Draw_thing(){
    Things_to_draw = ["moon","sweater","pants","triangle","pizza slice","circle","clock","cloud"]
    random_no = Things_to_draw[Math.floor((Math.random()*Things_to_draw.length))]
    document.getElementById("Things").innerHTML =random_no  
    console.log(random_no)
    canvas_image = random_no
    console.log(random_no)
}
function setup(){
    canvas = createCanvas()
    canvas.center()
    background("white")
}
function Check_sketch(){
    timer_count = timer_count+1
    document.getElementById("timer").innerHTML = timer_count
    if(timer_count > 500){
        timer_count = 0
        timer_check = "time over"
        if(canvas_image == random_no){
            drawn_image = "set"
            Things_to_draw = ["moon","sweater","pants","triangle","pizza slice","circle","clock","cloud"]
            random_no = Things_to_draw[Math.floor((Math.random()*Things_to_draw.length))]
            document.getElementById("Things").innerHTML =random_no  
            console.log(random_no)
        }
    }
    if(timer_check == "time over"){
        Update_Canvas()
        timer_check = ""
        Things_to_draw = ["moon","sweater","pants","triangle","pizza slice","circle","clock","cloud"]
        random_no = Things_to_draw[Math.floor((Math.random()*Things_to_draw.length))]
        document.getElementById("Things").innerHTML =random_no  
        console.log(random_no)
    }
}
function Update_Canvas(){
    background("white")
}
function draw(){
    Check_sketch()
}