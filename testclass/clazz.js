//1
class Clazz {
    constructor(nazev)  { //2
        this.studenti = []; 
        this.nazev = nazev; //3
        this.nazevTřídy = ["classA", "classB"];

        for (let j = 0; j < this.nazevTřídy.length; j++) {
            let názevTřídy = this.nazevTřídy[j];

            for (let i = 0; i < 5; i++) {
                let věk = j === 0 ? Math.floor(Math.random() * 18) + 10 : Math.floor(Math.random() * (100 - 18)) + 18;
                let student = new Student("Student " + (i + 1), "Příjmení " + (i + 1), věk, názevTřídy);
                this.studenti.push(student);
            }
        }
    }

    vypisStudenty() {
        this.studenti.forEach(student => {
            console.log(`${student.jméno}, ${student.příjmení}, ${student.názevTřídy}`);
        });
    }
}
//4
class Student { //5
    constructor(jméno, příjmení, věk, názevTřídy) { //7
        this.jméno = jméno;
        this.příjmení = příjmení;
        if (názevTřídy !== "classA" && názevTřídy !== "classB") {
            throw new Error("Nesprávný název třídy. Povolené hodnoty jsou 'classA' a 'classB'.");
        }
        this.věk = věk;
        this.názevTřídy = názevTřídy;
    }
}

// Příklad použití:
let myClazz = new Clazz("Moje třída");
console.log(myClazz.nazev); // Vytiskne "Moje třída"
console.log(myClazz.studenti); // Vytiskne pole obsahující objekty studentů
myClazz.vypisStudenty(); // Vypíše studenty do konzole ve formátu Jméno, Příjmení, Třída //10

