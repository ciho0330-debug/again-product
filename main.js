document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-button');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeToggleButton = document.getElementById('theme-toggle');

    // 숫자에 따라 색상을 가져오는 함수
    const getColorForNumber = (number) => {
        if (number <= 10) return '#fbc400'; // 노란색
        if (number <= 20) return '#69c8f2'; // 파란색
        if (number <= 30) return '#ff7272'; // 빨간색
        if (number <= 40) return '#aaa';    // 회색
        return '#b0d840';                     // 초록색
    };

    generateButton.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = ''; // 이전 번호 지우기
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

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
