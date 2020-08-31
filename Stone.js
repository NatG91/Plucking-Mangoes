class Stone {

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }

        this.y=y
        this.x=x 
        this.radius=r
        
        this.image=loadImage('images/stone.png');
    
        this.body=Bodies.circle(this.x,this.y,this.radius/2,options);
        World.add(world,this.body);

    }
    display(){
        push();
    imageMode(CENTER);
    
    translate(this.body.position.x,this.body.position.y);
    image(this.image,0,0,this.radius*2,this.radius*2);
    
    pop();
    }
    
    
    
    }


