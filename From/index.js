function validate(){
    var username=document.getElementById('username').value
    var gmail=document.getElementById('gmail').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    checkusername(username)
    checkgmail(gmail)
    checkpassword(password,cpassword)
}

function checkusername(username){
    if (username.lenght > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 letters long'
    }
}
