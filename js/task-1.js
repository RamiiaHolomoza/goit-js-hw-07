const numberOfCategories = (document.querySelectorAll(".item"))
console.log(`Number of categories: ${numberOfCategories.length}`)
// '#categories'

numberOfCategories.forEach(function (element){
const categorieTitle = element.querySelector("h2").textContent
const categorieElements = element.querySelectorAll("li").length

    console.log(`Category: ${categorieTitle}`)
    console.log(`Elements: ${categorieElements}`)
    
})
