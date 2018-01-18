// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("6stepthanks1")){
	var dateEnd = $.cookie("6stepthanks1");
}else{
	var dateEnd = returnEndDate(0,0,18);
	$.cookie("6stepthanks1", dateEnd, {expires: 1});
};