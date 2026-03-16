function do2cycle(a,b){
 let temp=state[a]
 state[a]=state[b]
 state[b]=temp
}

function do3cycle(a,b,c){
 let temp=state[a]
 state[a]=state[c]
 state[c]=state[b]
 state[b]=temp
}

function do4cycle(a,b,c,d){
 let temp=state[a]
 state[a]=state[d]
 state[d]=state[c]
 state[c]=state[b]
 state[b]=temp
}

function sledge(){
  //corners
  do3cycle(11,9,4)
  do3cycle(26,8,12)
  do3cycle(27,7,23)
  do3cycle(24,6,2)
  //centers
  do2cycle(0,25)
  do2cycle(10,5)

  draw(state)
}

function hedge(){
  //corners
  do3cycle(4,9,11)
  do3cycle(12,8,26)
  do3cycle(23,7,27)
  do3cycle(2,6,24)
  //centers
  do2cycle(0,25)
  do2cycle(10,5)

  draw(state)
}

function up(){
 do4cycle(6,7,8,9)
 do4cycle(2,23,26,11)
 do4cycle(3,24,27,12)
 do4cycle(0,20,25,10)
 do4cycle(1,21,29,14)
 do4cycle(4,24,28,13)
 do4cycle(16,17,18,19)

 draw(state)
}

