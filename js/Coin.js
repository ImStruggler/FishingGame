class Coin extends Spirit{
	constructor(type){
		if(type<1 || type>2){
			throw new Error('币的类型在1-2之间');
		}

		let data=__g_resource['coin'][`coinAni${type}`];
		super({
			img: 	data.img,
			sx: 	data.frame.x,
			sy: 	data.frame.y,
			w: 		data.frame.w,
			h: 		data.frame.h,
			speed: 	10
		});

		this.type=type;

		this.max_tick=2;
		this.max_frame=10;

	}

	getRotation(x,y){
		let gr_x=this.x-x;
		let gr_y=this.y-y;
		this.rotation=Math.atan2(gr_y,gr_x)*180/Math.PI-90;
		return this.rotation
	}
}