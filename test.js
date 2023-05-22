document.addEventListener('click',clique)

function getRandomInt (max) {
	return Math.floor(Math.random() * max);
}


function creeGrille(){
	let grille=[];
	for (let j=0;j<15;j++){
		let ligne =[];
		for (let i=0;i<15;i++){
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


place=0
while place < (55) {
	j= getRandomInt(15);
	i= getRandomInt(15);
	if grille [j][i]==0{
	grille [j] [i]=1;
	place+=1;
	}
}

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.lineWidth=1;
ctx.textAlign='center';
ctx.textBaseline = 'middle';

for (let i=0;i<150;i+=10){
	ctx.moveTo(0,i);
	ctx.lineTo(150,i);
	
}	
for (let i=0;i<150;i+=10){
	ctx.moveTo(i,0);
	ctx.lineTo(i,150);
	
}	
