$(document).ready(function(){

    $("#btn1").click(function(){
        /*var inputfield = $("#overskrift").attr('value'); */
    var verify = confirm("ER DU SIKKER PÅ, AT DU VIL OPRETTE EN NY BOX?")
    if(verify === true) {
        $("<div></div>").addClass("issueBox").appendTo(".box-container");
    }  
        
    });
    
});
$(document).ready(function(){
 $("#btn2").click(function() {
    var overSkrift = $("#Overskrift").val();
	var problem = $("#Problem").val();	
    var solution = $("#Solution").val();
    $("<h3>"+overSkrift+"</h3>").last().appendTo(".issueBox:last");
    $("<p>"+problem+"</p>").last().appendTo(".issueBox:last");
    $("<p>"+solution+"</p>").last().appendTo(".issueBox:last");
    $("textarea").val(" ");
    
    });
    
    
 });
 
 $(document).ready(function(){
 	$('.box-container').on('click','div',function(){ 
           	
   		 $(this).toggleClass("boxBorder");
         
          
         
       	 
		 
	});
    
    
 	$("#slet").click(function(){
    if (!$("div").hasClass("boxBorder")) {
        alert("Du har ikke valgt nogen box");
    }
    else {
    var verify = confirm("ER DU SIKKER PÅ, AT DU VIL SLETTE DE UDVALGTE BOKSE?")
    if(verify === true) { 	
    	 $("div").remove(".boxBorder");
     }
    }   	
         
});
    
   
    
});

$(document).ready(function(){
    $("#toggleTool").click(function() {
        $(".leftSidebar , .box-container").toggleClass("toggleOpacity");
        $(".btnTool > i").toggleClass("rotateAnimate");
        $(".buildTool").toggleClass("buildToolActive");
    }


);
});
 
/*
 	$(document).mouseup(function(event) {

   	var clickedElement = $(event.target);

    if (clickedElement.is(".contain")) {
    
    $(clickedElement).css('border', '4px solid red');
 	$("#slet").click(function() {
    	$(clickedElement).remove();
 
 });
 };
 });
 */
