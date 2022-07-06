let personName = document.querySelector('#name')
let personEmail = document.querySelector('#email')
let personAge = document.querySelector('#age')
let currentRole = document.querySelector('#currentRole')
let recommendation = document.getElementsByName('recommendation')
let favFeature = document.querySelector('#favFeature');
let frontendCheck = document.querySelector('#frontend')
let backendCheck = document.querySelector('#backend')
let dataCheck = document.querySelector('#data')
let opensourceCheck = document.querySelector('#opensource')
let challengesCheck = document.querySelector('#challenges')
let comments = document.querySelector('#comments');
let pageForm = document.querySelector('#page-form');
// console.log(pageForm)

pageForm.addEventListener('submit', checkForm)

function checkForm(e) {
    e.preventDefault();
    console.log('name', personName.value)
    console.log('email', personEmail.value)
    console.log('age', personAge.value)
    console.log('currentRole', currentRole.value)
    console.log('recommendation', recommendation)
    let improvements = [];
    let recommended;

    for (let i = 0; i < recommendation.length; i++) {
        if (recommendation[i].checked)
            recommended = recommendation[i].value;
        console.log('recommendation', recommendation[i].value)
    }

    console.log('favFeature', favFeature.value)
    if (frontendCheck.checked) {
        console.log('improvement', frontendCheck.value)
        improvements.push(frontendCheck.value)
    }
    if (backendCheck.checked) {
        console.log('improvement', backendCheck.value)
        improvements.push(backendCheck.value)
    }
    if (dataCheck.checked) {
        console.log('improvement', dataCheck.value)
        improvements.push(dataCheck.value)
    }
    if (opensourceCheck.checked) {
        console.log('improvement', opensourceCheck.value)
        improvements.push(opensourceCheck.value)
    }
    if (challengesCheck.checked) {
        console.log('improvement', challengesCheck.value)
        improvements.push(challengesCheck.value)
    }
    console.log('improvement', improvements)
    console.log('comments', comments.value)
    if (personName.value !== '' && personEmail.value !== '' && personAge.value !== '' && currentRole.value !== '') {
        
        let formData = {
            "name": personName.value,
            "email": personEmail.value,
            "age": personAge.value,
            "currentRole": currentRole.value,
            "recommendation": recommended,
            "favFeature": favFeature.value,
            "improvement": improvements,
            "comments": comments.value
        }
        console.log(formData)
        //api call
    } else {
        alert('Please fill out necessary fields')
    }


}