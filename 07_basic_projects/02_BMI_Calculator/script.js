const form = document.querySelector('form');

//const height=parseInt(document.querySelector('#height').value); //this use case will return empty value

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid Height: ${height}`;
    }
    else if (weight === '' || height < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid Weight: ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //now show the result

        const guide = document.querySelector('#weight-guide');
        const heading = document.querySelector('#heading');
        if (bmi < 18.5) {
            guide.innerHTML = "";
            result.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
            heading.innerHTML = `<span>You are Underweight!</span>`;
        }

        else if (bmi > 18.5 && bmi < 24.9) {
            guide.innerHTML = "";
            result.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
            heading.innerHTML = `<span>You have normal BMI.</span>`;
        }
        else if (bmi > 24.9) {
            guide.innerHTML = "";
            result.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
            heading.innerHTML = `<span>You are Overweight!</span>`;
        }




    }
});
