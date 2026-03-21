let log = ":"

function do22cycle(a,b,c,d){ //a↔b c↔b
 let temp=state[a]
 state[a]=state[b]
 state[b]=temp
 temp=state[c]
 state[c]=state[d]
 state[d]=temp
}

function do3cycle(a,b,c){　//a→b→c
 let temp=state[a]
 state[a]=state[c]
 state[c]=state[b]
 state[b]=temp
}

function do4cycle(a,b,c,d){ //a→b→c→d
 let temp=state[a]
 state[a]=state[d]
 state[d]=state[c]
 state[c]=state[b]
 state[b]=temp
}

function sledge(){
  //corners
  do3cycle(6,14,3)
  do3cycle(26,13,7)
  do3cycle(27,12,23)
  do3cycle(24,11,2)
  //centers
  do22cycle(0,25,10,5)

  draw(state)

  log = log + "S"
}

function hedge(){
  //corners
  do3cycle(3,14,6)
  do3cycle(7,13,26)
  do3cycle(23,12,27)
  do3cycle(2,11,24)
  //centers
  do22cycle(0,25,10,5)

  draw(state)
 log = log + "H"
}

function up(){
 do4cycle(11,12,13,14)
 do4cycle(2,23,26,6)
 do4cycle(3,24,27,7)
 do4cycle(0,20,25,5)
 do4cycle(1,22,29,9)
 do4cycle(4,21,28,8)
 do4cycle(16,17,18,19)

 draw(state)
 log = log + "↑"
}

function down(){
do4cycle(14,13,12,11)
do4cycle(6,26,23,2)
do4cycle(7,27,24,3)
do4cycle(5,25,20,0)
do4cycle(9,29,22,1)
do4cycle(8,28,21,4)
do4cycle(19,18,17,16)
 
 draw(state)
 log = log + "↓"
}

function up2(){
do22cycle(11,13,12,14)
do22cycle(2,26,23,6)
do22cycle(3,27,24,7)
do22cycle(0,25,20,5)
do22cycle(1,29,22,9)
do22cycle(4,28,21,8)
do22cycle(16,18,17,19)

 draw(state)
 log = log + "↑2"
}

function cw(){
 do4cycle(6,7,8,9)
 do4cycle(0,10,25,15)
 do4cycle(1,11,27,18)
 do4cycle(2,12,28,19)
 do4cycle(3,13,29,16)
 do4cycle(4,14,26,17)
 do4cycle(24,23,22,21)
 
 draw(state)
 log = log + "↷"
}

function ccw(){
do4cycle(9,8,7,6)
do4cycle(15,25,10,0)
do4cycle(18,27,11,1)
do4cycle(19,28,12,2)
do4cycle(16,29,13,3)
do4cycle(17,26,14,4)
do4cycle(21,22,23,24)
 
 draw(state)
 log = log + "↶"
}

function cw2(){
do22cycle(6,8,7,9)
do22cycle(0,25,10,15)
do22cycle(1,27,11,18)
do22cycle(2,28,12,19)
do22cycle(3,29,13,16)
do22cycle(4,26,14,17)
do22cycle(24,22,23,21)

 draw(state)
 log = log + "↷2"
}

function left(){
 do4cycle(1,2,3,4)
 do4cycle(5,15,20,10)
 do4cycle(6,16,21,11) 
 do4cycle(7,17,22,12)
 do4cycle(8,18,23,13)
 do4cycle(9,19,24,14)
 do4cycle(26,27,28,29)

 draw(state)
 log = log + "←"
}

function right(){
do4cycle(4,3,2,1)
do4cycle(10,20,15,5)
do4cycle(11,21,16,6)
do4cycle(12,22,17,7)
do4cycle(13,23,18,8)
do4cycle(14,24,19,9)
do4cycle(29,28,27,26)

 draw(state)
 log = log + "→"
}

function left2 (){
do22cycle(1,3,2,4)
do22cycle(5,20,15,10)
do22cycle(6,21,16,11)
do22cycle(7,22,17,12)
do22cycle(8,23,18,13)
do22cycle(9,24,19,14)
do22cycle(26,28,27,29)

 draw(state)
 
 log = log + "←2"
}
