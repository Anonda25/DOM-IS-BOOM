function calculateFinalScore(obj) {

    if (obj.name === undefined || obj.testScore >= 50 || obj.schoolGrade >= 30 || obj.isFFamily === undefined) {

        return "Invalid Input"

    }

    let toFamar = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {

        toFamar += 20;

    }
    return toFamar >= 80;

}


console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));

console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 55, schoolGrade: 30, isFFamily: true }));
