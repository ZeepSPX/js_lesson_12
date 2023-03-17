"use strict"

// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.----------------------------------------


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
let leftIndex = 0
let rightIndex = arrayRandom.length - 1

function swap(array, i, j) {
	const tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
	swaps++
}

while (leftIndex < rightIndex) {
	for (let i = leftIndex; i < rightIndex; i++) {
		if (arrayRandom[i] > arrayRandom[i + 1]) {
			swap(arrayRandom, i, i + 1)
			sortedSteps.push([...arrayRandom])
		}
	}
	rightIndex--

	for (let j = rightIndex; j >= leftIndex; j--) {
		if (arrayRandom[j] < arrayRandom[j - 1]) {
			swap(arrayRandom, j, j - 1)
			sortedSteps.push([...arrayRandom])
		}
	}
	leftIndex++
}


document.write(`<div class="one__container"> <div> Масив ${arrayRandom}</div></div>`)
document.write(`<div class="one__container"> <div> Кількість перестановок ${swaps}</div></div>`)

sortedSteps.forEach((step, index) => {
	console.log(`Масиви при свапі: ${index + 1}: ${step}`)
})