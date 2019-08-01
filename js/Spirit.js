//img
//sx, sy 所获图在原图的定位
//w, h 所获图的宽高
//x, y 图片显示的位置
//rotation 旋转角度
//scale 缩放比例

class Spirit{
  constructor(options){
    this.img=options.img;

    this.sx=options.sx||0;
    this.sy=options.sy||0;

    this.w=options.w||this.img.width;
    this.h=options.h||this.img.height;

    this.x=options.x||0;
    this.y=options.y||0;

    this.rotation=options.rotation||0;
    this.scaleX=options.scaleX||1;
    this.scaleY=options.scaleY||1;

    this.speed=options.speed||0;

    this.tick=0;
    this.max_tick=0;
    this.frame=0;
    this.max_fame=0;
  }

  draw(gd){
    gd.save();

    gd.translate(this.x, this.y);
    gd.rotate(this.rotation*Math.PI/180);
    gd.scale(this.scaleX,this.scaleY);

    //9个参数
    gd.drawImage(
      this.img,
      this.sx, this.sy, this.w, this.h,
      -this.w/2, -this.h/2, this.w, this.h
    );

    gd.restore();
  }

  move(){
    let speed_x=this.speed*Math.sin(this.rotation*Math.PI/180);
    let speed_y=this.speed*Math.cos(this.rotation*Math.PI/180);

    this.x+=speed_x;
    this.y-=speed_y;
  }

  setFrame(frame){
    this.sy=frame*this.h;
  }

  nextFrame(){
    this.tick++;

    if(this.tick==this.max_tick){
      this.tick=0;

      this.frame++;

      if(this.frame==this.max_fame){
        this.frame=0;
      }

      this.setFrame(this.frame);
    }
    
  }

  //非画布内物体，删除
  outOfCanvas(w,h){
    if(
      this.x<0-this.w-200 ||
      this.x>w+this.w+200 ||
      this.h<0-this.h-200 ||
      this.h>h+this.h+200
      )
      return true
    return false

  }

  //碰撞检测
  collTest(catch_flag,fish_flag,spirit2){
    //catch_flag:碰撞方式，1为炮弹，2为渔网
    //fish_flag:鱼的种类，1为小鱼，2为鲨鱼
    //spirit2:碰撞对象，当前为鱼类

    //两个物体的半径
    let r1,r2;
    
    //炮和渔网分别做碰撞检测，各自的碰撞概率不同
    if(catch_flag==1){  //炮弹做检测

      //每个鱼类的碰撞概率不同
      if(fish_flag==2 && spirit2.type==1){
        r1=Math.min(this.w,this.h);
        r2=Math.min(spirit2.w/6,spirit2.h/6);
        
      }else if(fish_flag==2 && spirit2.type==2){
        r1=Math.min(this.w,this.h);
        r2=Math.min(spirit2.w/8,spirit2.h/8);
        
      }else if(fish_flag==1 && spirit2.type>3){
        r1=Math.min(this.w,this.h);
        r2=Math.min(spirit2.w/4,spirit2.h/4);
      }else{
        r1=Math.min(this.w,this.h);
        r2=Math.min(spirit2.w/2,spirit2.h/2);
      }

    }else if(catch_flag==2){  //渔网做检测

      if(fish_flag==2 && spirit2.type==1){
        r1=Math.min(this.w/50,this.h/50);
        r2=Math.min(spirit2.w/100,spirit2.h/100);
        
      }else if(fish_flag==2 && spirit2.type==2){
        r1=Math.min(this.w/100,this.h/100);
        r2=Math.min(spirit2.w/300,spirit2.h/300);
        
      }else if(fish_flag==1 && spirit2.type>3){
        r1=Math.min(this.w/20,this.h/20);
        r2=Math.min(spirit2.w/50,spirit2.h/50);
      }else{
        r1=Math.min(this.w/20,this.h/20);
        r2=Math.min(spirit2.w/25,spirit2.h/25);
      }
      
    }

    //两物体距离
    let dis=Math.sqrt(Math.pow(this.x-spirit2.x,2)+Math.pow(this.y-spirit2.y,2));

    //半径和与距离比较
    return dis<=(r1+r2)
  }
}
