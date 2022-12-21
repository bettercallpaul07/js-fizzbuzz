/*  for (let i=1; i<=100; i++) {

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("Fizzbuzz", i)
    }

    else if (i % 3 == 0) {
    console.log("Fizz", i)}

    else if (i % 5 == 0) {
    console.log("Buzz", i)
    }

    else {
        console.log(i)
    }

} */

const div = document.querySelector('div.container');

for (let index = 1; index <= 100; index++) {
    
    const newDiv= document.createElement("div");
    console.log("newDiv", newDiv, typeof newDiv);
    newDiv.innerHTML = `${index}`;
    newDiv.className = `box box-${index}`;

    if ((index % 3 == 0) && (index % 5 == 0)) {
        newDiv.innerHTML = `fizzbuzz`;
        newDiv.className = `fizzbuzz`;
    }

    else if (index % 3 == 0) {
        newDiv.innerHTML = `fizz`;
        newDiv.className = `fizz`;
    }

    else if (index % 5 == 0) {
        newDiv.innerHTML = `buzz`;
        newDiv.className = `buzz`;
        }
    
    //Con append aggiungo un elemento HTML alla mia DOM
    //passandogli newDiv (elemento HTML creato con la funzione createElement)
    div.append(newDiv);

}

