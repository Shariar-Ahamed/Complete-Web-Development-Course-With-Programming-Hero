console.log("handler file added");

//Todo: Clik and update text:

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log("btn");
    const pageTitle = document.getElementById("page-title");
    // console.log(pageTitle);

    pageTitle.innerText = "Uodated text title text";
  });



document.getElementById("btn-ligon")
    .addEventListener("click",function (){
        const userInfoEl = document.getElementById("user-info");
        userInfoEl.innerText = "User login In sucessfully";
});


//----------------


//Todo: Update input value

    //1. Set enevt listener
    document.getElementById('btn-update')
    .addEventListener('click', function(){
        console.log('clik xxxx')

        //2. Take value from >input field<
        const nameInput = document.getElementById('input-name-fild');
        console.log(nameInput);
        const name = nameInput.value;
        console.log('name', name);

        //  Show in >p< tag
        const nameDisplay = document.getElementById('name');
        nameDisplay.innerText = name;
    })
