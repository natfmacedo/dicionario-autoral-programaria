function carregaDicionario() {
    var biografias = {
        bio01: {
            nome: "Bertha Lutz",
            imagem: "./assets/img/bertha-lutz.png",
            descricao:
               "Bertha Maria Júlia Lutz (1894 - 1976) foi uma ativista feminista, bióloga, educadora, displomata e política brasileira. Cientista especializada em anfíbios, foi uma das figuras mais marcantes do feminismo e da educação no Brasil no século XX. Em 1919 tornou-se secretária e pesquisadora do Museu Nacional do Rio de Janeiro e em agosto de 1965 recebeu o título de professora emérita da Universidade Federal do Rio de Janeiro (UFRJ)."
        },
        bio02: {
            nome: "Jaqueline Goes",
            imagem: "./assets/img/jaqueline-goes.png",
            descricao:
                "Jaqueline Goes de Jesus é uma biomédica e doutura em patologia humana e experimental pela Universidade Federal da Bahia (UFBA). Em 2020, após a confirmação do primeiro caso de COVID-19 no Brasil, a cientista coordenou o primeiro sequenciamento genético do novo Coronavírus em apenas 48 horas, enquanto a média mundial era de 15 dias."
        },
        bio03: {
            nome: "Luiza Bairros",
            imagem: "./assets/img/luiza-bairros.png",
            descricao:
                "Luiza Helena de Bairros (1953 - 2016) foi mestre em Ciências Sociais pela Universidade Federal da Bahia (UFBA), doutora em Sociologia pela Universidade de Michigan e ministra-chefe da Secretaria de Políticas de Promoção da Igualdade Racial do Brasil entre 2011 e 2014 no governo Dilma. Luiza Bairros organizou vários livros e escreveu diversos artigos sobre racismo, sexismo e pessoas negras no mercado de trabalho, um de seus artigos mais famosos é 'Nossos feminismos revisitados', de 1995. Em outubro de 2016 foi homenageada com o Coletivo Luiza Bairros, em Salvador, que visa a construção de uma política permanente de ações afirmativas na UFBA."
        },
        bio04: {
            nome: "Mellanie Fontes-Dutra",
            imagem: "./assets/img/mellanie-fontes-dutra.png",
            descricao:
                "Mellanie Fontes-Dutra é graduada em biomedicina, mestre e doutora em neurociência e pós-doutoranda em bioquímica pela Universidade Federal do Rio Grande do Sul (UFRGS). É idealizadora da Rede Análise Covid-19, grupo formado por profissionais de diversas áreas que divulgam informações científicas sobre a Covid-19 em linguagem acessível para a população. Mellanie também utiliza a rede social Twitter para divulgar de forma clara e objetiva informações a respeito da Covid-19 e para combater notícias falsas sobre as vacinas."
        },
        bio05: {
            nome: "Nise da Silveira",
            imagem: "./assets/img/nise-da-silveira.png",
            descricao:
                "Nise Magalhães da Silveira (1905 - 1999) foi uma médica psiquiatra brasileira reconhecida mundialmente por sua contribuição à psiquiatria. Formada pela Faculdade de Medicina da Bahia, Nise da Silveira ficou conhecida por humanizar o tratamento psiquiátrico no Brasil e ser radicalmente contraria às formas de tratamento agressivas utilizadas na época, como eletrochoque, insulinoterapia e lobotomia. Também foi pioneira na introdução de tratamentos que colocavam os pacientes em contanto com animais domésticos e expressões artísticas."
        },
        bio06: {
            nome: "Sônia Guimarães",
            imagem: "./assets/img/sonia-guimaraes.png",
            descricao:
                "Sônia Guimarães é mestre em Física Aplicada pela Universidade de São Paulo (USP) e doutora em Materiais Eletrônicos pelo Instituto de Ciência e Tecnologia da Universidade de Manchester, na Inglaterra. A cientista, conhecida como a primeira mulher negra brasileira doutora em Física e a primeira mulher negra brasileira a lecionar no Instituto Tecnológico de Aeronáutica (ITA), é especializada em semicondutores, particulas que são a base dos smartphones e do que conhecemos por computação pessoal. É mantenedora da Faculdade Zumbi dos Palmares e atua com projetos feministas e iniciativas de inclusão de mulheres e pessoas negras na ciência com o objetivo de reduzir a disparidade racial e de gênero na pesquisa brasileira."
        }
    }; //as chaves duplas são utilizadas no objeto quando serão armazenadas várias informações dentro da variável, ou seja, quando existe um conjunto de objetos

    var content = document.getElementById("cards"); //acesso ao id content presente na tag <section> no html
    //estrutura de repetição
    for (var bio in biografias) { 

        //atribuição de trechos HTML no id content
        content.innerHTML += 
            '<div class="card"> <img src="' + 
            biografias[bio].imagem + 
            '" alt="" class="card__imagem"/> <details class="card__conteudo"> <summary class="card__titulo">' + 
            biografias[bio].nome + 
            '</summary> <p class="card__descricao">' +
            biografias[bio].descricao +
            '</p> </details> </div>';
        
    }
}

//função sendo chamada para execução
carregaDicionario();