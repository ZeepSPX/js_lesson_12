"use strict"

// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою-----------------------------

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
let changed
do {
	changed = false
	for (let i = 1; i < arrayRandom.length; i++) {
		if (arrayRandom[i - 1] > arrayRandom[i]) {
			let tmp = arrayRandom[i]
			arrayRandom[i] = arrayRandom[i - 1]
			arrayRandom[i - 1] = tmp
			changed = true
			swaps++
			console.log(`Масиви при свапі: ${arrayRandom}`)
		}
	}
} while (changed)

document.write(`<div class="one__container"> <div> Масив ${arrayRandom}</div></div>`)
document.write(`<div class="one__container"> <div> Кількість перестановок ${swaps}</div></div>`)




















