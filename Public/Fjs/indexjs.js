function ch(x){
    console.log(x);

}

// function ErrorPage(){
//     location.href = "/Regular files/Error/error404.html"
// }
let s1_d_d_d= document.querySelectorAll(".s1_d_d_d")
let alter= document.querySelectorAll(".alter")
s1_d_d_d.forEach((i,index)=>{
    i.addEventListener("mouseenter",()=>{
        alter.forEach((u)=>{
            u.classList.remove("sh_actve")
        })
        alter[index].classList.add("sh_actve")
    })
    i.addEventListener("mouseleave",()=>{
        alter.forEach((u)=>{
            u.classList.remove("sh_actve")
        })
    })
})


//matlab urls
let item_bo1_b = document.getElementsByClassName("item_bo1_b")
ch(item_bo1_b)
for(let u = 0 ; u < item_bo1_b.length ; u++){
    item_bo1_b[u].onclick = function(){
        switch (u) {
            case 0: location.href = "/maps/Matlab/Matlab-basics/Matlab-basics.html";break;
            case 1: location.href = "/maps/Matlab/Matlab-premium/Matlab-premium.html";break;
            case 2: location.href = "/maps/Matlab/Matlab-ultra/Matlab-ultra.html";break;
        }
    }
}
// choose
let item_bo4 = document.getElementsByClassName("item_bo4")
ch(item_bo4)
let file_act = true;
for(let u = 0 ; u < item_bo4.length ; u++){
    item_bo4[u].onclick = function(){ 
        switch (u) {
        case 0: l = Petroleum_Geology.length;create(0);break;
        case 1: l = Numerical_analyses.length;create(1);break;
        case 2: l = Principles_of_reservoir_engineering.length;create(2);break;
        case 3: l = Engineering_Statistics.length;create(3);break;
        case 4: l = Gravitational_and_magnetic_screening.length;create(4);break;
        case 5: l = Matlab.length;create(5);break;
        case 6: l = Thermodynamics.length;create(6);break;
        case 7: l = Geometric_Area.length;create(7);break;
        case 8: l = Fluid_Mechanics.length;create(8);break;
        case 9: l = Material_resistance.length;create(9);break;
        case 10: l = Engineering_Analytics.length;create(10);break;
    }
    }
}
let bo4_2_container = document.getElementById("tp");
let Fluid_Mechanics = ["Fundamentals of Fluid Mechanics 7th Edit","Lecture 1","Lecture 1 Examples","Lecture 2","Lecture 2 Examples","Lecture 3","Lecture 3 Examples","Lecture 4","Lecture 4 Examples","Lecture 5","Lecture 5 Examples","Lecture 6","Lecture 6 Examples","Lecture 7","Lecture 7 Examples"]
let Petroleum_Geology = ["Lecture 1","Lecture 2","Lecture 3","Lecture 4","Lecture 5","Lecture 6","Lecture 7","Lecture 8","Lecture 9"]
let Numerical_analyses = ["Chapter 1","Chapter 2","Numerical Mathematics and computing"]
let Principles_of_reservoir_engineering = ["Fundamentals of Petroleum Refining","Fundamentals Of Petroleum Reservoir. Eng","Chapter 1 summary","Chater 1 qu. answers"]
let Engineering_Statistics = ["Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Engineering statistics for presentation"]
let Gravitational_and_magnetic_screening = ["GravityMagnetic Prospecting"]
let Matlab = ["lic 1 - 4","lic 5","lic 6 - 7","lic 8","lic 9","lic 10"]
let Thermodynamics = ["NoFiles yet"]
let Geometric_Area = ["NoFiles yet"]
let Material_resistance = ["NoFiles yet"]
let Engineering_Analytics = ["NoFiles yet"]

