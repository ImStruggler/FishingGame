class Bullet extends Spirit{
	constructor(type){
		if(type>7 || type<1){
			throw Error('子弹类型在1-7之间');
		}
		

		let data=__g_resource['bullet'][`bullet${type}`];
		super({
			img: 	data.img,
			sx: 	data.frame.x,
			sy: 	data.frame.y,
			w: 		data.frame.w,
			h: 		data.frame.h,
		});

		this.type = type;

		this.speed = 10;
	}

}