function poly(points,color,rot){
 setTimeout(wait,100000)
 const svg=document.getElementById("skewb")

 const pts=points.map(([x,y])=>{

  let [X,Y]=transform(x,y,rot)

  return X + "," + (-Y)

 }).join(" ")

 const el=document.createElementNS(
  "http://www.w3.org/2000/svg",
  "polygon"
 )

