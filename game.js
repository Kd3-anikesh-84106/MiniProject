let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")

let newGame = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg")
let turn0 = true;
let count =0;


const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
    

    boxes.forEach((box) => {
     
        box.addEventListener("click",()=>{
            console.log("box was clicked")
            if(turn0===true){
                box.innerText ="O";
                turn0=false;
            }
            else{
                box.innerText ="X";
                turn0=true;
                
            }
            box.disabled = true;
            count++;
            checkWinner();
            console.log(count);

            if(count===9)
            {
                if(!msgContainer.classList.contains("hide"))
                {
                    return;
                }
                msg.innerText=`Attempts Exhausted! Match Draw`
           
                msgContainer.classList.remove("hide")
            }
        })
    }) 

        const disableBoxes =() =>{
            for(let box of boxes){
                box.disabled = true;
            }
        }
            const enableBoxes =() =>{
                for(let box of boxes){
                    box.disabled = false;
                    box.innerText="";
                }

        }

        const resetGame =() =>{
            turn0 = true;
            count =0;
            enableBoxes();
            msgContainer.classList.add("hide")

        }
        const showWinner=(winner)=>{
          
            msg.innerText=`Congratulation, Winner is ${winner}`
           
            msgContainer.classList.remove("hide")
            disableBoxes();
            
        }
        let checkWinner=()=>{
            for(let pattern of winPatterns)
            {
    
                let pos1 = boxes[pattern[0]].innerText; //checks all win pattern in 0th index i.e [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
                let pos2 = boxes[pattern[1]].innerText;//checks all win pattern in 1st index i.e [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],
                let pos3 = boxes[pattern[2]].innerText;//checks all pattern win in 2nd index i.e [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],

                if(pos1 !="" && pos2 !="" && pos3 !="")
                {
                    if(pos1 === pos2 && pos2 === pos3)
                    {
                        console.log("winner",pos3)
                        showWinner(pos3);
                        return;
                    }
                    

                }
            }
        }
   
        
        resetbtn.addEventListener("click",resetGame)
        newGame.addEventListener("click",resetGame)