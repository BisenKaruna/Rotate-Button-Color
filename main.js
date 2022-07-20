let all_btn = document.querySelector('.container').getElementsByTagName('button');
console.log(all_btn);
let copyAllButton = [];
for(let i=0; i<all_btn.length;i++){
    copyAllButton.push(all_btn[i].classList[1]);
}
console.log(copyAllButton);
function changeColor(){
    let choices = ['green','red','yellow'];
    for(let i=0; i<all_btn.length;i++){
        //will remove all the button class name
    all_btn[i].classList.remove(all_btn[i].classList[1]); 
    let randomNum = Math.floor(Math.random()*3);
    all_btn[i].classList.add(choices[randomNum]);
    }
}

