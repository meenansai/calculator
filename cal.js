function insert(num){
document.getElementById("textview").value=document.getElementById("textview").value+num;
}

function equal() {
	ex=document.getElementById("textview").value;
	if (ex) {
	document.getElementById("textview").value=eval(ex);
		}	
	}
function c(){
	document.getElementById("textview").value="";
}

function back(){
	exp=document.getElementById("textview").value;
	document.getElementById("textview").value=exp.substring(0,exp.length-1);	
}

function tan(){
	ex=document.getElementById("textview").value;
	if (ex) {
	document.getElementById("textview").value=Math.tan(ex/180*Math.PI);
		}	
}

function sin(){
	ex=document.getElementById("textview").value;
	if (ex) {
	document.getElementById("textview").value=Math.sin(ex/180*Math.PI);
		}	
}

function sqrt(){
	ex=document.getElementById("textview").value;
	if (ex) {
	document.getElementById("textview").value=Math.sqrt(ex);
		}	
}