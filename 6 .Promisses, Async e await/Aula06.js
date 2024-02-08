function teste(){
    return new Promise(function(resolve, reject){
         let erro = false

         if(erro){
            reject('Erro...')
         }else{
            resolve('A promessa foi resolvida com sucesso!')
         }
    })
}

teste().then(function(rest){
    alert(rest);
}).catch(function(err){
    alert(err)
})

async function teste2(){
await testes2().them(function);
alert('olá')
}