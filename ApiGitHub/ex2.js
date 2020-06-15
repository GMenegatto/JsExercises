
var btn = document.querySelector('.btn');
var input = document.querySelector('.input');
var lista = document.querySelector('.reps');

btn.onclick = function(){
    var user = input.value;

    lista.innerHTML = '';

    var nome = document.createTextNode('Carregando........');
    var li = document.createElement("li");
    li.appendChild(nome);
    lista.appendChild(li);
    
    reqGitApi(user) 
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })

    reqRepApi(user) 
    .then(function(response){

        lista.innerHTML = '';

        response.map(rep =>{



            var nome = document.createTextNode(rep.name);
            var li = document.createElement("li");
            li.appendChild(nome);
            lista.appendChild(li);
        })
    })
    .catch(function(error){
        lista.innerHTML = '';
        var nome = document.createTextNode(error);
        var li = document.createElement("li");
        li.appendChild(nome);
        lista.appendChild(li);
    })


}

var reqGitApi = function(user){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${user}`);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
            } else{
                    reject('Erro na requisição.');
                }
            }
        }
    });
}

var reqRepApi = function(user){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${user}/repos`);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
            } else{
                    reject('Erro na requisição.');
                }
            }
        }
    });
}


