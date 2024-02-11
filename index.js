const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "let",
        "var",
        "const"
      ],
      correta: 2 // Resposta correta é "const"
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "concat()"
      ],
      correta: 0 // Resposta correta é "push()"
    },
    {
      pergunta: "Qual dessas declarações é usada para interromper a execução de um loop em JavaScript?",
      respostas: [
        "exit",
        "break",
        "stop"
      ],
      correta: 1 // Resposta correta é "break"
    },
    {
      pergunta: "Qual é a saída do seguinte código JavaScript: console.log(typeof [])?",
      respostas: [
        "object",
        "array",
        "undefined"
      ],
      correta: 0 // Resposta correta é "object"
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
      ],
      correta: 0 // Resposta correta é "pop()"
    },
    {
      pergunta: "Qual dessas opções é um operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 0 // Resposta correta é "="
    },
    {
      pergunta: "Em JavaScript, qual dos seguintes tipos de dados é conhecido como 'falsy'?",
      respostas: [
        "null",
        "string",
        "number"
      ],
      correta: 0 // Resposta correta é "null"
    },
    {
      pergunta: "Qual é o resultado de '5' + 3 em JavaScript?",
      respostas: [
        "8",
        "53",
        "TypeError"
      ],
      correta: 1 // Resposta correta é "53"
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()"
      ],
      correta: 0 // Resposta correta é "parseInt()"
    },
    {
      pergunta: "Qual dos seguintes é um exemplo de um laço de repetição em JavaScript?",
      respostas: [
        "for-each",
        "while",
        "if-else"
      ],
      correta: 1 // Resposta correta é "while"
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent= item.pergunta
    
    for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent= resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)  
    }
    
  quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }