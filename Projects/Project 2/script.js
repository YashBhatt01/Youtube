const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `${height} Please give a valid Height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `${weight} Please give a valid Weight`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        //show the result
        // results.innerHTML = `<span>${bmi}</span>`
        if(bmi < 18.6){
        results.innerHTML = `<span>${bmi} Your Are Under Weight !!!</span>`
        }
        else if(bmi >18.6 || bmi < 24.9  ){
         results.textContent = `${bmi} Your Are Normal Range 😊`
        }
        else
        results.textContent = `${bmi} Your Are Over Weight 😰`
 }
})
