function async_call(val,as_cal){
    
    setTimeout(as_cal,2000)

}
function f1(){
    let x=5;
    let y=2;
    let p=async(x,y);
    console.log(p)

}
function async(a,b){
    return a*b;

}


async_call("",f1);