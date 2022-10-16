function getLocalStorage (){
    const userStorage = localStorage.getItem(`recently-found`)
    return JSON.parse(userStorage)
}

function createInfo (){
    const user = getLocalStorage()[0]
    
    userCard (user)
    navInfo ()
}

function userCard (user){
    const section = document.createElement(`section`)
          section.classList = `user-section`

    const avatar = document.createElement(`img`)
          avatar.alt = user.login
          avatar.src = user.avatar
          avatar.classList = `user-avatar`

    const div = document.createElement(`div`)
          div.classList = `div-user`

    const divH2 = document.createElement(`h2`)
          divH2.innerHTML = user.login
          divH2.classList = `user-login`

    const divBio = document.createElement(`p`)
          divBio.classList = `user-bio`
          if (!user.bio){
            divBio.innerHTML = `Sem bio`
          }else {
            divBio.innerHTML = user.bio
          }

    const userInfoContainer = document.querySelector(`.user-info-container`)
    userInfoContainer.append(section)
    section.append(avatar, div)
    div.append(divH2, divBio)
}

function navInfo () {
    const navButton = document.createElement(`nav`)
          navButton.classList = `nav-buttons`

    const emailButton = document.createElement(`button`)
          emailButton.classList = `email-button`
          emailButton.innerHTML = `Email`

    const changeUser = document.createElement(`button`)
          changeUser.classList = `change-user-button`
          changeUser.innerHTML = `Trocar de usuário`

    const userInfoContainer = document.querySelector(`.user-info-container`)

    userInfoContainer.append(navButton)
    navButton.append(emailButton, changeUser)
}

createInfo ()