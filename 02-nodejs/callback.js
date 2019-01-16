/*
 0 Obter o usuário
 1 Obter o número de telefone de um usuário a ártir de seu Id
 2 Obter o endereço do usuário pelo Id
*/

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, calback) {
    setTimeout(() => {
        return calback(null, {
            rua: 'dos bobos',
            numero: 0
        });
    }, 2000);
}

const usuario = obterUsuario(function resolverUsuario(error, usuario) {
    //null || "" || 0 === false
    if (error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolvertelefone(error1, telefone) {
        if (error1) {
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error('DEU RUIM em ENDEREÇO', error2)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua},${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone)