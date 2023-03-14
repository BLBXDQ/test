// JavaScript Document
var music=document.getElementById('music');
var musicico=document.getElementById('musicico');
var tem=true;

function musiccc(){
	if(tem==false){
		music.play();
		tem=true  ;
		document.getElementById('musicico').style.animationPlayState = 'running';
	}else{
		music.pause();
		tem=false;
		document.getElementById('musicico').style.animationPlayState = 'paused';
	}
}