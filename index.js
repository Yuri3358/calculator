function start() {
    const numbers = document.getElementsByClassName('number')
    const output = document.getElementById('display')

    let list_numbers = []
    let expression = null

    for (const number of numbers) {
        number.addEventListener('click', (element) => {

            list_numbers.push(element.target.id)
            console.log(list_numbers)

            if (list_numbers[list_numbers.length-1] == '=') {  //create the expression from list_numbers after press "="
                list_numbers.pop('=') //As the "=" was added to list_numbers, it'll be removed
                expression = eval(list_numbers.join("")) //create the expression
                console.log(expression)

                try {
                    output.style.color = "black"
                    if (expression % 1 != 0) {  //check if the number is decimal, if true, this will show like this: 3.1416 -> 3.14  
                        output.innerHTML = expression.toFixed(2)
                    } else { //if false, this will just return the number
                        output.innerHTML = expression
                    }

                } catch {
                    output.style.color = "red"
                    output.style.fontSize = "30px"
                    output.innerHTML = "<strong>[ERROR]</strong> Try remake the calc, something went wrong!"
                }
            }
        })
    }
}