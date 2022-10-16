function checkUser (){
    const form = document.querySelector(`.send-username`)
    form.addEventListener(`submit`, (event) => {
        const input = document.querySelector(`.username-input`)
        event.preventDefault()
        const username = input.value.toLowerCase()
        fetchPage (username)
    })
}

async function fetchPage (username){
    const url = `https://api.github.com`
    const buttonDiv = document.querySelector(`.text-and-animation`)
    fetch (`${url}/users/${username}`)
    .then ((element) => {
        buttonDiv.classList.add(`text-and-animation-keyframes`)
        buttonDiv.innerHTML = ""
        if (element.status == 200){
            return element.json()
        }
    })
    .then ((userData) => {
        if(userData.login.toLowerCase() == username){
            return checkStatus (userData)
        }
    })
    .catch(error => {
        if (!document.querySelector(`.username-invalid`)){
            const input = document.querySelector(`.username-input`)
            const form = document.querySelector(`.send-username`)
            const button = document.querySelector(`.send-username-button`)

            input.classList = `username-input invalid-user`
            button.classList = `send-username-button send-username-button-deactived`
            buttonDiv.classList.remove(`text-and-animation-keyframes`)
            buttonDiv.classList.add(`text-and-animation-deactived`)
            buttonDiv.innerHTML = `Ver perfil do github`
            
            const span = document.createElement(`span`)
                  span.classList = `username-invalid`
                  span.innerHTML = `Usuário não encontrado`

            form.append(span)

        }else {
            const button = document.querySelector(`.send-username-button`)
            button.classList = `send-username-button send-username-button-deactived`
            
            buttonDiv.classList.remove(`text-and-animation-keyframes`)
            buttonDiv.classList.add(`text-and-animation-deactived`)
            buttonDiv.innerHTML = `Ver perfil do github`
        }
    })
}

function checkStatus (userInfo){
        recentlyUsers (userInfo)
        window.location.assign(`/pages/profile/profile.html`)
}

function buttonType (){
    const input = document.querySelector(`.username-input`)
    const button = document.querySelector(`.send-username-button`)
    const buttonDiv = document.querySelector(`.text-and-animation`)

    input.addEventListener(`input`, (event) => {
        if (input.value == ""){
            button.classList = `send-username-button send-username-button-deactived`
            buttonDiv.classList = `text-and-animation text-and-animation-deactived`
            buttonDiv.innerHTML = `Ver perfil do github`
        }else {
            button.classList = `send-username-button`
            buttonDiv.classList = `text-and-animation`
            buttonDiv.innerHTML = `Ver perfil do github`
        }
    })
}

checkUser ()
buttonType ()