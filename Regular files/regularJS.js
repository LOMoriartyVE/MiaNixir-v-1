let logo_icon = document.getElementById("logo_icon");
function ch(x){
    console.log(x);

}
logo_icon.onclick = function(){
    location.href = "index.html";
}

let bo4_item = document.querySelectorAll(".bo4_item")
let bo4_container2 = document.querySelectorAll(".bo4_container2")
let bo4_container2_li = document.querySelectorAll(".bo4_container2 li")
// ch(bo4_item)
// ch(bo4_container2)

bo4_item.forEach(function(ele,index){
    ele.onclick = function(){
        bo4_item.forEach(function(ele){
            ele.classList.remove("Active_item")
        })
        bo4_container2.forEach(function(ele){
            ele.classList.remove("Active_cont")
            
        })
        bo4_container2_li.forEach(function(ele_li){
            ele_li.classList.remove("bo4_container2_li")
        })
        ele.classList.add("Active_item")
        bo4_container2[index].classList.add("Active_cont")  
    }
})

