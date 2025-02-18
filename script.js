/* Designed By Mike_Baneshi 
https://github.com/MikeBaneshi
*/

const rolldice=document.getElementById("rolldice");
const diceresult=document.getElementById("diceresult");
const diceImages=document.getElementById("diceImages");


function rolling() {

const diceNumber=document.getElementById("diceNumber").value;

let values=[];
let images=[];

    for (let i=0 ; i < diceNumber ; i++ ){
        const dice=Math.floor(Math.random()*6)+1;        
        values.push(dice);
        images.push(`<img src="${dice}.png" alt="Dice No.${dice}">`);
        
    }
    diceresult.innerHTML=`شماره تاس ها: ${values.join(`, `)}`;
    diceImages.innerHTML=images.join(` `);

}    

rolldice.addEventListener("click",rolling);

