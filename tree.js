class Tree
{
    constructor(x,y)
    {
        var opt={isStatic:true}
        
        this.body=Bodies.rectangle(x,y,50,20,opt);
        this.image=loadImage("images/tree.png");
        World .add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y);
        imageMode (CENTER);
        image (this.image,0,-20,300,400);
    }
}