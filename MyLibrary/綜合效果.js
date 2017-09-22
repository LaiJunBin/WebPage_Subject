var d = document.getElementsByTagName("body")[0];
	var value = 0;
	var lock=false;
	var type=0;
	var count = 0;
	var rand =Math.floor(((Math.random(1)+1)*4));
	function port(){
		if (type==0){
			if (value <=0 && lock==false){
				value+=1;
				if(value>=1)
					lock=true;
			}else{
				value-=1;
				if (value==0)
					lock=false;	
		}
		add(value);
		}else if (type==1){
			if (value <=5 && lock==false){
			value+=1;
			if(value>=5)
				lock=true;
			}else{
			value-=1;
			if (value==5)
				lock=false;	
			}
		qq(value);
		}else if (type==2){
			if (value <=3 && lock==false){
			value+=1;
			if(value>=3)
				lock=true;
			}else{
			value-=1;
			if (value==3)
				lock=false;	
			}
		bl(value);
		}else if (type==3){
			if (value <=5 && lock==false){
			value+=1;
			if(value>=5)
				lock=true;
			}else{
			value-=1;
			if (value==5)
				lock=false;	
			}
		bl1(value);
		}else if (type==4){
			if (value <=5 && lock==false){
			value+=1;
			if(value>=5)
				lock=true;
			}else{
			value-=1;
			if (value==5)
				lock=false;	
			}
		bl2(value);
		}else if (type==5){
			if (value <=5 && lock==false){
			value+=1;
			if(value>=5)
				lock=true;
			}else{
			value-=1;
			if (value==5)
				lock=false;	
			}
		op(value);
		}
		count+=1
		if (count>=rand){
			count=0;
			rand =Math.floor(((Math.random(1)+1)*4));
			type+=1;
			if (type==2)
				rand=1;
			if (type>=6){
				type=0;
				value=0;
			}
		}
		setTimeout(port,100);
	}
	function add(value){
		q=Math.abs(value) %2 ;
		var style=document.createElement("style");
		style.append("body{filter:invert("+q+");}");
		d.append(style);
	}
	function qq(value){
		var q = Math.floor(((Math.random(1)+1)*30));
		var style=document.createElement("style");
		style.append("body{filter:hue-rotate("+value*q+"deg);}");
		d.append(style);
	}
	function bl(value){
		var style=document.createElement("style");
		style.append("body{filter:blur("+Math.abs(value)+"px);}");
		d.append(style);
	}
	function bl1(value){
		var style=document.createElement("style");
		var q = Math.floor(((Math.random(1)+1)*30));
		style.append("body{filter:opacity(."+Math.abs(value)+" hue-rotate("+value*q+"deg));}");
		d.append(style);
	}
	function bl2(value){
		var style=document.createElement("style");
		var q = value % 5;
		style.append("body{filter:contrast("+Math.abs(q)+");}");
		d.append(style);
	}
	function op(value){
		var style=document.createElement("style");
		var q = value % 5;
		style.append("body{filter:opacity(."+Math.abs(q)+");}");
		d.append(style);
	}
	port();