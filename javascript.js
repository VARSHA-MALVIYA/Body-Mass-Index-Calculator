const form=document.querySelector('#form');

form.addEventListener('submit',function(e) {
     e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height==='' || height<=0 || isNaN(height))
    {
        results.innerHTML='please enter a valid height';
    }
    else if(weight=== '' || weight<=0 || isNaN(weight))
    {
        results.innerHTML='please enter a valid weight';
    }
    else 
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML=`${bmi}`;
        if(bmi<18.6)
        results.innerHTML=`${bmi} , <br> you are under weight`;
        else if(bmi>=18.6 && bmi<=24.9)
        results.innerHTML=`${bmi}, <br> you are normal person`;
        else 
        results.innerHTML=`${bmi},<br> you are over weight`;
    }
});
