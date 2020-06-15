function checkIdade(idade) {
    return new Promise(function (resolve, reject) {
        idade <= 18 ? resolve('ok') : reject('maiveio');

    });
}

checkIdade(20)
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error);
    })

