// Defina um array com as perguntas, alternativas e respostas corretas
const questions = [
    {
        question: "Os métodos HTTP são responsáveis por indicar a ação que será executada, alguns métodos conhecidos são: POST, GET, DELETE, PUT e PATCH. O Método PUT e PATCH, utilizamos para editar, mas, qual a diferença entre usar um e outro?",
        options: [
            "Não existe diferença",
            "PUT é usado para alterar um dado completo e PATCH altera o dado parcialmente.",
            "PATCH é usado para alterar um dado completo e PUT altera dado parcialmente.",
            "PUT é usado para alterar um dado completo e recebe recurso do servidor."
        ],
        correctAnswer: "PUT é usado para alterar um dado completo e PATCH altera o dado parcialmente."
    },
    {
        question: "Qual seria o resultado da função:  função <br>inteiro soma (inteiro a, inteiro b) <br>{ a+b } ?",
        options: [
            "4",
            "0",
            "Erro de compilação",
            "2"
        ],
        correctAnswer: "Erro de compilação"
    },
    {
        question: "O que é um Framework?",
        options: [
            "Trata-se de uma série de bibliotecas e classes, ou seja, códigos prontos, que oderecem alguma funcionalidade específica. Em outras palavras é um padrão que pode ser incorporado a sistemas para agilizar a codificação de certas partes",
            "É uma linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas.",
            "São conjuntos de arquicos relacionados entre si, com registris sobrepessoas, lugares ou informações em geral",
            "Trata-se de uma interface de programação que os navegadores utilizam para representar páginas na web"
        ],
        correctAnswer: "Trata-se de uma série de bibliotecas e classes, ou seja, códigos prontos, que oderecem alguma funcionalidade específica. Em outras palavrasm é um padrão que pode ser incorporado a sistemas para agilizar a codificação de certas partes"
    },
    {
        question: "Qual a função de uma API?",
        options: [
            "Definir a estrutura lógica dos documentos em forma de árvore, a qual guia o navegador na representação e manipulação dos componentes da página.",
            "Permitirem a integração entre dois sistemas, em um deles fornece informações e servilços que podem ser utilizados pelo outro, sem a necessidade de algum dos sistemas conhecer detalhes de implementação de software",
            "TRaduz um programa descrito em uma linguagem de alto nível para um programa equivalente em código de máquina para um processador",
            "Criar aplicações que combina ferramentas comuns de desenvolvimento em uma única interface gráfica do usuário (GUI)"
        ],
        correctAnswer: "B) Permitir a integração entre dois sistemas, onde um fornece informações e serviços utilizados pelo outro, sem a necessidade de conhecer detalhes de implementação do software."
    },
    {
        question: `Um estudante de programação elaborou a seguinte sequência:
        <br>Faça x = 0.
        <br>Faça y = 0.
        <br>Enquanto x < 3 <br> faça:
        <br>{<br>
                y = y + x<br>
                x = x + 1<br>
            }<br>
            O valor final de x e y mostrados serão, respectivamente:`,
        options: [
            "4 e 6",
            "3 e 3",
            "3 e 4",
            "4 e 3"
        ],
        correctAnswer: "3 e 3"
    },
    {
        question: "Qual a diferença entre um objeto instanciado de uma classe e a própria classe?",
        options: [
            "Qualquer atributo de uma classe pode ser utilizado diretamente por ela. O objetivo do Objeto é descrever a estrutura com que a classe será construída.",
            "A classe é como uma forma em que os objetos podem ser instanciados, a classe não é utilizada diretamente, mas sim seus objetos instanciados.",
            "A classe e os obnjetos são a mesma coisa. A nomenclatura muda de acordo com a linguagem de programação.",
            "Classes são como contratos, isto é, não possui implementações mas depende que u objeto possa implementá-la."
        ],
        correctAnswer: "A classe é como uma forma em que os objetos podem ser instanciados, a classe não é utilizada diretamente, mas sim seus objetos instanciados."
    },
    {
        question: "O que é polimorfismo?",
        options: [
            "É quando uma classe herda os métodos de outra, a classe filha então utiliza os métodos da classe mãe",
            "É um dos princípios da Programação Funcional. Caracteriza-se por possuir funções dentro de outras funções, seu objetivo é manter o código mais organizado possível. Por exemplo: A função acelerar() de um veículo, pode ter várias implementações para cada tipo de veículo, cada um deles será representado por uma função interna de acelerar()",
            "É um dos princípios da Programação Orientada à Objetos. Caracteriza-se pela herança de classes em que a classe filha subscreve a implementação de um método da classe mãe. Por exemplo: Todo veículo possui o método acelerar(), porém deverá ser subscrito para cada  tipo de veículo.",
            "É o conceito bastante utilizado para variáveis globais em programação estrutural. Sua característica é permitir seu acesso em todos os pontos do código."
        ],
        correctAnswer: "É um dos princípios da Programação Orientada à Objetos. Caracteriza-se pela herança de classes em que a classe filha subscreve a implementação de um método da classe mãe. Por exemplo: Todo veículo possui o método acelerar(), porém deverá ser subscrito para cada  tipo de veículo."
    },
    {
        question: "O que é o método PATCH?",
        options: [
            "Um método HTTP, que indica a busca e captura de dados do Backend.",
            "É o método de acesso à camada Model do padrão MVC.",
            "É o método de requisição HTTP, que indica que os dados enviados farão uma alteração completa num registro.",
            "É o método de requisição HTTP, que indica que os dados enviados farão uma alteração parcial registro."
        ],
        correctAnswer: "É o método de requisição HTTP, que indica que os dados enviados farão uma alteração parcial registro."
    },
    {
        question: "Testes unitários quando executados, testam métodos de um programa. Assinale a alternativa que identifica ou melhor representa um benefício de se programar testes unitários?",
        options: [
            "Permitem uma maior segurança no programa, e em suas futuras manutenções. Por isso mesmo tendo de programar código a mais, ele favorece um ganho de tempo no futuro.",
            "Permitem melhor estética no código. POr ser unitário, testam o sistema inteiro como um bloco único.",
            "Seus benefícios de segurança e de estética não compensam o tempo gasto para desenvolvê-los, por isso é uma prática não muito reconhecida.",
            "São testes realizados para verificar o funcionamento adequado de métodos de um programa. Para se caracterizar testes unitários, eles devem obnrigatóriamente ser escritos antes do desenvolvimento do método testado."
        ],
        correctAnswer: "Permitem uma maior segurança no programa, e em suas futuras manutenções. Por isso mesmo tendo de programar código a mais, ele favorece um ganho de tempo no futuro."
    },
    {
        question: "O que é polimorfismo?",
        options: [
            "A) Uma técnica da programação funcional.",
            "B) Um dos princípios da programação orientada a objetos.",
            "C) Uma forma de teste que garante a funcionalidade de um sistema.",
            "D) Um método de otimização de código."
        ],
        correctAnswer: "B) Um dos princípios da programação orientada a objetos."
    },
    {
        question: "Os bancos de dados podem ser classificados em relacionais e não relacionais. Sabendo-se disso, qual dos seguintes bancos de dados é não-relacional?",
        options: [
            "MySQL",
            "PostgreSQL",
            "Oracle",
            "MongoDB"
        ],
        correctAnswer: "MongoDB"
    },
    {
        question: "Sobre o HTML é correto afirmar:",
        options: [
            "Trata-se de uma linguagem apenas de marcação, sem nenhum tipo de influência na performance ou efeito visual de uma página.",
            "É uma linguagem poderosa que permite a criaçãod e scripts, efeitos visuais e lógicas complexas, sem a necessidade de outra linguagem de programação.",
            "Trata-se de uma linguagem de marcação fundamental na construção de páginas web, que, com o auxílio de uma linguagem de folha de estilos e uma linguagem de programação, permite a criação de páginas inteligentes e estilizadas.",
            "Nenhuma das alternativas"
        ],
        correctAnswer: "Trata-se de uma linguagem de marcação fundamental na construção de páginas web, que, com o auxílio de uma linguagem de folha de estilos e uma linguagem de programação, permite a criação de páginas inteligentes e estilizadas."
    },
    {
        question: "Em bancos relacionais, o que é uma Primary Key?",
        options: [
            "É uma coluna de dados que foi criada primeiro.",
            "É uma coluna especial cuja função é a de unicamente cada registro em uma tabela.",
            "É a linha do banco de dados que foi criada primeiro.",
            "Um conjunto de colunas que garantem a integridade referencial."
        ],
        correctAnswer: "É uma coluna especial cuja função é a de unicamente cada registro em uma tabela."
    },
    {
        question: "Usando SQL, considerando a Tabela Pessoas que contém dentro dela a NomePessoa com os dados: Jorge Santos e Rebeca Silva qual das opções abaixo o delete está sendo usado corretamente para remover o Jorge Santos da tabela?",
        options: [
            "DELETE Pessoas WHERE NomePessoa = 'Rebeca Silva'",
            "DELETE FROM Pessoas WHERE 'Jorge Santos'",
            "DELETE FROM Pessoas WHERE NomePEssoa='Jorge Santos'",
            "DELETE FROM pessoas WHERE nomePessoa LIKE 'Santos';"
        ],
        correctAnswer: "DELETE FROM Pessoas WHERE NomePEssoa='Jorge Santos'"
    },
    {
        question: "Qual das propriedades a seguir não é uma propriedade do Flexbox?",
        options: [
            "order",
            "flex-flow",
            "align-itens",
            "flex-display"
        ],
        correctAnswer: "flex-display"
    },
    {
        question: "Qual das afirmações abaixo representa a alternativa correta sobre var, let e const em JavaScript?",
        options: [
            "var e let tem escopo global ou de função, enquanto const têm escopo de bloco.",
            "var tem escopo global ou de função, enquanto let e const têm escopo de bloco.",
            "const e var não podem ser redeclaradas dentro dos seus respectivos escopos.",
            "let e const podem ser declaradas novamente mas não podem ser atualizadas."
        ],
        correctAnswer: "var tem escopo global ou de função, enquanto let e const têm escopo de bloco."
    },
    {
        question: "Qual palavra-chave pode ser utilizada numa consulta ao banco de dados para eliminar repetições e selecionar valores únicos?",
        options: [
            "DISTINCT",
            "FIND",
            "UNIQUE",
            "HAVING"
        ],
        correctAnswer: "DISTINCT"
    },
    {
        question: "Diego quer almoçar fora com sua esposa, mas o mesmo sabe que possui certo valor na sua carteira para pagar o almoço de ambos e uma bebida.<br><br>Inteiro dinheiroNaCarteira = 50<br>Inteiro valorDoAlmoco = 22<br>Inteiro valorDaBebida = 6",
        options: [
            "SE {valorDoAlmoco * 2 + valorDaBebida == dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}",
            "SE {valorDoAlmoco + valorDaBebida !== dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}",
            "SE {valorDoAlmoco * 2 + valorDaBebida <= dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}",
            "SE {valorDoAlmoco + valorDaBebida * 2  == dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}"
        ],
        correctAnswer: "SE {valorDoALmoco + valorDaBebida !== dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}"
    },
    {
        question: "O que são Funções Recursivas?",
        options: [
            "Funções que envolvem dados de outras funções para serem executadas",
            "Funções que refere a si mesma, ou seja, sentro da função tem uma chamada da própria função.",
            "Funções que utilizam mais recursos do sistema (como memória).",
            "Funções que utilizam recursos de outras funções para serem executadas"
        ],
        correctAnswer: "Funções que refere a si mesma, ou seja, sentro da função tem uma chamada da própria função."
    },
    {
        question: "Com base na seguinte query, o que será retornado do banco de dados? <br>SELECT* FROM frutas WHERE nome_fruta LIKE '_B%'",
        options: [
            "Irá retornar o nome de todas as frutas que começam com a letra B.",
            "Irá retornar o nome de todas as frutas que tenham a letra B como segunda letra.",
            "Irá retornar o nome de todas a frutas que começam com_B.",
            "Irá retornar o nome de todas as frutas que possuem a letra B em qualquer posição"
        ],
        correctAnswer: "Irá retornar o nome de todas as frutas que tenham a letra B como segunda letra."
    }

    // {
    //     question: "",
    //     options: [],
    //     correctAnswer: ""
    // },
];


