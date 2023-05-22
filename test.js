document.addEventListener('click',clique)



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

place=0
while place<(55) {
	i= get random int(15);
	j= get random int(15);
}

if grille [i][j]==0 {
	grille [i] [j]=1
	place+=1
}
