// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DATABASE CONNECTED`)                   // Named iife
})();

( (name) =>{
        console.log(`2d DATABASE CONNECTED by ${name}`); //unnamed iife
})('Yash');