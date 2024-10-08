var a = "sigma", b = "skibidi";
var nama = prompt("nama?");
var usia = prompt("usia?");
alert(`wilkomen ${nama}, umurnya ${usia}`);
confirm("yakkin?");

var i1 = 	prompt("operand 1"),
	i2 = 	prompt("operand 2");
	o1 =	parseInt(i1)+parseInt(i2);
alert(o1);


var loop = true;
while(loop)	{alert('Ah ah ah');
			loop = confirm('lagi?');}
			
var nRuangan = 7;
var noRuangan = 1;
while(noRuangan<=nRuangan) {
	console.log(`R${noRuangan} 的CCTV好了`)
	noRuangan++
}

var a = 	prompt("alas"),
	t = 	prompt("tinggi"),
	h = 	0.5;
	o1 =	parseInt(a)*parseInt(t)*h;
alert(o1);

var a = 	prompt("alas"),
	t = 	prompt("tinggi"),
	o1 =	parseInt(a)*parseInt(t)/parseInt(2);
alert(o1);

var abortion = "jum'at"
alert(abortion);

var nRuangan = 7;
var noRuangan = 1;
var nRuanganBerfungsi = 5;
for(noRuangan=1; noRuangan<=nRuanganBerfungsi; noRuangan++) {
	if(noRuangan === 4){
	console.log(`R${noRuangan} CCTV Maintanance`)
	}

else{
	console.log(`R${noRuangan} CCTV Berfungsi`)
}
}
for(noRuangan; noRuangan<=nRuangan; noRuangan++) {
	console.log(`R${noRuangan} CCTV Tidak berfungsi`)
}