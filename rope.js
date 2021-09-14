class Rope{
	constructor(body1,body2,x,y){
        this.pointAx = x
        this.pointAy = y
        this.bodyA = body1
        this.bodyB = body2
        var ropeOptions={
            bodyA: this.bodyA,
            bodyB: this.bodyB,
            pointA:{x:this.pointAx, y:this.pointAy},
            pointB:{x:0, y:0},
            length:200,
            stiffness:0.04
            
        }
        this.rope = Constraint.create(ropeOptions)
        World.add(world, this.rope)

    }
    display(){
        var posRoof = this.rope.bodyA.position
        var posBob = this.rope.bodyB.position
        line(posRoof.x+this.pointAx, posRoof.y+this.pointAy, posBob.x, posBob.y);
        
    }







}
