function callLocalStorage (){
      const storageUsers = JSON.parse(localStorage.getItem(`recently-found`))
      const queryUl = document.querySelector(`.list-recently`)
            queryUl.innerHTML = ""
      storageUsers.forEach(user => createLiRecently(user))
}


function createLiRecently (user){
    const li = document.createElement(`li`)
          li.classList = `icon-user-recently`

    const button = document.createElement(`button`)
          button.classList = `recently-user-profile`
          button.title = `Acessar Perfil`
    
    const figure = document.createElement(`figure`)
          figure.classList = `user-icon-figure`

    const userIcon = document.createElement(`img`)
          userIcon.classList = `user-icon`
          userIcon.src = `${user.avatar}`

    li.append(button)
    button.append(figure)
    figure.append(userIcon)
    
    const queryUl = document.querySelector(`.list-recently`)

    queryUl.append(li)
}

callLocalStorage ()