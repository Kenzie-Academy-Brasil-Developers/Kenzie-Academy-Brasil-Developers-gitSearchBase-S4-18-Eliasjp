async function fetchingRepos (){
    const storage = getLocalStorage ()[0]
    const baseUrl = `https://api.github.com/users`
    fetch(`${baseUrl}/${storage.login}/repos`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then ((response) => { 
        return response.json()
    })
    .then ((arrayRepository) => {
        arrayRepository.forEach(repo => reposLi (repo))
    })
}

function reposLi (repo){
    const li = document.createElement(`li`)
          li.classList = `repo-card`

    const repoH3 = document.createElement(`h3`)
          repoH3.classList = `repo-title`
          repoH3.innerHTML = repo.name

    const repoDesc = document.createElement(`p`)
          repoDesc.classList = `repo-description`
          if (!repo.description){
            repoDesc.innerHTML = `Sem descrição`
          }else {
            repoDesc.innerHTML = repo.description
          }

    const section = document.createElement(`section`)
          section.classList = `repo-buttons`

    const repository = document.createElement(`button`)
          repository.classList = `go-to-repository`
          repository.innerHTML = `Repositório`
          repository.addEventListener(`click`, (event) => {
            event.preventDefault()
            if (!repo.html_url){
                alert(`Sem repositório`)
            }else {
                window.open(repo.html_url, `_blank`)
            }
          })

    const demo = document.createElement(`button`)
          demo.classList = `go-to-demonstration`
          demo.innerHTML = `Demo`
          demo.addEventListener(`click`, (event) => {
            event.preventDefault()
            if (!repo.homepage){
                alert(`Não possui uma page`)
            }else {
                window.open(repo.homepage, `_blank`)
            }
          })

    const queryUl = document.querySelector(`.repository-list`)

    queryUl.append(li)
    li.append(repoH3, repoDesc, section)
    section.append(repository, demo)
}

fetchingRepos ()