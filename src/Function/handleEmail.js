export function handleEmail (Email, selectEmail,e){
        let EmailResult = false
        let patternEmail = /\w+@\w+\.\w+/;
        let viladeEmail= patternEmail.test(Email)
        switch(true){
            case(Email.trim() ===  ""):
            selectEmail.current.style.display = 'block'
            break
            case(Email.length < 6):
            selectEmail.current.style.display = 'block'
            break
            case(viladeEmail === false):
            selectEmail.current.style.display = 'block'
            break
            default: selectEmail.current.style.display = 'none'
            EmailResult =true 
        }
        if(EmailResult ===false){
            e.preventDefault()
        }
}