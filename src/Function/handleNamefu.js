export function handleNamefu ( Name,selectname, e) {
    let NameResult = false
switch(true){
    case(Name.length < 3):
    selectname.current.style.display = 'block'
    break
    case(Name.trim() === ""):
    selectname.current.style.display = 'block'
    break
    case(Name.length >= 32):
    selectname.current.style.display = 'block'
    break
    default: selectname.current.style.display = 'none'
    return NameResult = true
}
if(NameResult === false){
    e.preventDefault()
}
}