




const  val = document.querySelectorAll('.item');

const monid = document.getElementById("display");

// vider le display ou s'affichera le resultat
document.getElementById("display").innerHTML="" ;


// fonction pour recuperer les valeurs lors du click
for(var i = 0, x = val.length; i < x; i++){
	val[i].addEventListener("click", (e)=> {
		
		let atr= e.target.getAttribute("value");
		
        
		monid.innerHTML+=atr;
		
		console.log(atr);
	
		
	})  
}


// fonction pour nettoyer l'espace de calcul
document.getElementById("clear").onclick= function(){
	
	document.getElementById("display").innerHTML="" ;
	
	
}


//fonction  qui prend en charge le calcul grace à eval()
let egal= document.getElementById("egal");
let messageError="ERROR";

	egal.addEventListener("click", e=>{
		
		try {

			monid.textContent = eval(monid.textContent.toString()) ;
			console.log(monid.textContent);
			
		} catch (error) {

			document.getElementById("display").innerHTML=messageError;

			
		}
		
		
		
	})

//foction pour supprimmer
let result = document.getElementById("display");
    console.log(result.innerText)
 document.getElementById("backspace").onclick=function(){
	
	 let string = result.innerText.toString() ;
     
     
	 result.innerText= string.substring(0, string.length-1) ;
	 
 }

 
//fonction pour lire au clavier 
const myDisplay = document.getElementById("display");
window.addEventListener("keydown", listenKey);


function listenKey(event) {
	var key = event.keyCode;
	


				  
	 switch(key){

		case 8:

	 let string = myDisplay.innerText.toString() ;
     
     
	 myDisplay.innerText= string.substring(0, string.length-1) ;
	 
 
			break;
		

		case 96:
			myDisplay.innerHTML+=0;
			break;

		case 97:
			myDisplay.innerHTML+=1;
			break;
		case 98:
			myDisplay.innerHTML+=2;
			break;
		case 99:
			myDisplay.innerHTML+=3;
			break;
		case 100:
			myDisplay.innerHTML+=4;
			break;
		case 101:
			myDisplay.innerHTML+=5;
			break;

		case 102:
			myDisplay.innerHTML+=6;
			break;
		case 103:
			myDisplay.innerHTML+=7;
			break;
		case 104:
			myDisplay.innerHTML+=8;
			break;
		case 105:
			myDisplay.innerHTML+=9;
			break;
		case 106:
			myDisplay.innerHTML+="*";
			break;
		case 107:
				myDisplay.innerHTML+="+";
				break;
		case 109:
			myDisplay.innerHTML+="-";
			break;
		case 110:
				myDisplay.innerHTML+=".";
				break;
		case 111:
			myDisplay.innerHTML+="/";
			break;

		case 13:

		

		myDisplay.textContent = eval(myDisplay.textContent) ;
			
			
		
				
				break;
		default:
			alert("rien a signaler") ;

	 }

 
/*

CODE ASCII DES CHIFFRES 
0->96
1->97
2->98
3->99
4->100
5->101
6->102
7->103
8->104
9->105
+->107
->109
/->111
*->106
enter->13
backspace->8
point->110





*/


 

 }
