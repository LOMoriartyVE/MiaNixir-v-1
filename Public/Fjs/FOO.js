function ch(x){
    console.log(x)
}
let s1_cont_ex_b_on = document.querySelectorAll(".s1_cont_ex_b_on")
let s1_cont_ex_b_al = document.querySelectorAll(".s1_cont_ex_b_al")
let s1_cont_ex_b_hi = document.querySelectorAll(".s1_cont_ex_b_hi")
let s1_cont_ex_sh = document.querySelectorAll(".s1_cont_ex_sh")
let s1_cont_ex = document.querySelectorAll(".s1_cont_ex")
let s1_cont_pro = document.querySelectorAll(".s1_cont_pro")
let s1_cont_pro_d = document.querySelectorAll(".s1_cont_pro_d")
let sho = document.querySelectorAll(".sho")
// ch(s1_cont_ex_b_on)
// ch(s1_cont_ex_b_al)
ch(s1_cont_ex_sh)
ch(sho)
ch(s1_cont_pro)
// ch(s1_cont_pro_d)
let i ;
s1_cont_ex_b_on.forEach((button,index)=>{
    let x = 0
    button.onclick = function(){
        ch(`Index:${index}`)
        let Length = s1_cont_ex_sh[index].querySelectorAll(".s1_cont_ex_sh_p").length 
            ch(`i1:${i}`)
            ch(`Length1:${Length}`)
            if(i==0){
            x=0
            ch(`X:${x}`)
            ch(`i:${i}`)
        }
        if(i==Length){
            x=0
            ch("Working")
            s1_cont_ex_sh[index].classList.remove(`px${i}`)
        }
        ch(`Length:${Length}`)
        ch(`index:${index}`)
        x+=1
        ch(`x:${x}`)
        i=x
        ch(`i:${i}`)
        if(Length<x){
            x-=1;
            i=x;
            x=0;
            ch(`X:${x}`)
            ch(`i:${i}`)
            s1_cont_ex_sh[index].classList.remove(`px${i}`)
        }
        else{
        s1_cont_ex_sh[index].classList.remove(`px${x-1}`)
        s1_cont_ex_sh[index].classList.add(`px${x}`)
        }
    }
})
s1_cont_ex_b_al.forEach((button,index)=>{
    button.onclick = function(){
        ch(`index:${index}`)
        let Length = s1_cont_ex_sh[index].querySelectorAll(".s1_cont_ex_sh_p").length 
        ch(Length)
        s1_cont_ex_sh[index].classList.remove(`px${i}`)
        i=Length
        s1_cont_ex_sh[index].classList.add(`px${Length}`)
    }
})
s1_cont_ex_b_hi.forEach((button,index)=>{
    button.onclick = function(){
    s1_cont_ex_sh[index].classList.remove(`px${i}`)
    i=0;
}})
