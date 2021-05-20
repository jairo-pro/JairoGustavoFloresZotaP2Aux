var names: String = "Jairo Flores";
var age: number = 21;
var birth :number | String = "3000";
function greet (a: String,b :number, c: (n: string) => void,d: number | String) {
    //console.log("Hi "+a+", Your age is "+b);
    let res = String("Hi "+ a + ", Your age is " + b+ " Birth: "+d);
    c(res);
}
greet(names,age,
    (c)=>{
        console.log(c);
        
    },birth
);
function never (): never{
    while(true){}
}

