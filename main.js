document.addEventListener('DOMContentLoaded', () => {
    const officeList = document.getElementById('office-list');

    officeList.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;

        const officeName = target.dataset.office;

        if (target.classList.contains('kakao-link')) {
            e.preventDefault();
            // In a real application, you would replace this with the actual Kakao Talk Channel URL
            alert(`'${officeName}'의 카카오톡으로 문의합니다.`);
        } else if (target.classList.contains('naver-talk-link')) {
            e.preventDefault();
            // In a real application, you would replace this with the actual Naver Talk URL
            alert(`'${officeName}'의 네이버톡으로 문의합니다.`);
        }
    });
});
