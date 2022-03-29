let userID = document.getElementById('txtUserID');
let statusOfUserID = document.getElementById('statusOfUserID')
userID.addEventListener('focusout', leaveUserId)

function leaveUserId(){
    var userIDRegex = /^[a-zA-Z0-9]{5,12}$/;
    if(userIDRegex.test(userID.value)){
        statusOfUserID.textContent = 'UserID hợp lệ'
        statusOfUserID.style.color = 'blue'
    }else{
        statusOfUserID.textContent = 'UserID không hợp lệ. Độ dài từ 5 - 12'
        statusOfUserID.style.color = 'red'
    }
}
let password = document.getElementById('txtPassword');
let statusOfPassword = document.getElementById('statusOfPassword')
password.addEventListener('focusout', leavePassword)
function leavePassword(){
    var passwordRegex = /^[a-zA-Z0-9]{7,12}$/;
    if(passwordRegex.test(password.value)){
        statusOfPassword.textContent = 'Password hợp lệ'
        statusOfPassword.style.color = 'blue'
    }else{
        statusOfPassword.textContent = 'Password không hợp lệ. Độ dài từ 7 - 12'
        statusOfPassword.style.color = 'red'
    }
}
let name = document.getElementById('txtName');
let statusOfName = document.getElementById('statusOfName')
name.addEventListener('focusout', leaveName)
function leaveName(){
    var NameRegex = /^[a-zA-Z]{1,}$/
    if(NameRegex.test(name.value)){
        statusOfName.textContent = 'Name hợp lệ'
        statusOfName.style.color = 'blue'
    }else{
        statusOfName.textContent = 'Name không hợp lệ.'
        statusOfName.style.color = 'red'
    }
}
let country = document.getElementById('Country');
let statusOfCountry = document.getElementById('statusOfCountry')
country.addEventListener('focusout', leaveCountry)
function leaveCountry(){
    if(country.value=='Default'){
        statusOfCountry.textContent = 'Phải chọn một quốc gia'
    }else{
        statusOfCountry.textContent = 'Bạn đã chọn quốc gia'
    }
}

let code = document.getElementById('Code');
let statusOfCode = document.getElementById('statusOfCode')
code.addEventListener('focusout', leaveCode)
function leaveCode(){
    var CodeRegex = /^[0-9]+$/
    if(CodeRegex.test(code.value)){
        statusOfCode.textContent = 'Zip Code hợp lệ'
        statusOfCode.style.color = 'blue'
    }else{
        statusOfCode.textContent = 'Zip Code không hợp lệ. Chỉ được chữ số.'
        statusOfCode.style.color = 'red'
    }
}
let email = document.getElementById('txtEmail');
let statusOfEmail = document.getElementById('statusOfEmail')
email.addEventListener('focusout', leaveEmail)
function leaveEmail(){
    var emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
    if(emailRegex.test(email.value)){
        statusOfEmail.textContent = 'Email hợp lệ'
        statusOfEmail.style.color = 'blue'
    }else{
        statusOfEmail.textContent = 'Email không hợp lệ.'
        statusOfEmail.style.color = 'red'
    }
}
