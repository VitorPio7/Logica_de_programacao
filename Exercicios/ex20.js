function points(games) {
    var count = 0;
    for (score of games) {
        let res = score.split(':')
        if (res[0] > res[1]) {
            count += 3
        } else if (res[0] == res[1]) {
            count += 1
        }
    }
    return count
}

const jogos = ["3:1", "2:2", "0:1"]

console.log(points(jogos))