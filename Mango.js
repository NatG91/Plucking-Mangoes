class Mango {

    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
            
        }
        this.y=y
        this.x=x 
        this.radius=r
        
        this.image=loadImage('images/mango.png');
    
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world,this.body);
    }
    display(){
        push();
    imageMode(CENTER);
    ellipseMode(CENTER);
    
    image(this.image,this.x,this.y,this.radius,this.radius);
    
    pop();
    }
    
    
    
    }


