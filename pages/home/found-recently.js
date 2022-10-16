function recentlyUsers (userInfo){
    if (!localStorage.getItem(`recently-found`)){
        const array = []
        array.push(creatingUserObj (userInfo))
        
        localStorage.setItem(`recently-found`, JSON.stringify(array))
    }else {
        const parsedStorage = JSON.parse(localStorage.getItem(`recently-found`))

        const temporaryArray = []
        parsedStorage.forEach(element => {
            if (element.id != userInfo.id){
                temporaryArray.push(element)
            }
        })
        temporaryArray.unshift(creatingUserObj (userInfo))
        localStorage.setItem(`recently-found`, JSON.stringify(temporaryArray))
        if (!(temporaryArray.length < 4)){
            while (temporaryArray.length > 3){
                temporaryArray.pop()
            }
            localStorage.setItem(`recently-found`, JSON.stringify(temporaryArray))
        }
    }
    callLocalStorage ()
}

function creatingUserObj (user){
    const userObj = {}

    userObj.login = user.login
    userObj.id = user.id
    userObj.avatar = user.avatar_url
    userObj.html = user.html_url
    userObj.bio = user.bio
    userObj.email = user.email

    return userObj
}