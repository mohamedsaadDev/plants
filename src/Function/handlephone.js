export function handlephone(phone, selectphone,e){
    let phoneResult = false
    let patternphone = /d{2}\(\d{4}\)\s\d{5}/
    let phoneResulttest = patternphone.test(phone)
    switch(true){
        case(phoneResulttest === false):
        selectphone.current.style.display = 'block'
        break
        default: selectphone.current.style.display = 'none'
        phoneResult =true
    }
    if(phoneResult=== false){
        e.preventDefault()
    }
}