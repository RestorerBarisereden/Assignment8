let Restorer = true
let jimmy = false
let excel = true
let dgreat = true
let dominion = true
if (jimmy && excel || dgreat && dominion || jimmy && dominion && dgreat || excel && dgreat && dominion){
    console.log("Movie night is on");
}
else{
    console.log("Movie night is off");
}