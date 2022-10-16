function queryRecentlyButtons (){
    const queryRecentlyButtons = document.querySelectorAll(`.recently-user-profile`)
    return queryRecentlyButtons
}

function eventListenerButtons (){
    const buttons = queryRecentlyButtons ()
    buttons.forEach(element => element.addEventListener(`click`, (event) => {
        event.preventDefault()
        const storageUsers = JSON.parse(localStorage.getItem(`recently-found`))
        const imageSrc = element.childNodes[0].childNodes[0].src
        const indexInStorage = storageUsers.findIndex(object => object.avatar == imageSrc)
        const nextIndexInStorage = indexInStorage + 1
        storageUsers.unshift(storageUsers[indexInStorage])
        storageUsers.splice(nextIndexInStorage, 1)
        localStorage.setItem(`recently-found`, JSON.stringify(storageUsers))
        window.location.assign(`pages/profile/profile.html`)
    }))
}

eventListenerButtons ()