const navn = "Håkon Sunde"
const alder = 15
const høyde = 1.93
const telefonnummer = [];
for(let i = 0; i < 8; i +=1) {
    telefonnummer[i] = Math.round(Math.random() * 9)
}

console.log(`Hei, mitt navn er ${navn}.`)
console.log(`Jeg er ${alder} år gammel.`)
console.log(`Min høyde er ${høyde} m.`)
console.log(`Mitt telefonnummer er ${telefonnummer.join("")}.`)