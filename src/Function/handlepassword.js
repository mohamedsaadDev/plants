export function handlepassword(password,selectpassword,e){
    let passwordResult = false
    let patternpassword = /[^0-9a-zA-Z]/
    let Resultpasswordtest = patternpassword.test(password)
    switch(true){
        case(Resultpasswordtest=== true):
        selectpassword.current.style.display = 'block'
        break
        case(password.length < 4  ):
        selectpassword.current.style.display = 'block'
        break
        default:selectpassword.current.style.display = 'none'
        passwordResult = true
    }
    if(passwordResult=== false){
        e.preventDefault()
    }
}