let Fluid_Mechanics2 = ["https://www.mediafire.com/file/l5np12ptivoatek/Fundamentals_of_Fluid_Mechanics_7th_Edit.pdf/file","https://www.mediafire.com/file/o76z8wqyxzx2xbn/Lecture_1.pdf/file","https://www.mediafire.com/file/f1o5ze5azfzbsky/Lecture_1_Examples.pdf/file","https://www.mediafire.com/file/cmtcr7ddn9ppbww/Lecture_2.pdf/file","https://www.mediafire.com/file/sqmq6qgm3ymftt7/Lecture_2_Examples.pdf/file","https://www.mediafire.com/file/x5drqumeya8wr6s/Lecture_3.pdf/file","https://www.mediafire.com/file/y3gecz6ydxia0qf/Lecture_3_Examples.pdf/file","https://www.mediafire.com/file/57by5yrrlhrjt2h/Lecture_4.pdf/file","https://www.mediafire.com/file/qtqkvlkdpqi9i05/Lecture_4_Examples.pdf/file","https://www.mediafire.com/file/k5x70ew4e1xnlgr/Lecture_5.pdf/file","https://www.mediafire.com/file/wi5vuho84lt6err/Lecture_5_Examples.pdf/file","https://www.mediafire.com/file/bnjxclpiiikf2ux/Lecture_6.pdf/file","https://www.mediafire.com/file/vbqq7je5ybgl9xs/Lecture_6_Examples.pdf/file","https://www.mediafire.com/file/nibwxqr7tpfyl3o/Lecture_7.pdf/file","https://www.mediafire.com/file/0wdiuz0iznuit0l/Lecture_7_Examples.pdf/file"]
let Petroleum_Geology2 = ["Lecture 1","Lecture 2","Lecture 3","Lecture 4","Lecture 5","Lecture 6","Lecture 7","Lecture 8","Lecture 9"]
let Numerical_analyses2 = ["Chapter 1","Chapter 2","Numerical Mathematics and computing"]
let Principles_of_reservoir_engineering2 = ["https://www.mediafire.com/file/e5amvyy9ft4vff2/Fundamentals_of_Petroleum_Refining.pdf/file","https://www.mediafire.com/file/rakjratf8ylnlh3/Fundamentals_Of_Petroleum_Reservoir._Eng..pdf/file","https://www.mediafire.com/file/6shh8a8xpfdcli1/Chapter_one_summary.pdf/file","https://www.mediafire.com/file/rk4yrzt44cwir5y/Chater_one_qu._answers.pdf/file"]
let Engineering_Statistics2 = ["Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Engineering statistics for presentation"]
let Gravitational_and_magnetic_screening2 = ["GravityMagnetic Prospecting"]
let Matlab2 = ["lic 1 - 4","lic 5","lic 6 - 7","lic 8","lic 9","lic 10"]
let Thermodynamics2 = ["NoFiles yet"]
let Geometric_Area2 = ["NoFiles yet"]
let Material_resistance2 = ["NoFiles yet"]
let Engineering_Analytics2 = ["NoFiles yet"]

let x = [Petroleum_Geology,Numerical_analyses,Principles_of_reservoir_engineering,Engineering_Statistics,Gravitational_and_magnetic_screening,Matlab,Thermodynamics,Geometric_Area,Fluid_Mechanics,Material_resistance,Engineering_Analytics]
let x2 = [Petroleum_Geology2,Numerical_analyses2,Principles_of_reservoir_engineering2,Engineering_Statistics2,Gravitational_and_magnetic_screening2,Matlab2,Thermodynamics2,Geometric_Area2,Fluid_Mechanics2,Material_resistance2,Engineering_Analytics2]
let l = 0

var item = document.createElement("div");
let imgD = document.createElement("img");
let fo = document.createElement("div");
let h = document.createElement("h1");
function RandomeColor(){
    let c = Math.floor(Math.random() * 50) + 1;
    let x = ["#a5a3e5",
"#a5a3e5",
"#8a87dd",
"#6e6bd5",
"#534fcd",
"#3a36c3",
"#322ea7",
"#2a268b",
"#211f6f",
"#191753",
"#100f37",
"#a7a6e2",
"#8d8bd9",
"#7270d1",
"#5855c8",
"#403cbd",
"#3634a2",
"#2d2b87",
"#24226c",
"#1b1a51",
"#121136",
"#a3c6e5",
"#87b5dd",
"#6ba3d5",
"#4f92cd",
"#3681c3",
"#2e6ea7",
"#265c8b",
"#1f496f",
"#173753",
"#0f2437",
"#a2dfe5",
"#86d5de",
"#6accd6",
"#4ec2cf",
"#35b6c4",
"#2d9ca8",
"#26828c",
"#1e6870",
"#164e54",
"#0f3438",
"#a4e4d2",
"#88dcc4",
"#6dd4b6",
"#51cba9",
"#38c19a",
"#30a584",
"#28896e",
"#206e58",
"#185242",
"#10372c"]
return x[c];
}
function create(u){
    if(file_act){ 
    ch("creating")
    let f = RandomeColor()
    for(let m = 0 ; m < l ; m++){
    var item = document.createElement("div");
    // let imgD = document.createElement("img");
    let fo = document.createElement("div");
    let h = document.createElement("h1");
    item.className = "item_bo4 Active2";
    fo.className = "fo";
    h.innerText = x[u][m]
    item.style.backgroundColor = "#FFAB15";
    // item.appendChild(imgD)
    fo.appendChild(h)
    item.appendChild(fo)
    bo4_2_container.appendChild(item)
    file_act = false
    }
    ch(item_bo4)
    Ac(u)
    }else{
        let item = document.getElementsByClassName("item_bo4")
        file_act = true
        ch("removing")
        bo4_2_container.innerHTML = "" 
        item.remove()
    }
}
let y = document.getElementsByClassName("Active2")
function Ac(t){
    for(let u = 0 ; u < l ; u++){
        y[u].onclick = function(){
            let re = fetch("/k").then((result)=>result.json())
            ch(re)
            re.then((item)=>{
                ch(item);
            })
            // location.href = x2[t][u]
        }
    }
}
let s2_cont_i_b = document.querySelectorAll(".s2_cont_i_b")
s2_cont_i_b.forEach((item,index)=>{
    item.onclick = function(){
        ch(index)
        switch(index){
            case 0: location.href = "FOO.html";break;
            // case 1: location.href = "SOO.html";break;
        }
    }
})



