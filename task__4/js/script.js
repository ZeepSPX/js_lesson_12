"use strict"

// Задача 5.Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.---------------------------------------------------------------------------------

let names = ["Pol", "Sergey", "Olga", "Sharana", "Phil", "Mary"]

for (let i = 0; i < names.length; i++) {
	let current = names[i]
	let j = i - 1
	while (j >= 0 && names[j] > current) {
		names[j + 1] = names[j]
		j--
	}	
	names[j + 1] = current
}

let left = 0
let right = names.length - 1
let found = false
let index = -1

while (left <= right) {
	let middle = Math.floor((left + right) / 2)
	if (names[middle] === "Olga") {
		found = true
		index = middle
		break
	} else if (names[middle] > "Olga") {
		right = middle - 1 
	} else {
		left = middle + 1
	}
}	

if (found) {
	document.write(`<div class="page__container"> <div class="page__one"> Ім'я Olga знайдено на позиції ${index} </div> </div>`)
}else{
	document.write(`<div class="page__container"> <div class="page__one"> Ім'я Olga не знайдено </div> </div>`)
}




