class Cannon extends Spirit{
	constructor(type){
		if(type>7 || type<1){
			throw new Error('炮弹类型只能在1-7之间');
		}

		let data=__g_resource['cannon'][`cannon${type}`];
		super({
			img: 	data.img,
			sx: 	data.frame.x,
			sy: 	data.frame.y,
			w: 		data.frame.w,
			h: 		data.frame.h
		});

		this.type=type;


	}

	setType(newType){
		if(newType<1 || newType>7){
			throw new Error('炮弹类型在1-7之间');
		}
		let data=__g_resource['cannon'][`cannon${newType}`];
		this.img=data.img;
		this.sx=data.frame.x;
		this.sy=data.frame.y;
		this.w=data.frame.w;
		this.h=data.frame.h;

		this.type=newType;

		//console.log(this.type);
	}
}