function Start() {
    const numbers = document.getElementsByClassName('number')
    const output = document.getElementById('display')

    let list_numbers = []
    let expression = null

    for (const number of numbers) {
        number.addEventListener('click', (element) => {

            list_numbers.push(element.target.id)
            console.log(list_numbers)

            if (list_numbers[list_numbers.length-1] == '=') {
                list_numbers.pop('=')
                expression = list_numbers.join("")
                console.log(expression)

                try {
                    output.style.color = "black"
                    output.innerHTML = eval(expression)
                } catch {
                    output.style.color = "red"
                    output.style.fontSize = "30px"
                    output.innerHTML = "<strong>[ERRO]</strong> Tente refazer o cálculo"
                }
            }
        })
    }
}