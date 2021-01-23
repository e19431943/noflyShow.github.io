
window.onload =function(){
    menuControl();
    tabSelect();
}

var asideFlag = true;
function menuControl(){
    const menu =document.getElementById("menuControl");
    
    menu.addEventListener("click",function()
    {
            let aside =document.getElementById("asideContainer");
            let mini =document.getElementById("miniContainer");
            let content =document.getElementById("contentContainer");
            let main = document.getElementById("mainContainer");
            
            asideFlag =!asideFlag;
            if(asideFlag)
            {
                aside.style.setProperty("display","block");
                //
                mini.style.setProperty("opacity",0);
                mini.style.setProperty("width",0+"px"); 
                //
                /*content.style.width ="calc(100vw - 240px)";*///另外一種寫法
                content.style.setProperty("width",`calc(100vw - 0px)`);
                //
                main.style.width = `calc(100vw - 240px)`;
                
            }
            else
            {
                aside.style.setProperty("display","none");
                mini.style.setProperty("opacity",1);
                mini.style.setProperty("width",72+"px");  
                content.style.width=`calc(100vw - 72px)`;
                main.style.width=`calc(100vw - 72px)`;
                
            }
           
    });
}
function tabSelect(){
    const tabs =document.getElementsByClassName("select-item");
    for(let i = 0 ;i<tabs.length;i++)
    {
        tabs[i].addEventListener("click",function()
        {
            let toolBar = document.getElementById("toolBar");
            console.log("left",this.offsetLeft);
            console.log("width",this.offsetWidth);
            toolBar.style.setProperty("width",this.offsetWidth+"px");
            toolBar.style.setProperty("left",this.offsetLeft+"px");

        });
    }



}