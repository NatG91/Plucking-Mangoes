class Ground {

    constructor(x,y){
        var options={
            isStatic:true,
        }
        
        this.y=y
        this.x=x 
        this.width=1600
        this.height=20
        
    
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
    rectMode(CENTER);
    
    rect(this.x,this.y,this.width,this.height);
    }
    
    
    
    }
