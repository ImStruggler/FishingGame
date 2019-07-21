class Score extends Spirit{
  constructor(){
    
    let data=__g_resource['number'].score;
    super({
      img:      data.img,
      sx:       data.frame.x, sy: data.frame.y,
      w:        data.frame.w, h:  data.frame.h,
      
    });

  }
  getNum(num){
    
    let data=__g_resource['number'].score;
    this.img=data.img;    
    this.w=data.frame.w;
    this.h=data.frame.h;
    this.sx=data.frame.x;
    this.sy=data.frame.y+this.h*(9-parseInt(num));
    //console.log('cc',this.sy);
  }

}
