var pessoa = {
    idade: 18,
    /* objeto dentro do objeto */
    nome: {
        primeiro: 'Geovanna',
        ultimo: 'Lima'
    },
    sexo: 'feminino',

    /* array dentro do objeto */
    hobbies: [
        'jogar',
        'cozinhar'
    ],

    /* função dentro do objeto */
    saudacao: function () {
        /* referenciando com "this."*/
        console.log(`Olá! Me chamo ${this.nome.primeiro} ${this.nome.ultimo}.`)
    },

    bio: function () {
        console.log(
            /* referenciando com "pessoa['']"*/
            `Tenho ${pessoa['idade']} anos e sou do sexo ${pessoa['sexo']}. Meus hobbies são: ${pessoa.hobbies[0]} e ${pessoa.hobbies[1]}.`
        )
    }
}

console.log(pessoa.saudacao(), pessoa.bio())