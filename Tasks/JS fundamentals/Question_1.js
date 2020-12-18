let names = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;

let students = [];


names.split("\n").forEach((name, index) => {
    let firstName = name[0].toUpperCase() + name.split(" ")[0].slice(1).toLowerCase();
    let lastName = name.split(" ")[1][0].toUpperCase() + name.split(" ")[1].slice(1).toLowerCase();
    students.push({
        id: index + 1,
        firstName: firstName,
        lastName: lastName
    })
})

function find(char) {
    if (!typeof char === "string" || char.length != 1) {
        console.log( "Incorrect input");
        return;
    }

    let is = 0;
    let isNot = 0;
    Object.values(students)
          .map(i => i.firstName[0].toLowerCase() === char.toLowerCase() ? is++ : isNot++);

    alert(is + " and " + isNot);
}

function findFilter(char) {
    if (!typeof char === "string" || char.length != 1) {
        console.log( "Incorrect input");
        return;
    }

    let is = Object.values(students)
        .filter(i => i.firstName[0].toLowerCase() === char.toLowerCase())
        .length;
    let isNot = students.length - is;

    console.log(is + " and " + isNot);
}

function reduceStudents() {
    students = students.reduce((acc, cur) => {
        let tempArr = Object.values(cur);
        let tempObj = { firstName: tempArr[1], lastName: tempArr[2] };
        acc[cur.id] = tempObj;
        return acc;
    }, {})
}

reduceStudents();

