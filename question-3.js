// Question #3
let userPassword = "TechUp";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (password){
    if(password.length > 10){
        return "Strong";
    }else if(password.length >= 6){
        return "Medium";
    }else{
        return "Weak";
    }
}
console.log(checkPasswordStrength("ssswnalWadqQ"))
console.log(checkPasswordStrength(userPassword))
console.log(checkPasswordStrength("abcde"))
