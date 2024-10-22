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


let input = prompt("hari ke?"), hari = "";

switch(input){
case "1":hari = "Senin";
break;
case "2":
hari = "Selasa";
break;
case "3":
hari = "Rabu";
break;
case "4":
hari = "Kamis";
break;
case "5":
hari = "Jumat";
break;
case "6":
hari = "Sabtu";
break;
case "7":
hari = "Minggu";
break;

default:
alert("NaN");
}

if(hari === ""){alert("NaN")}
else{alert(`hasil adalah ${hari}`)}


var uname = prompt("user?")
var pass = prompt("pass?")

if(uname === "admin"){
if(pass === "1234"){console.log("ok");}
else{console.log("passIsFalse")}}
else{
console.log("unameIsFalse")
}

let s = "";
for(let i = 1;i<5;i++){
	for(let j = 0; j<i ;j++){
		s+="*";
	}
	s+="\n";
}
console.log(s);

let s = "";
for(let i = 5;i>0;i--){
	for(let j = 0; j<i ;j++){
		s+="*";
	}
	s+="\n";
}
console.log(s);

function sayHola(name){return `Hello, ${name}`;}
var name=prompt(`nama?`);
console.log(sayHola(name));

function sqr(n){
	return parseInt(n*n)
}
n = prompt(`n?`);
console.log(sqr(n));
