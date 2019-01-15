/*
 0 Obter o usuário
 1 Obter o número de telefone de um usuário a ártir de seu Id
 2 Obter o endereço do usuário pelo Id
*/
//importamos um módulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    //quando der algum problema -> reject(ERRO)
    //quando for success -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error('DEU RUIM DE VERDADE'));

            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);
    })

}

function obterEndereco(idUsuario, calback) {
    setTimeout(() => {
        return calback(null, {
            rua: 'dos bobos',
            numero: 0
        });
    }, 2000);
}

const usuarioPromise = obterUsuario();
//para manipular o sucesso usamos a função .then
//para manipular error, usamos o .catch
// usuario -> telefone ->
usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        });
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `);
    })
    .catch(function (error) {
        console.error('DEU RUIM', error);
    })

// const usuario = obterUsuario(function resolverUsuario(error, usuario) {
//     //null || "" || 0 === false
//     if (error) {
//         console.error('DEU RUIM em USUARIO', error)
//         return;
//     }

//     obterTelefone(usuario.id, function resolvertelefone(error1, telefone) {
//         if (error1) {
//             console.error('DEU RUIM em TELEFONE', error1)
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if (error2) {
//                 console.error('DEU RUIM em ENDEREÇO', error2)
//                 return;
//             }

//             console.log(`
//             Nome: ${usuario.nome}
//             Endereço: ${endereco.rua},${endereco.numero}
//             Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })
// })
// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone)