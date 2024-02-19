const getVerse = document.querySelector('#bible')
const button = document.querySelector('button')
const addNewVerse = async () => {
    const newVerse = await randBibleVerse()
    const newLi = document.createElement('li')
    newLi.style.color = 'teal'
    newLi.append(newVerse)
    getVerse.append(newLi)
}
const randBibleVerse = async () => {
    const res = await axios.get('https://labs.bible.org/api/?passage=random&type=json&Accepy=application/json')
    const book = res.data[0].bookname
    const chap = res.data[0].chapter
    const vers = res.data[0].verse
    const text = res.data[0].text
    return `${book} ${chap} : ${vers} ---> ${text}`
}
button.addEventListener('click', addNewVerse)
randBibleVerse()






