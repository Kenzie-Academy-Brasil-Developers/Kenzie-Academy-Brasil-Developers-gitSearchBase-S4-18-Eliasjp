function eventsForNavInfo (){
    const navEmail = document.querySelector(`.email-button`)
    const navChange = document.querySelector(`.change-user-button`)

    navEmail.addEventListener(`click`, (event) => {
        event.preventDefault()
        const parsed = getLocalStorage ()
        if (!parsed[0].email){
            alert(`Email vazio na API`)
        } else {
            alert(`Email do usuário é: ${parsed[0].email}`)
        }
    })

    navChange.addEventListener(`click`, (event) => {
        event.preventDefault()
        window.location.assign(`../../index.html`)
    })
}

eventsForNavInfo ()