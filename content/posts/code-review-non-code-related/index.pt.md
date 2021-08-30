---
title: "Todas as coisas não relacionadas a código que eu aprendi escrevendo guidelines sobre Code Reviews"
date: "2020-10-30"
draft: false
description: Um pouco do meu processo de aprendizado fora do campo técnico
categories: ["carreira"]
tags: ["code reviews", "soft skills"]
draft: false
cover:
  image: "images/image-1.jpeg"
---

![Ilustração de uma pessoa rodeada por balões de fala](images/image-1.jpeg)

Desde que me tornei parte do time do QuintoAndar, fui apresentada a muitos processos que eu ainda não conhecia. Um deles era a revisão obrigatória de código.

Basicamente, revisar código (ou "fazer code review") significa ler o código de outra pessoa e comentar se você acha que existe um jeito melhor de resolver aquele problema, dar algumas dicas, ou até mesmo só deixar alguns elogios.

Dentro da empresa, antes de mandar nosso código para produção, precisamos de pelo menos uma aprovação — e, consequentemente, uma revisão — de outro desenvolvedor. Além disso, somos bastante encorajados pelos nossos líderes a contribuir com essa cultura. Porém, eu não sabia exatamente por onde começar, e também notei que alguns times utilizavam as ferramentas de revisão de maneira completamente diferente de outros. Nós não tínhamos padrões, não estávamos "falando a mesma língua".

Depois de conversar sobre isso com meu líder, ele me perguntou o que eu achava de fazer uma pesquisa, afim de contribuir para as nossas documentações sobre code reviews. Eu sempre fui muito aberta sobre a minha paixão por documentação de processos, e ele simplesmente juntou o útil ao agradável.

## Desenvolvendo autonomia

Como me disseram que eu poderia executar isso tudo da maneira que quisesse, me permiti ser criativa. Eu planejei este, como entendia, microprojeto, dividindo-o em quatro partes:

- Fazer uma enquete: perguntar como é nossa cultura hoje e quais sugestões a equipe de engenharia tem em mente;
- Divulgar dos resultados: construir um infográfico com as opiniões gerais dos engenheiros da empresa sobre o tema e insights valiosos;
- Começar a escrever a nova documentação e coletar feedback: criar um canal temporário para me comunicar com as pessoas que estivessem interessadas em contribuir e revisar;
- Compartilhar a documentação final com toda a equipe!

Preciso dar os créditos ao meu ex-líder técnico pelo sucesso desse processo, porque ele claramente acreditou em mim e me deu feedback honesto sempre que eu pedia. Esse tipo de atitude apenas confirma uma crença que eu tinha há algum tempo: quanto mais democrática uma liderança, mais eficaz. Ficou muito claro para mim desde o início que ele pensou nisso porque realmente queria que eu tivesse sucesso e construísse esse sentimento de pertencimento no ambiente colaborativo da empresa.

## Pondo a mão na massa

Então eu tinha um problema, uma solução e um plano claro para executar. É hora de transformá-lo em realidade. O primeiro passo foi apresentar perguntas-chave que pudessem resumir a) como nossa equipe estava trabalhando, b) como todos se sentiam a respeito e c) como poderíamos melhorar.

No dia 5 de junho, enviei uma mensagem no canal Slack dos desenvolvedores pedindo a todos que participassem da enquete. De vez em quando, eu aparecia novamente no canal para refrescar a memória do pessoal. E muita gente parecia realmente interessada no assunto: até a data de encerramento da enquete, que era 16 de junho, obtive 73 respostas. Considerando que tínhamos cerca de 200 engenheiros na época, foi uma taxa de resposta de 36,5%, o que é considerado alto para uma empresa com tantas pessoas.

Rodada 1 - concluída! Agora, para a próxima etapa: compilar as respostas e obter insights.

## Prova de Conceito

![Ilustração com fundo verde, um homem e uma mulher virados de costas olhando para uma seta branca](images/image-2.jpeg)

Na época, eu estava lendo um livro sobre como a desigualdade de gênero intoxicava a indústria de tecnologia. Vale ressaltar também que entrei na empresa por meio de um programa de contratação exclusivo para mulheres que eles abriram. Logo, eu sabia que precisava confirmar minha hipótese de que as mulheres não estavam se sentindo seguras o suficiente para dar sua opinião sobre o código de seus pares.

Embora o formulário fosse anônimo, eu cuidadosamente perguntei o sexo dos entrevistados e se eles se sentiam seguros durante a dinâmica de revisão do código. Desde o início, meu objetivo era provar uma correlação entre esses dois pontos. Eu não queria excluir ninguém, então as opções de gênero eram "masculino", "feminino", "não binário", um campo aberto "outro" e "Prefiro não responder".

Entre os respondentes, 49 eram do gênero masculino, 21 do feminino e 3 optaram por não responder. O resultado foi exatamente o que eu esperava. Como um todo, 54,8% da equipe disseram que se sentiam seguros ao revisar o código de outras pessoas. Porém, quando filtradas por gênero, 81% das mulheres disseram que não, não se sentiam seguras fazendo isso.

Fomos criados em uma sociedade que diz às meninas para não correrem riscos, ficarem quietas e não confrontarem as convicções dos homens. Como podemos esperar que, de repente, as programadoras do sexo feminino simplesmente comecem a "apontar o dedo" para o código de seus colegas, escritos principalmente por homens? 

