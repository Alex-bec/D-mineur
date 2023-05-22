document.addEventListener('click',clique)



function creeGrille(){
	let grille=[];
	for (let j=0;j<30;j++){
		let ligne =[];
		for (let i=0;i<30;i++){
			ligne.push(0);
		}	
		grille.push(ligne);
	}	
	return grille;
	}	

let grille=creeGrille();

console.log(grille);

function clique(e){
	console.log(e)
}	

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.lineWidth=1;
ctx.textAlign='center';
ctx.textBaseline = 'middle';

for (let i=0;i<300;i+=10){
	ctx.moveTo(0,i);
	ctx.lineTo(300,i);
	
}	
for (let i=0;i<300;i+=10){
	ctx.moveTo(i,0);
	ctx.lineTo(i,300);
	
}	
ctx.stroke();
ctx.fillText("⚑",15,75);

