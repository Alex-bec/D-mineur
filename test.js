    document.addEventListener('click',clique)

function getRandomInt(max) {
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

let grillecachee=creeGrille();
let grillevisible=creeGrille();

console.log(grillecachee);

function clique(e){
	console.log(e)
}	

function init(){
	let place=0
	while (place < 55){
		x= getRandomInt(15)
		y= getRandomInt (15)
		if (grillecachee [y][x]==0){
			grillecachee[y][x]=1
			place+=1
		}
		console.log(grillecachee)
	}
}

	

let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
ctx.lineWidth=1;
ctx.textAlign='center';
ctx.textBaseline = 'middle';
init();
dessine();

function dessine(){
	for (let i=0;i<150;i+=10){
		ctx.moveTo(0,i);
		ctx.lineTo(150,i);
	}	
	for (let i=0;i<150;i+=10){
		ctx.moveTo(i,0);
		ctx.lineTo(i,150);
		
	}	
	ctx.stroke();
	for (let y=0;y<15;y++){
		for (let x=0;x<15;x++){
		if (grillevisible[y][x]==1){
			ctx.fillText("⚑",x*10+5,y*10+5);
		}
		else if (grillevisible[y][x]==
		}
	}	
}
