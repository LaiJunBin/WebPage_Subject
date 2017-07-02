var d = document.getElementsByTagName("body")[0];
var value = 0;
var lock=false;
function port(){
		if (value <=1 && lock==false){
			value+=1;
			if(value>=1)
				lock=true;
		}else{
			value-=1;
			if (value<=0)
				lock=false;	
	}
	add(value);
	setTimeout(port,100);
}
function add(value){
	q=Math.abs(value)%2 ;
	var style=document.createElement("style");
	style.append("body{filter:invert("+q+");}");
	d.append(style);
}
port();