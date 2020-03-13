    console.log("we are connected!!!!");

    let btn = document.querySelector("#button"),
        nav = document.querySelector("#mainNav"),
        closeBtn = document.querySelector(".closeBtn");

    btn.addEventListener("click", function() {
        // console.log("this worked");
        nav.classList.toggle("active");

    });

    closeBtn.addEventListener("click", function(){
        nav.classList.toggle("active");

    });