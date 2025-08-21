// TODO: Optional 1 for event handler
//* internal js use for one click 




// TODO: Optional 2 for event handler

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}




//Todo: option 3: get Element by Id and then set onclik

const btnMakeBlue = document.getElementById("btn-make-blue");
// console.log(btnMakeBlue);

btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};




//Todo: different version

    const btnMakePurple = document.getElementById('btn-make-purple')

    btnMakePurple.onclick = makePurple;

    function makePurple(){
      document.body.style.backgroundColor = 'purple';
    }