const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");

    shuffledQuestions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <h3>Pergunta ${index + 1}: ${question.question}</h3>
            ${question.options.map(option => `<input type="radio" name="question${index}" value="${option}">${option}<br>`).join("")}
            <hr>
        `;
        questionsContainer.appendChild(questionElement);
    });
}

function submitAnswers() {
    const scoreContainer = document.getElementById("score-container");
    const correctAnswersContainer = document.getElementById("correct-answers-container");
    let score = 0;
    let allQuestionsAnswered = true;  // Variável para verificar se todas as perguntas foram respondidas

    // Limpar o conteúdo do container de respostas corretas
    correctAnswersContainer.innerHTML = '';

    shuffledQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (!selectedOption) {
            allQuestionsAnswered = false; // Define como falso se alguma pergunta não foi respondida
            return; // Para a execução desta iteração
        }
        if (selectedOption.value === question.correctAnswer) {
            score++;
        } else {
            const correctAnswerElement = document.createElement("p");
            correctAnswerElement.innerHTML = `<strong>Pergunta ${index + 1}:</strong> A resposta correta é: ${question.correctAnswer}`;
            correctAnswerElement.style.color = 'red';
            correctAnswersContainer.appendChild(correctAnswerElement);
        }
    });

    if (!allQuestionsAnswered) {
        alert("Opa! você deixou alguma questão sem responder!"); // Alerta se houver perguntas não respondidas
        return; // Não prossegue se alguma pergunta não foi respondida
    }

    scoreContainer.innerHTML = `<h2>Sua pontuação: ${score}/${shuffledQuestions.length}</h2>`;
}

displayQuestions();