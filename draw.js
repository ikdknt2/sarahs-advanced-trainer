const SQRT3 = Math.sqrt(3);

const pieces = [
 {name:"U", pts:[[-25*SQRT3,75],[25*SQRT3,75],[25*SQRT3,25],[-25*SQRT3,25]], idx:0},

 {name:"UBL", pts:[[0,100],[25*SQRT3,75],[-25*SQRT3,75]], idx:1},

 {name:"UBR", pts:[[50*SQRT3,50],[25*SQRT3,75],[25*SQRT3,25]], idx:2},

 {name:"UFR", pts:[[0,0],[-25*SQRT3,25],[25*SQRT3,25]], idx:3},

 {name:"UFL", pts:[[-50*SQRT3,50],[-25*SQRT3,25],[-25*SQRT3,75]], idx:4},

 {name:"R", pts:[[25*SQRT3,25],[50*SQRT3,0],[25*SQRT3,-75],[0,-50]], idx:5},

 {name:"RBU", pts:[[50*SQRT3,50],[50*SQRT3,0],[25*SQRT3,25]], idx:6},

 {name:"RBD", pts:[[50*SQRT3,-50],[50*SQRT3,0],[25*SQRT3,-75]], idx:7},

 {name:"RFD", pts:[[0,-100],[0,-50],[25*SQRT3,-75]], idx:8},

 {name:"RFU", pts:[[0,0],[25*SQRT3,25],[0,-50]], idx:9},

 {name:"F", pts:[[-25*SQRT3,25],[0,-50],[-25*SQRT3,-75],[-50*SQRT3,0]], idx:10},

 {name:"FUR", pts:[[0,0],[-25*SQRT3,25],[0,-50]], idx:11},

 {name:"FDR", pts:[[0,-100],[-25*SQRT3,-75],[0,-50]], idx:12},

 {name:"FDL", pts:[[-50*SQRT3,-50],[-25*SQRT3,-75],[-50*SQRT3,0]], idx:13},

 {name:"FUL", pts:[[-50*SQRT3,50],[-25*SQRT3,25],[-50*SQRT3,0]], idx:14},
];


function poly(points,color,name,index){
 const svg=document.querySelector(".skewb")

 const pts=points.map(([x,y])=>{
  return x + "," + (-y)
 }).join(" ")

 const el=document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon"
 )

 el.setAttribute("points",pts)
 el.setAttribute("fill",color)
 el.setAttribute("class","piece "+name)
 el.setAttribute("data-index",index)
el.setAttribute("stroke","black")
el.setAttribute("stroke-width","2")

 svg.appendChild(el)
}


function draw(state){
 const svg=document.querySelector(".skewb")
 svg.innerHTML=""

 pieces.forEach(p=>{
  poly(p.pts,state[p.idx],p.name,p.idx)
 })
}