**Contratar mulheres é parte da inclusão, mas fazer com que se sintam parte da empresa e permaneçam até o mês seguinte é outra história**. Precisamos assumir a responsabilidade por isso e agir o mais rápido possível. Isso é o que tentei provar, fazendo uso de uma enquete simples sobre revisões de código.

## As pessoas são diferentes

Falar sobre revisões de código é falar sobre comunicação humana. Em cada pessoa, existe uma bagagem que você desconhece completamente.

Pode ser frustrante quando você passa horas, ou talvez dias, se desdobrando para encontrar a melhor maneira de resolver um problema. Daí outra pessoa surge do nada dizendo que é realmente muito simples e pode ser resolvido com uma única linha de código, certo?

O revisor e o avaliado precisam entender que ambos estão fazendo o melhor para ajudar e entregar um bom produto. O avaliado precisa ser humilde sobre seu código e entender que sempre haverá alguém - mesmo com um nível de senioridade mais baixo - que sabe mais sobre um determinado tópico. Na verdade, é mais seguro presumir que nunca saberemos tudo sobre nada. Ao passo que o revisor precisa transmitir claramente suas percepções sobre o código e talvez apresentar algumas sugestões. Você nunca sabe como a pessoa que recebe a avaliação interpretará o que você disse. Temos emojis no Markdown para adicionar um pouco de sentimento aos nossos comentários no Github, mas definitivamente não é a mesma coisa que falar cara a cara.

Além disso, como mencionado antes, as pessoas têm suas próprias bagagens. Pessoas autistas, por exemplo, tendem a ter muita dificuldade em interpretar sarcasmo, então, sempre se deve levar seus comentários a sério e entender que isso é a sua documentação, afinal. **Tudo o que alguém coloca no Github ou em qualquer ferramenta de controle de versão é o histórico da sua aplicação e deve ser tratado como tal**.

## Feedback contínuo: amor à primeira vista

![Ilustração com fundo azul escuro, 5 rostos indo de um mais feliz para um mais triste](images/image-3.png)

Ao longo da minha carreira, indo de empresa em empresa, senti que em geral não havia uma cultura de dar feedback constante aos colegas de trabalho. Pelo menos eu não estava recebendo nenhum. No entanto, mudou agora por dois motivos principais: 1) amadureci o suficiente para entender que me sinto muito mais motivada quando ouço o que as pessoas têm a dizer sobre meu trabalho e como posso melhorar, e 2) a empresa em que estou entendeu isso também.

Depois de compartilhar os resultados da pesquisa, muitos colegas de trabalho me disseram como se sentiam com relação aos números e às respostas. Coisas que não imaginavam que estavam acontecendo. Perguntas importantes que, por algum motivo, ninguém nunca perguntou. Até aquele momento. *Eu me senti orgulhosa do meu trabalho*. E tenho certeza de que esse era o objetivo do meu líder técnico desde o início.

Em seguida, reuni essas mesmas pessoas que participaram da enquete e criei um canal temporário no Slack para que comentassem sobre a primeira versão do documento. Em algo em torno de um mês, estava cheia de comentários. Da correção gramatical a extensas considerações sobre o Código Limpo, essas pessoas me ajudaram a alcançar meu objetivo.

Tornei-me uma escritora melhor, uma melhor desenvolvedora e uma melhor revisora de código! E o que eu quero que a equipe de engenharia da empresa tire das diretrizes que escrevi é isso mesmo - talvez não a parte do "escritora".

## Principais conclusões

Passei cerca de quatro meses criando um documento que espero melhorar a maneira como compartilhamos conhecimento técnico dentro da empresa, e me diverti muito ao fazê-lo. Eu vi como é benéfico não apenas dizer que você quer que sua equipe se sinta parte de um todo, mas demonstrar isso com ações. As mulheres líderes de tecnologia também agendaram reuniões com todas as meninas da área, e deram início a novas iniciativas para diminuir a desigualdade de gênero que ainda temos dentro da empresa.

Quando você permite que alguém seja criativo, está dizendo que confia em seu julgamento. Você os reconhece e cria uma equipe autônoma que considera um desafio enfrentar um obstáculo.

Revisar código é sobre aprendizado e ensino. É uma questão de comunicação e feedback. Afinal, somos seres humanos e queremos nos sentir validados. Queremos ouvir que estamos fazendo um bom trabalho e sermos reconhecidos por isso, ou às vezes queremos apenas a ajuda de alguém. "Revisão de código", este tópico técnico, é muito mais profundo do que se poderia pensar à primeira vista. É crucial que consideremos como nossos vieses inconscientes influenciam tarefas diárias mínimas e como podemos começar a construir um ambiente psicologicamente seguro.

Me lembro da época da faculdade, quando tínhamos aulas de gramática e alguns de meus colegas discutiam sobre como isso não tinha nada a ver com o desenvolvimento de sistemas. Naquela época, eu poderia ter concordado, mas como sempre fui apaixonado por escrever - antes de pensar em tecnologia, eu queria ser jornalista -, isso não me incomodava tanto. A situação mudou, no entanto, e essas habilidades básicas, como comunicação e empatia, estão se tornando cada vez mais vitais para os programadores, assim como ter um bom conhecimento de sua linguagem de programação favorita.
