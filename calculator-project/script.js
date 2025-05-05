// Obter os elementos do DOM
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Função para lidar com os cliques nos botões
function handleClick(event) {
    const button = event.target;
    const value = button.textContent;

    // Lidar com os números
    if (!isNaN(value)) {
        display.textContent += value;
    }

    // Lidar com os operadores
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        display.textContent += value;
    }

    // Lidar com o botão de igual
    if (value === '=') {
        const expression = display.textContent;
        const result = eval(expression);
        display.textContent = result;
    }

    // Lidar com o botão de limpar
    if (value === 'C') {
        display.textContent = '0';
    }
}

// Adicionar evento de clique aos botões
buttons.forEach(button => button.addEventListener('click', handleClick));