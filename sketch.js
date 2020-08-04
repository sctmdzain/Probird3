const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24,box25,box26,box27;
//var bird , Shot;
var ground,ground2,ground3;

var score = 0;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    //box1 = new Box(440,230,20,50);
    box2 = new Box(420,230,20,50);
    box3 = new Box(400,230,20,50);
    box4 = new Box(380,230,20,50);
    box5 = new Box(360,230,20,50);
    box6 = new Box(340,230,20,50);
    box7 = new Box(320,230,20,50);
    box8 = new Box(300,230,20,50);
    box9 = new Box(280,230,20,50);
    //box10 = new Box(260,230,20,50);
    //box11 = new Box(440,180,20,50);
   // box12 = new Box(420,180,20,50);
    box13 = new Box(400,180,20,50);
    box14 = new Box(380,180,20,50);
    box15 = new Box(360,180,20,50);
    box16 = new Box(340,180,20,50);
    box17 = new Box(320,180,20,50);
    box18 = new Box(300,180,20,50);
    //box19 = new Box(280,180,20,50);
    //box20 = new Box(260,180,20,50);
    //box21 = new Box(400,130,20,50);
    //box22 = new Box(380,130,20,50);
    box23 = new Box(360,130,20,50);
    box24 = new Box(340,130,20,50);
    //box25 = new Box(320,130,20,50);
    //box26 = new Box(300,130,20,50);
    box27 = new Box(350,80,20,50);
    box100 = new Box(650,80,20,50);
    box200 = new Box(630,80,20,50);
    box300 = new Box(670,80,20,50)
    box400 = new Box(630,30,20,50);
    box500 = new Box(670,30,20,50)
    box600 = new Box(650,10,100,10)

/*bird = Bodies.circle(50,200,20);
World.add(world,bird)

Shot = new Constrain(this.bird,{x:100,y:200});
*/

    ground = new Ground(450,394,900,15);
    ground1 = new Ground(350,250,200,5);
    ground2 = new Ground(650,150,200,5);


}

function draw(){
    background(0);


    stroke("brown");
        textSize(20)
        fill("yellow")
        text("Score  " + score, 800, 50)
    


    Engine.update(engine);
    //box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    //box10.display();
    //box11.display();
   // box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    //box19.display();
    //box20.display();
    //box21.display();
    //box22.display();
    box23.display();
    box24.display();
    //box25.display();
    //box26.display();
    box27.display();
    box100.display();
    box200.display();
    box300.display();
    box400.display();
    box500.display();
    box600.display();

    //bird.dispay();
    //Shot.display();
    
    ground.display();
    ground1.display();
    ground2.display();
    
}

/*function mouseDragged (){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }

    function mouseReleased() {

        Shot.fly();

    }
    
    function keyPressed () {
if(keyCode === 32 ){
    slingshot.attach(bird.body)
}
}(

score(){
    if(this.visiblity<0 && this.visiblity >== 105){
        score++;
    }
}

*/