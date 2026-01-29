document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');

    // Function to get a color based on the number
    const getColorForNumber = (number) => {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaa';    // Gray
        return '#b0d840';                     // Green
    };

    generateButton.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = ''; // Clear previous numbers
        const numbers = new Set();
        while(numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = 'lotto-ball';
                ball.style.backgroundColor = getColorForNumber(number);
                ball.style.animationDelay = `${index * 0.1}s`;
                ball.textContent = number;
                lottoNumbersContainer.appendChild(ball);
            }, index * 100);
        });
    });
});
