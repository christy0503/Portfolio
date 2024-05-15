let hbgFlg=false;
const hbgBtn = document.querySelector("#hbg-btn");
const hbgBtnAction=hbgBtn.addEventListener("click", function(){
    const hbgBtnDiv=document.querySelector(".btn-line");
    const hbgMenu=document.querySelector(".hbg-menu-body");
    if(hbgFlg==false){
        hbgMenu.classList.add("hbg-menu-body-clicked");
        hbgBtnDiv.classList.add("btn-line-clicked");
        hbgFlg=true;
    }
else{
    hbgMenu.classList.remove("hbg-menu-body-clicked");
    hbgBtnDiv.classList.remove("btn-line-clicked");
    hbgFlg=false;
}
});



