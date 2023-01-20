const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    if (nlwSetup.dayExists(today)) {
        alert(`O dia ${today} já foi incluso ❌`)
        return
    } 

    nlwSetup.addDay(today)
    alert('Adicionado com sucesso ✅')
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// const data = {
//    run: ['01-01', '01-02', '01-06', '01-07','01-08', '01-09'],
//    takePills: ['01-03'],
//    journal: ['01-02']
// }

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()