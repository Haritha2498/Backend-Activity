function coinflip(val,coin){
    console.log(val)
    let x=parseInt((Math.random()*2)+1);
    coin(x)
}

function flip(y){
    if(y==1)
    {
        console.log("you got head")
    }
    else{
        console.log("you got tail..")
    }
}


coinflip("Flipping a coin",flip);