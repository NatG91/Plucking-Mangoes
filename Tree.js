class Tree {

constructor(x,y){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.y=y
    this.x=x 
    this.width=600
    this.height=600 
    this.image=loadImage('images/tree.png');

    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
}
display(){
imageMode(CENTER);

image(this.image,this.x,this.y,this.width,this.height);
}



}