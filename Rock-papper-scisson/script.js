const rock = document.querySelector(".rock");
const papper = document.querySelector(".papper");
const scisson = document.querySelector(".scisson");
const userImg = document.querySelector(".userImg");
const comImg = document.querySelector(".comImg");
const score = document.querySelector(".score");
const storeScore = document.querySelector(".storeScore");
const reset = document.querySelector(".reset");


function computerpick(){
	let randomNumber = Math.floor(Math.random() * 3);
	const move = ["Rock","Papper","Scisson"]
	return move[randomNumber];
}



let result;
let win = 0 ,lost = 0 , tie = 0 ;
reset.addEventListener("click",()=>{
	win = 0 ,lost = 0 , tie = 0 ;
	userImg.src = './pow.png';
	comImg.src = './pow.png';
	result = '';
	compar();
})
// console.log(computerPick);
function compar(userPick){
	computerpick();
	let computerPick = computerpick();
	console.log(userPick);
	if (userPick === 'Rock'){
		userImg.src = './rock.png'
		if (computerPick === 'Rock'){
			result = 'Tie';
			tie ++;
			comImg.src = './rock.png'
		}else if (computerPick === 'Papper'){
			result = 'Lost';
			lost ++;
			comImg.src = './papper.png'
		}else if (computerPick === 'Scisson'){
			result = "Win";
			win ++;
			comImg.src = './scisson.png';
		}
	}else if (userPick === 'Papper'){
		userImg.src = './papper.png'
		if (computerPick === 'Rock'){
			result = 'Win';
			win ++;
			comImg.src = './rock.png'
		}else if (computerPick === 'Papper'){
			result = 'Tie';
			tie ++;
			comImg.src = './papper.png'
		}else if (computerPick === 'Scisson'){
			result = "Lost";
			lost ++;
			comImg.src = './scisson.png';
		}
	}else if (userPick === 'Scisson'){
		userImg.src = './scisson.png'
		if (computerPick === 'Rock'){
			result = 'Lost';
			lost ++;
			comImg.src = './rock.png'
		}else if (computerPick === 'Papper'){
			result = 'Win';
			win ++;
			comImg.src = './papper.png'
		}else if (computerPick === 'Scisson'){
			result = "Tie";
			tie ++;
			comImg.src = './scisson.png';
		}
	}
	score.innerHTML = `You : ${result}`;
	storeScore.innerHTML = `Win : ${win} , Lost : ${lost} , Tie : ${tie}`

}




