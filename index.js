function start() {
    const numbers = document.getElementsByClassName('number')
    const output = document.getElementById('display')

    let list_numbers = []
    let expression = null

    for (const number of numbers) {
        number.addEventListener('click', (element) => {

            list_numbers.push(element.target.id) //add the id to array "list_numbers"
            let last_button = list_numbers[list_numbers.length-1] //last element from array

            try {
                output.style.color = "black"
                output.style.fontSize = "40px"
                switch (last_button) {
                    case "=":
                        list_numbers.pop('=') 
                        expression = eval(list_numbers.join("")) 
                        break
    
                    case "clear":
                        list_numbers.length = 0
                        output.innerText = "aaa"
                        break
    
                    case "delete":
                        list_numbers.pop('delete')
                        list_numbers.pop(last_button)
                        break
                }

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
        })
    }
}