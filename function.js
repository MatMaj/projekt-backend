function walec(){
	r=document.getElementById("promien").value;
	r/=1;
	h=document.getElementById("wysokosc").value;
	h/=1;
	v=Math.PI*Math.pow(r, 2)*h;
	document.getElementById("wynik").innerHTML = v;
}
	