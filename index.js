// // Write your code here!

// // let element = document.createElement('div')

// // document.body.appendChild(element)

// // let ul = document.createElement('ul')

// // for (let i = 0; i < 3; i++) {
// //     let li = document.createElement('li')
// //     li.innerHTML = (i + 1).toString()
// //     ul.appendChild(li)
// // }

// // element.appendChild(ul)

// // let element = document.querySelector('p#greeting');
// // element.innerHTML = "Hello, DOM!";


// // let header = document.getElementById("div#header");
// // header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>"

// var element = document.getElementById('main');
// element.remove(); // Removes the div with the 'div-02' id


// let newHeader = document.createElement('h1');
// newHeader.id = "victory";
// newHeader.innerHTML = "Jacob is the champion!";







// const header = document.createElement('header')

// header.id = "such-header"
// header.innerText = "ONE HEADER TO RULE THEM ALL"

// document.body.appendChild(header)




// let element = document.createElement('div')


// document.body.appendChild(element)


// element.classList.add("divider")


// const ul = document.createElement('ul')
// element.innerHTML = "wow look at everything I can do !"

// for (let i = 0; i < 3; i++) {
//     let listItem = document.createElement('li')
//     listItem.innerHTML = `This is list number ${i + 1}`
//     ul.appendChild(listItem)
// }


// element.appendChild(ul)


// pTag = document.createElement('p')
// //pTag.innerText = "Woah many p tags"

// pTag.innerHTML = `
//     <p style="color: blue">This will be a p tag</p>
//     <p style="color: red">This will be another p tag</p>
//     <p>This will be yet another p tag</p>
// `

// element.append(pTag)

// element.style.backgroundColor = '#27647B'
// element.style.border = 'dashed'


// pTag.addEventListener('click', function(e) {
//     e.target.remove()
// })


// element.addEventListener('click', function(e) {
//     alert("You can't remove this you rascal")
// })

// pTag.setAttribute('class', 'paragraph')



// element.removeChild(ul.querySelector('li'))



const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "Jacob is the champion"
document.body.appendChild(newHeader)

const main = document.querySelector('#main')

main.remove()


