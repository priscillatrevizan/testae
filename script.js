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
        question: "Qual seria o resultado da função?  <br> função inteiro soma (inteiro a, inteiro b) {<br> a+b<br> }",
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
        correctAnswer: "Trata-se de uma série de bibliotecas e classes, ou seja, códigos prontos, que oderecem alguma funcionalidade específica. Em outras palavras é um padrão que pode ser incorporado a sistemas para agilizar a codificação de certas partes"
    },
    {
        question: "Qual a função de uma API?",
        options: [
            "Definir a estrutura lógica dos documentos em forma de árvore, a qual guia o navegador na representação e manipulação dos componentes da página.",
            "Permitir a integração entre dois sistemas, em um deles fornece informações e servilços que podem ser utilizados pelo outro, sem a necessidade de algum dos sistemas conhecer detalhes de implementação de software",
            "Traduz um programa descrito em uma linguagem de alto nível para um programa equivalente em código de máquina para um processador",
            "Criar aplicações que combina ferramentas comuns de desenvolvimento em uma única interface gráfica do usuário (GUI)"
        ],
        correctAnswer: "Permitir a integração entre dois sistemas, em um deles fornece informações e servilços que podem ser utilizados pelo outro, sem a necessidade de algum dos sistemas conhecer detalhes de implementação de software"
    },
    {
        question: `Um estudante de programação elaborou a seguinte sequência:
        <br>Faça x = 0.
        <br>Faça y = 0.
        <br>Enquanto x < 3 
        <br>faça:
        <br>{<br>
            &nbsp;&nbsp;&nbsp;&nbsp;y = y + x<br>
            &nbsp;&nbsp;&nbsp;&nbsp;x = x + 1<br>
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
            "DELETE FROM Pessoas WHERE NomePessoa='Jorge Santos'",
            "DELETE FROM pessoas WHERE nomePessoa LIKE 'Santos';"
        ],
        correctAnswer: "DELETE FROM Pessoas WHERE NomePessoa='Jorge Santos'"
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
        correctAnswer: "SE {valorDoAlmoco * 2 + valorDaBebida <= dinheiroNaCarteira} {ESCREVA {*Minha esposa foi almoçar comigo.*}}"
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
    },
    {
        question: "Qual é a principal função do protocolo TCP/IP na internet?",
        options: [
            "Controlar o tráfego de dados entre servidores.",
            "Garantir a segurança dos dados transmitidos.",
            "Padronizar a estrutura dos cabos de rede.",
            "Facilitar a comunicação entre dispositivos em uma rede."
        ],
        correctAnswer: "Facilitar a comunicação entre dispositivos em uma rede."
    },
    {
        question: "Qual é a principal característica de um banco de dados NoSQL?",
        options: [
            "Armazenamento de dados apenas em formato XML.",
            "Uso exclusivo de linguagem SQL para consultas.",
            "Estrutura flexível para armazenamento de dados não relacionais.",
            "Garantia de consistência ACID (Atomicidade, Consistência, Isolamento, Durabilidade)."
        ],
        correctAnswer: "Estrutura flexível para armazenamento de dados não relacionais."
    },
    {
        question: "O que é uma User Story (História do Usuário) em metodologias ágeis?",
        options: [
            "Um diagrama que representa a interação do usuário com um sistema.",
            "Um conjunto de requisitos técnicos para desenvolvimento de software.",
            "Uma descrição curta de uma funcionalidade do ponto de vista do usuário.",
            "Um método para mapear a jornada do usuário em um produto."
        ],
        correctAnswer: "Uma descrição curta de uma funcionalidade do ponto de vista do usuário."
    },
    {
        question: "O que é um ataque de força bruta?",
        options: [
            "Um ataque que utiliza métodos de engenharia social para acessar dados confidenciais.",
            "Um ataque que compromete sistemas de segurança baseados em autenticação de dois fatores.",
            "Um ataque que explora vulnerabilidades de software para ganhar acesso não autorizado.",
            "Um ataque que tenta descobrir uma senha através de tentativas repetidas."
        ],
        correctAnswer: "Um ataque que tenta descobrir uma senha através de tentativas repetidas."
    },
    {
        question: "Qual é o objetivo principal da prática de Continuous Deployment (Implantação Contínua)?",
        options: [
            "Automatizar a integração de código entre diferentes equipes de desenvolvimento.",
            "Garantir a segurança dos servidores de produção.",
            "Automatizar o processo de implantação de código em ambientes de produção.",
            "Monitorar constantemente o desempenho de uma aplicação em produção."
        ],
        correctAnswer: "Automatizar o processo de implantação de código em ambientes de produção."
    },
    {
        question: "O que é um nó folha em uma árvore binária?",
        options: [
            "Um nó sem filhos.",
            "O nó central de uma árvore.",
            "Um nó com apenas um filho.",
            "O último nó inserido na árvore."
        ],
        correctAnswer: "Um nó sem filhos."
    },
    {
        question: "O que é DOM (Document Object Model)?",
        options: [
            "Um modelo de interação de usuários com um site.",
            "Uma linguagem de programação para desenvolvimento web.",
            "Uma representação estruturada dos elementos de uma página web.",
            "Uma técnica para criar animações em páginas web."
        ],
        correctAnswer: "Uma representação estruturada dos elementos de uma página web."
    }, {
        question: "Sobre o HTML, é correto afirmar:",
        options: [
            "Trata-se de uma linguagem apenas de marcação, sem influência na performance ou efeito visual de uma página.",
            "É uma linguagem poderosa que permite a criação de páginas web dinâmicas, utilizando funcionalidades de banco de dados e interações complexas.",
            "É uma linguagem de programação que possui loops, condições e estruturas semelhantes a outras linguagens como JavaScript e Python.",
            "É uma linguagem de marcação usada para estruturar e apresentar o conteúdo na web, mas não permite interações complexas."
        ],
        correctAnswer: "É uma linguagem de marcação usada para estruturar e apresentar o conteúdo na web, mas não permite interações complexas."
    },
    {
        question: "Qual é a finalidade do encapsulamento em Orientação a Objetos?",
        options: [
            "Garantir que um objeto possa ser acessado apenas por outros objetos da mesma classe.",
            "Esconder a implementação interna de um objeto e permitir o acesso controlado aos seus dados.",
            "Manter a abstração de um objeto completamente protegida contra alterações.",
            "Evitar a criação de métodos em classes que possam ser acessados por outras classes."
        ],
        correctAnswer: "Esconder a implementação interna de um objeto e permitir o acesso controlado aos seus dados."
    },
    {
        question: "Qual a principal diferença entre os métodos GET e POST?",
        options: [
            "GET é utilizado para enviar dados sensíveis ao servidor, enquanto POST é utilizado para obter informações do servidor.",
            "GET envia dados ao servidor enquanto POST solicita informações do servidor.",
            "GET é mais seguro que o POST pois usa criptografia nos dados enviados.",
            "GET é utilizado para recuperar dados do servidor, enquanto POST é utilizado para enviar dados ao servidor."
        ],
        correctAnswer: "GET é utilizado para recuperar dados do servidor, enquanto POST é utilizado para enviar dados ao servidor."
    },
    {
        question: "O que é escopo em uma função?",
        options: [
            "É a visibilidade de uma variável dentro de um loop.",
            "É o tempo de vida de uma variável dentro de uma função.",
            "É a visibilidade de uma variável dentro de uma função, determinando onde a variável pode ser acessada.",
            "É a quantidade de memória alocada para uma variável dentro de uma função."
        ],
        correctAnswer: "É a visibilidade de uma variável dentro de uma função, determinando onde a variável pode ser acessada."
    },
    {
        question: "O que é um 'commit' no Git?",
        options: [
            "Um repositório remoto para onde os arquivos são enviados.",
            "Uma versão específica de um arquivo no histórico do Git.",
            "Uma cópia dos arquivos para backup.",
            "Uma operação que adiciona todos os arquivos do repositório ao Git."
        ],
        correctAnswer: "Uma versão específica de um arquivo no histórico do Git."
    },
    {
        question: "O que é criptografia assimétrica?",
        options: [
            "Um método de criptografia onde a mesma chave é usada tanto para criptografar quanto para descriptografar os dados.",
            "Uma técnica de criptografia onde uma chave privada é usada para criptografar e uma chave pública é usada para descriptografar.",
            "Um processo de criptografia onde a chave de criptografia é transmitida junto com a mensagem criptografada.",
            "Uma técnica de criptografia usada apenas para textos pequenos."
        ],
        correctAnswer: "Uma técnica de criptografia onde uma chave privada é usada para criptografar e uma chave pública é usada para descriptografar."
    },
    {
        question: "Qual é o objetivo dos testes de integração em um software?",
        options: [
            "Testar cada módulo de um sistema isoladamente.",
            "Garantir que cada parte do sistema funciona corretamente individualmente.",
            "Verificar se as interações entre diferentes partes do sistema funcionam conforme o esperado.",
            "Testar a interface do usuário para garantir que seja intuitiva e fácil de usar."
        ],
        correctAnswer: "Verificar se as interações entre diferentes partes do sistema funcionam conforme o esperado."
    },
    {
        question: "Qual é a função do comando SQL SELECT?",
        options: [
            "Inserir novos registros em uma tabela.",
            "Atualizar registros existentes em uma tabela.",
            "Selecionar dados de uma tabela ou conjunto de tabelas.",
            "Excluir registros de uma tabela."
        ],
        correctAnswer: "Selecionar dados de uma tabela ou conjunto de tabelas."
    },
    {
        question: "O que é herança em Programação Orientada a Objetos?",
        options: [
            "Uma técnica que permite criar classes a partir de outras classes existentes, herdando atributos e métodos da classe original.",
            "Uma técnica que permite a criação de objetos a partir de outras instâncias.",
            "Uma técnica para criar métodos e atributos em classes baseadas em heranças de funções.",
            "Um processo para reescrever a implementação de uma classe em outra linguagem de programação."
        ],
        correctAnswer: "Uma técnica que permite criar classes a partir de outras classes existentes, herdando atributos e métodos da classe original."
    },
    {
        question: "O que são os métodos HTTP PUT e PATCH?",
        options: [
            "PUT é usado para alterar um dado completo e PATCH altera o dado parcialmente.",
            "PUT altera o dado parcialmente e PATCH é usado para alterar um dado completo.",
            "Ambos são usados para alterar dados completos.",
            "Ambos são usados para alterar dados parciais."
        ],
        correctAnswer: "PUT é usado para alterar um dado completo e PATCH altera o dado parcialmente."
    },
    {
        question: "Qual seria o resultado da função: função inteiro soma (inteiro a, inteiro b) { a+b }?",
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
            "Trata-se de uma série de bibliotecas e classes, ou seja, códigos prontos, que oferecem alguma funcionalidade específica.",
            "É uma linguagem formal que funciona por meio de uma série de instruções, símbolos, palavras-chave, regras semânticas e sintáticas.",
            "São conjuntos de arquivos relacionados entre si, com registros sobre pessoas, lugares ou informações em geral.",
            "Trata-se de uma interface de programação que os navegadores utilizam para representar páginas na web."
        ],
        correctAnswer: "Trata-se de uma série de bibliotecas e classes, ou seja, códigos prontos, que oferecem alguma funcionalidade específica."
    },
    {
        question: "Qual a diferença entre um objeto instanciado de uma classe e a própria classe?",
        options: [
            "Qualquer atributo de uma classe pode ser utilizado diretamente por ela. O objetivo do Objeto é descrever a estrutura com que a classe será construída.",
            "A classe é como uma forma em que os objetos podem ser instanciados, a classe não é utilizada diretamente, mas sim seus objetos instanciados.",
            "A classe e os objetos são a mesma coisa. A nomenclatura muda de acordo com a linguagem de programação.",
            "Classes são como contratos, isto é, não possuem implementações, mas dependem que um objeto possa implementá-las."
        ],
        correctAnswer: "A classe é como uma forma em que os objetos podem ser instanciados, a classe não é utilizada diretamente, mas sim seus objetos instanciados."
    },
    {
        question: "O que é polimorfismo?",
        options: [
            "É quando uma classe herda os métodos de outra, a classe filha então utiliza os métodos da classe mãe.",
            "É um dos princípios da Programação Funcional. Caracteriza-se por possuir funções dentro de outras funções, mantendo o código mais organizado.",
            "É um dos princípios da Programação Orientada a Objetos. Caracteriza-se pela herança de classes onde a classe filha sobrescreve a implementação de um método da classe mãe.",
            "É o conceito bastante utilizado para variáveis globais em programação estrutural, permitindo seu acesso em todos os pontos do código."
        ],
        correctAnswer: "É um dos princípios da Programação Orientada a Objetos. Caracteriza-se pela herança de classes onde a classe filha sobrescreve a implementação de um método da classe mãe."
    },
    {
        question: "O que é o método PATCH em requisições HTTP?",
        options: [
            "Um método HTTP que indica a busca e captura de dados do Backend.",
            "É o método de acesso à camada Model do padrão MVC.",
            "É o método de requisição HTTP que indica que os dados enviados farão uma alteração completa num registro.",
            "É o método de requisição HTTP que indica que os dados enviados farão uma alteração parcial num registro."
        ],
        correctAnswer: "É o método de requisição HTTP que indica que os dados enviados farão uma alteração parcial num registro."
    },
    {
        question: "Qual é um benefício de se programar testes unitários?",
        options: [
            "Permitem uma maior segurança no programa e em suas futuras manutenções, mesmo tendo de programar código adicional.",
            "Permitem melhor estética no código, testando o sistema inteiro como um bloco único.",
            "Seus benefícios de segurança e estética não compensam o tempo gasto para desenvolvê-los, por isso é uma prática não muito reconhecida.",
            "São testes realizados para verificar o funcionamento adequado de métodos de um programa e devem ser escritos antes do desenvolvimento do método testado."
        ],
        correctAnswer: "Permitem uma maior segurança no programa e em suas futuras manutenções, mesmo tendo de programar código adicional."
    },
    {
        question: "O que é polimorfismo?",
        options: [
            "Uma técnica da programação funcional.",
            "Um dos princípios da programação orientada a objetos.",
            "Uma forma de teste que garante a funcionalidade de um sistema.",
            "Um método de otimização de código."
        ],
        correctAnswer: "Um dos princípios da programação orientada a objetos."
    },
    {
        question: "Sabendo-se que os bancos de dados podem ser classificados em relacionais e não relacionais, qual dos seguintes bancos de dados é não-relacional?",
        options: [
            "MySQL",
            "PostgreSQL",
            "Oracle",
            "MongoDB"
        ],
        correctAnswer: "MongoDB"
    },
    {
        question: "Quais são todos os estados possíveis que um tipo lógico pode assumir?",
        options: [
            "Verdadeiro, Duvidoso",
            "Falso, Duvidoso, Verdadeiro",
            "Incerto, Certo",
            "Verdadeiro, Falso",
            "Verdadeiro, Errado"
        ],
        correctAnswer: "Verdadeiro, Falso"
    },
    {
        question: "Observe a tabela-verdade a seguir e responda:<br><br>Operando A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Operando B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resultado<br>F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F<br>F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V<br>V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V<br>V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;V<br><br>A qual operação lógica essa tabela-verdade se refere?",
        options: [
            "AND",
            "XOR",
            "NOT",
            "NAND",
            "OR"
        ],
        correctAnswer: "OR"
    },
    {
        question: "Qual dos seguintes itens é melhor representado por um valor constante em um algoritmo?",
        options: [
            "Salário de um Funcionário",
            "Valor da Temperatura no final de semana",
            "Valor matemático de Pi",
            "Distância da Terra à Lua",
            "Velocidade de um carro em movimento"
        ],
        correctAnswer: "Valor matemático de Pi"
    },
    {
        question: "É possível ordenar valores numéricos já armazenados em um vetor de números decimais?",
        options: [
            "Não, somente é possível ter valores em ordem se os valores forem inseridos em ordem",
            "Sim, mas somente se os números forem inteiros. Números decimais não podem ser ordenados",
            "Sim, mas para isso é necessário usar um algoritmo para ordenação de vetores",
            "Vetores não permitem o armazenamento de números decimais, somente números reais",
            "Não, não é possível ordenar valores já armazenados em um vetor em nenhuma hipótese"
        ],
        correctAnswer: "Sim, mas para isso é necessário usar um algoritmo para ordenação de vetores"
    },
    {
        question: "Qual a diferença entre os operadores lógicos E (AND) e OU (OR)?",
        options: [
            "AND retorna V apenas se todas as expressões de entrada forem verdadeiras, e o OR retorna V se ao menos uma delas for verdadeira",
            "OR retorna V apenas se todas as expressões de entrada forem verdadeiras, e o AND retorna V se ao menos uma delas for verdadeira",
            "AND retorna F apenas se todas as expressões de entrada forem verdadeiras, e o OR retorna F se ao menos uma das expressões de entrada for verdadeira",
            "AND retorna F apenas se todas as expressões de entrada forem verdadeiras, e o OR retorna F se todas as expressões de entrada forem verdadeiras",
            "OR retorna V apenas se todas as expressões de entrada forem falsas, e o AND retorna V se ao menos uma delas for verdadeira"
        ],
        correctAnswer: "AND retorna V apenas se todas as expressões de entrada forem verdadeiras, e o OR retorna V se ao menos uma delas for verdadeira"
    },
    {
        question: "Qual dos seguintes é um operador de concatenação de strings válido?",
        options: [
            "+",
            "*",
            "→",
            ";",
            "\" \""
        ],
        correctAnswer: "+"
    },
    {
        question: `Observe atentamente o algoritmo a seguir:<br>
    <br>var<br>   
    &nbsp;&nbsp;num : inteiro<br>
    &nbsp;&nbsp;&nbsp;início<br>   
    &nbsp;&nbsp;&nbsp;&nbsp;num <- 1<br>   
    &nbsp;&nbsp;&nbsp;&nbsp;enquanto (num <= 10) faça<br>     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;escreval (num)<br>     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num <- num += 0<br>   
    &nbsp;&nbsp;&nbsp;&nbsp;fimenquanto<br>   
    &nbsp;&nbsp;&nbsp;&nbsp;se (num > 10) entao<br>     
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;escreva(num)<br>   
    &nbsp&nbsp;&nbsp;fimse<br>fimalgoritmo<br>
    <br>Esse algoritmo possui um erro, que erro é esse?`,
        options: [
            "Loop Truncado",
            "Loop Infinito",
            "Erro de Compilação",
            "Bloco SE sem SENAO",
            "Declaração das Variáveis"
        ],
        correctAnswer: "Loop Infinito"
    },
    {
        question: "Marque a alternativa que NÃO caracteriza uma etapa do processo de compilação.",
        options: [
            "Análise Sintática: realiza a análise da estrutura gramatical do código-fonte e constrói uma árvore de análise sintática.",
            "Análise Léxica: responsável por identificar os diferentes tokens no código-fonte, como palavras-chave, identificadores e operadores.",
            "Análise Semântica: verifica a conformidade do código-fonte com as regras da linguagem e realiza otimizações para melhorar o desempenho.",
            "Geração de Código: traduz a representação intermediária em código de máquina específico da plataforma de destino.",
            "Otimização de Código: aplica técnicas para melhorar a eficiência do código gerado pelo compilador, como eliminação de código redundante e reordenamento de instruções."
        ],
        correctAnswer: "Análise Semântica: verifica a conformidade do código-fonte com as regras da linguagem e realiza otimizações para melhorar o desempenho."
    },
    {
        question: "O resultado da expressão lógica ! (6 != 18/3 || true && 3 - 9 > 12 - 6 || true) é:",
        options: [
            "6",
            "-6",
            "false",
            "&&",
            "true"
        ],
        correctAnswer: "false"
    },
    {
        question: "A _________ ocorre quando se armazena um valor em uma variável; quando deseja-se um desvio no fluxo de nosso código baseado em uma condição booleana, usa-se o comando _________; para realizar uma repetição de instrução, pode-se usar a instrução _________; a fim de não repetir códigos, tem a possibilidade de fazer uso de _________; por fim, para interromper um laço de repetição de forma abrupta, usa-se __________. Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
        options: [
            "composição – if – do-while – funções – break",
            "atribuição – test – repetir – funções – parar",
            "atribuição – if – do-while – funções – break",
            "persistência – test – for – métodos – stop",
            "persistência – if – for – métodos – stop"
        ],
        correctAnswer: "atribuição – if – do-while – funções – break"
    },
    {
        question: "São tipos de estruturas de controle de seleção utilizadas na construção de algoritmos, EXCETO:",
        options: [
            "Sequencial.",
            "Encadeada.",
            "Simples.",
            "Composta.",
            "Múltipla escolha."
        ],
        correctAnswer: "Sequencial."
    },
    {
        question: "Num determinado código de programação, foi encontrada a expressão booleana “( A or B) and (A or C)”. Como essa expressão poderia ser reescrita para se obter um código mais eficiente, com um menor número de operações?",
        options: [
            "A or B or C",
            "A or (B and C)",
            "A and B or C",
            "A and B and C",
            "( A or B ) and C"
        ],
        correctAnswer: "A or (B and C)"
    },
    {
        question: "Os tipos de dados são essenciais na programação, determinando como os valores são armazenados e manipulados. Eles definem os conjuntos de valores e as operações possíveis, desempenhando um papel fundamental na comunicação entre programadores e computadores. Entender os tipos de dados é crucial para criar programas funcionais e robustos.<br><br>Sobre os tipos de dados, analise as assertivas a seguir.<br><br>I. Tipos inteiros armazenam valores que pertencem ao conjunto dos números naturais, sem a parte fracionária.<br>II. Tipos numéricos com a parte fracionária são definidos como reais.<br>III. Tipos caracteres permitem armazenar um único caractere.<br><br>É correto o que se afirma em",
        options: [
            "I apenas.",
            "II apenas.",
            "III apenas.",
            "II e III apenas.",
            "I, II e III."
        ],
        correctAnswer: "I, II e III."
    },
    {
        question: "Os testes de condições desempenham um papel crucial na programação, possibilitando que os programas efetuem escolhas e ações com base em circunstâncias específicas. Essas estruturas condicionais permitem o controle do fluxo de execução do código, contribuindo para a criação de lógica, interatividade e automação em aplicações de software. Assim, a compreensão e o domínio dos testes de condições representam competências essenciais para os programadores no contexto acadêmico e profissional.<br><br>Levando em consideração os testes de condições, pode-se afirmar que",
        options: [
            "a condição if-else é avaliada e, caso seja verdadeira, é executada a instrução associada ao else.",
            "if-else não pode ser executado de forma encadeada.",
            "a componente else do if é obrigatória.",
            "if-else permite a existência de instruções que não são executadas em um programa.",
            "um teste de condição pode ser realizado através da instrução while."
        ],
        correctAnswer: "a condição if-else é avaliada e, caso seja verdadeira, é executada a instrução associada ao else."
    },
    {
        question: "É uma metodologia visualmente amigável e com um objetivo prático para o ensino dos conceitos iniciais ligados à programação, desenvolvimento de softwares/aplicativos e lógica de uma forma geral.<br><br>FONTE: https://microcamp.com.br/<br><br>Marque a alternativa correta que corresponde à descrição apresentada:",
        options: [
            "Pensamento computacional.",
            "Programação em blocos.",
            "Programação textual.",
            "Programação orientada a objetos.",
            "Programação lista de instruções."
        ],
        correctAnswer: "Programação em blocos."
    },
    {
        question: "Quanto à lógica de programação, analise as assertivas abaixo e assinale a alternativa correta.",
        options: [
            "Todas as assertivas estão corretas.",
            "Todas as assertivas estão incorretas.",
            "Apenas a assertiva I está correta.",
            "Apenas as assertivas I e II estão corretas.",
            "Apenas as assertivas III e IV estão corretas."
        ],
        correctAnswer: "Apenas as assertivas III e IV estão corretas."
    },
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
            ${question.options.map(option => `
				<input type="radio" id="${option}" name="question${index}" value="${option}">
				<label for="${option}">${option}</label><br>
				`).join("")}
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