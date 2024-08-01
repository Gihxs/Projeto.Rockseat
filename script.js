function toggLeMode() {
    const html = document.documentElement
    //  if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (html.classList.contains("light")) {
    //condição do tema light 
      img.setAttribute("src", "./images/avatar-dark.png")
    } else {
      img.setAttribute("src", "./images/avatar-light.png")
    }
}