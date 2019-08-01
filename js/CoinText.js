class CoinText extends Spirit{
	constructor(){

		let data = __g_resource['cointext'].cointext;
		//console.log(data);
		super({
			img: 	data.img,
			sx: 	data.frame.x,
			sy: 	data.frame.y,
			w: 		data.frame.w,
			h: 		data.frame.h
		});
	};

	getNum(num){    	
		let data= __g_resource['cointext'].cointext;
		this.img=data.img;    
		this.w=data.frame.w;
		this.h=data.frame.h;
		if(num==10){
    		this.sx=data.frame.x+(this.w-3)*10;
    	}else{
    		this.sx=data.frame.x+(this.w-3)*(parseInt(num));
    	}
		
		this.sy=data.frame.y;
    //console.log('cc',this.sy);
  }
}