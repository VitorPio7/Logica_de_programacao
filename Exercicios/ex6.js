const ano = 1004;

for (var i = ano; i <= 2017; i += 4) {
    if (!(i % 100 === 0) || i % 4 === 0) {
        console.log(i)
    }
}