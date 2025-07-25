let generate=()=>{
    let a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let res=''
    for(let i=0;i<6;i++){
       
       let index=Math.floor(Math.random()*a.length);
         res+=a[index];

    }
    document.getElementById("box1").value=res;
}
generate();

 
let check=()=>{
    let value= document.getElementById("box1").value;
    let check=document.getElementById("box2").value;

    if (check===value) {
        document.getElementById("res").innerHTML = "Valid";
    } else {
        document.getElementById("res").innerHTML = "Invalid";
    }
}
check()
