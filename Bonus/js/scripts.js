

const div = document.querySelector('div.container');

for (let index = 1; index <= 100; index++) {
    
    const newDiv= document.createElement("div");

    newDiv.innerHTML = `${index}`;
    newDiv.className = `box box-${index}`;

    if ((index % 3 == 0) && (index % 5 == 0)) {
        newDiv.innerHTML = `fizzbuzz`;
        newDiv.className = `box fizzbuzz`;
    }

    else if (index % 3 == 0) {
        newDiv.innerHTML = `fizz`;
        newDiv.className = `box fizz`;
    }

    else if (index % 5 == 0) {
        newDiv.innerHTML = `buzz`;
        newDiv.className = `box buzz`;
        }
    
    //Con append aggiungo un elemento HTML alla mia DOM
    //passandogli newDiv (nuovo elemento HTML creato con la funzione createElement)
    div.append(newDiv);

}

