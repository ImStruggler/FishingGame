class Shark extends Spirit{
  constructor(type){
    if(type>2 || type<1){
      throw new Error('鱼的类型只能在1-5之间');
    }

    const data=__g_resource['fish'][`shark${type}`];
    super({
      img:      data.img,
      sx:       data.frame.x, sy: data.frame.y,
      w:        data.frame.w, h:  data.frame.h,
      rotation: 90,
      speed:    Math.random()*1.5+0.5
    });

    this.type=type;
    
    this.max_tick=10;
    this.max_fame=6;
  }

  draw(gd){
    this.rotation-=90;

    super.draw(gd);

    this.rotation+=90;
  }
}
