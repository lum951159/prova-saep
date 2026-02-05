# SAEP - Sistema de Avaliação Educacional

## 📋 Descrição do Projeto

Sistema de avaliação de provas estilo SAEP desenvolvido com **HTML e CSS puro** (sem JavaScript), contendo:
- Página de login com validação de CPF e senha
- 10 questões de múltipla escolha (uma por página)
- Navegação entre questões
- Barra de progresso
- Página de resultado final

## 🎨 Características do Design

### Paleta de Cores
- **Laranja Principal**: #FF6B35
- **Cinza Escuro**: #2C3E50
- **Cinza Médio**: #5A6C7D
- **Cinza Claro**: #BDC3C7
- **Branco**: #FFFFFF
- **Fundo**: #F5F6F8

### Funcionalidades

1. **Página de Login** (`login.html`)
   - Validação de CPF no formato: 000.000.000-00
   - Validação de senha: mínimo 8 caracteres com maiúsculas, minúsculas e números
   - Feedback visual para campos válidos/inválidos

2. **Páginas de Questões** (`questao-01.html` até `questao-10.html`)
   - Uma questão por página
   - Navegador lateral com todas as questões
   - Barra de progresso no topo
   - Timer simulado
   - Informações do candidato no cabeçalho
   - Botões de navegação (Voltar/Salvar e Avançar)

3. **Página de Resultado** (`resultado.html`)
   - Confirmação de conclusão
   - Resumo da avaliação
   - Informações sobre resultado

## 📁 Estrutura de Arquivos

```
saep-sistema/
│
├── login.html          # Página inicial de login
├── questao-01.html     # Questão 1 - Lógica de Programação
├── questao-02.html     # Questão 2 - Estruturas de Dados
├── questao-03.html     # Questão 3 - Banco de Dados
├── questao-04.html     # Questão 4 - POO
├── questao-05.html     # Questão 5 - Algoritmos
├── questao-06.html     # Questão 6 - Redes de Computadores
├── questao-07.html     # Questão 7 - Engenharia de Software
├── questao-08.html     # Questão 8 - Segurança da Informação
├── questao-09.html     # Questão 9 - Sistemas Operacionais
├── questao-10.html     # Questão 10 - Desenvolvimento Web
├── resultado.html      # Página de conclusão
├── styles.css          # Arquivo CSS principal
└── README.md           # Este arquivo
```

## 🚀 Como Utilizar

1. **Abrir o sistema**
   - Abra o arquivo `login.html` em qualquer navegador web moderno

2. **Fazer Login**
   - CPF deve estar no formato: 000.000.000-00 (11 dígitos)
   - Senha deve ter no mínimo 8 caracteres com:
     - Pelo menos uma letra maiúscula
     - Pelo menos uma letra minúscula
     - Pelo menos um número
   - Exemplo válido:
     - CPF: 123.456.789-00
     - Senha: Senha123

3. **Responder as Questões**
   - Selecione uma alternativa para cada questão
   - Use o botão "Salvar e Avançar" para ir para a próxima questão
   - Use o botão "Voltar" para retornar à questão anterior
   - Use o navegador lateral para pular para qualquer questão

4. **Finalizar**
   - Na última questão (10), clique em "Finalizar Avaliação"
   - Você será direcionado para a página de resultado

## 🎯 Categorias das Questões

1. **Questão 1**: Lógica de Programação
2. **Questão 2**: Estruturas de Dados
3. **Questão 3**: Banco de Dados
4. **Questão 4**: Programação Orientada a Objetos
5. **Questão 5**: Algoritmos
6. **Questão 6**: Redes de Computadores
7. **Questão 7**: Engenharia de Software
8. **Questão 8**: Segurança da Informação
9. **Questão 9**: Sistemas Operacionais
10. **Questão 10**: Desenvolvimento Web

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## ⚙️ Validações Implementadas

### Login
- **CPF**: 
  - Pattern: `\d{3}\.\d{3}\.\d{3}-\d{2}`
  - Máximo 14 caracteres
  - Formato obrigatório com pontos e hífen

- **Senha**:
  - Mínimo 8 caracteres
  - Pattern: `(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`
  - Requer: maiúscula, minúscula e número

### Questões
- Seleção de resposta obrigatória (`required`)
- Navegação funcionando apenas através dos formulários

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização com Flexbox e Grid
- **Sem JavaScript**: Apenas HTML e CSS puros

## 📝 Observações Importantes

1. **Sistema Estático**: Este é um frontend estático sem integração com backend ou banco de dados
2. **Dados Simulados**: Todas as informações (timer, nome do candidato, etc.) são estáticas
3. **Validação de Formulário**: Utiliza validação HTML5 nativa
4. **Navegação**: Funciona através de links e submissão de formulários
5. **Futuras Implementações**: Para tornar funcional, será necessário:
   - Backend em Node.js, PHP, Python, etc.
   - Banco de dados (MySQL, PostgreSQL, MongoDB)
   - JavaScript para timer real e validações dinâmicas
   - API para gerenciar respostas e autenticação

## 🎓 Propósito Educacional

Este projeto foi desenvolvido para fins educacionais como parte de um roteiro de testes de interface. O sistema demonstra:
- Boas práticas de HTML semântico
- CSS organizado com variáveis
- Design responsivo
- Interface de usuário profissional
- Experiência de usuário fluida

## 📄 Licença

Projeto educacional - Livre para uso e modificação.

---

**Desenvolvido com HTML e CSS puro** | Sistema SAEP 2024
