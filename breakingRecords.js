const pontos = [10,4,5,6,7,4,3,2,12,32,34,54]
console.log(breakingRecords(pontos))


function breakingRecords(scores) {
    let minScores = scores[0]
    let maxScores = scores[0]
    let maxCount = 0
    let minCount = 0
    
    for (let i = 1;i < scores.length; i++) {
         if (scores[i] > maxScores) {
            maxScores = scores[i]
            maxCount++
         } else if (scores[i] < minScores) {
            minScores = scores[i]
            minCount++
         }    
    }
    
    return [maxCount, minCount]
}