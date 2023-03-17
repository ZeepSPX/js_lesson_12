"use strict"

// Задача 3.Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.---------------------------------------------------------------------------------

function getGenerateRandom() {
	const arrayRandom = []
	const minNumber = 1
	const maxNumber = 100

	for (let i = 0; i < 30; i++) {
		const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
		arrayRandom.push(randomNumber)
	}
	return arrayRandom
}

const arrayRandom = getGenerateRandom()

let swaps = 0
let sortedSteps = []
for (let k = 0; k < arrayRandom.length; k++) {
	const currentElement = arrayRandom[k]
	let i = k - 1
	while (i >= 0 && arrayRandom[i] > currentElement) {
		arrayRandom[i + 1] = arrayRandom[i]
		i = i - 1
		swaps++
		sortedSteps.push([...arrayRandom])
	}
	arrayRandom[i + 1] = currentElement

}


document.write(`<div class="one__container"> <div> Масив ${arrayRandom}</div></div>`)
document.write(`<div class="one__container"> <div> Кількість перестановок ${swaps} </div></div>`)

sortedSteps.forEach((step, index) => {
	console.log(`Масиви при свапі: ${index + 1}: ${step}`)
})




