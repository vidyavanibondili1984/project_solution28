class Launcher
{
    constructor(bodyA,pointB)
    {
        var opt={bodyA:bodyA,
                 pointB:pointB,
                stiffness:0.004,
                length:1}
                this.bodyA=bodyA;
                this.pointB=pointB;
                this.launcher=Constraint.create(opt);
                World. add(world,this.launcher);
    }
    fly()
    {
        this.launcher.bodyA=null;
    }
    attach(body)
    {
        this.launcher.bodyA=body;
    }
    display()
    {
        if(this.launcher.bodyA){
        var p1=this.bodyA.position;
        var p2=this.pointB;
        line (p1.x,p1.y,p2.x,p2.y);
    }
}
}