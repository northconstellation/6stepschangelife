// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("6step2")){
	var dateEnd = $.cookie("6step2");
}else{
	var dateEnd = returnEndDate(0,0,12);
	$.cookie("6step2", dateEnd, {expires: 1});
};