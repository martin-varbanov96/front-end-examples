$(document).ready(function(){

	var undefinedStatementButtonCLicked = 0;
	var addArraysButtonClicked = 0;
	var addArrayObjectButtonClicked = 0;
	var addObjectArrayButtonClicked = 0;
	var addObjectsButtonClicked = 0;

	$("#undefinedStatement").click(function(){
		if(undefinedStatementButtonCLicked == 0 ){
			undefinedStatementButtonCLicked = 1;
			var foo = function(){
				return typeof null === "undefined"
			}
			for(var i = 0; i <= 10000; i++){
				if(foo()){
					incrementDiv("undefinedStatementOutputTrue");
				}else{
					incrementDiv("undefinedStatementOutputFalse");
				}
			} 
		}
	});


	$("#addArraysButton").click(function(){
		if(addArraysButtonClicked == 0){
			addArraysButtonClicked = 1;
			function addArray(){
				return [] + [];
			}
			$("#addArraysoitput").append("\"\"");
		}
	});

	$("#addArrayObjectButton").click(function(){
		if(addArrayObjectButtonClicked == 0){
			addArrayObjectButtonClicked = 1;
			function addArray(){
				return [] + {};
			}
			$("#addArrayObjectitput").append(addArray());
		}
	});

	$("#addObjectArrayButton").click(function(){
		if(!addObjectArrayButtonClicked){
			addObjectArrayButtonClicked++;
			function addObjectArray(){
				return {} + [];
			}
			$("#addObjectArrayitput").append(addObjectArray() + ", Why not try it in the console");
		}
	});

	$("#addObjectsButton").click(function(){
		if(!addObjectsButtonClicked){
			addObjectsButton++;
			function addObjectArray(){
				return {} + {};
			}
			$("#addObjectsitput").append(addObjectArray());
		}
	});

	$("button").hover(function(){
	    $(this).filter(':not(:animated)').animate({ width: "200px" });
	}, function() {
	    $(this).animate({ width: "100px" });	
	});
});


function incrementDiv(idVal) {
	var el = $('#' + idVal);
	var num = parseInt(el.text());
	el.text(num+1);
}