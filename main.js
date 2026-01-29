document.addEventListener('DOMContentLoaded', () => {
    const officeList = document.getElementById('office-list');

    officeList.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;

        const officeName = target.dataset.office;

        // "어게인공유오피스"의 링크는 새 창에서 열리도록 처리
        if (officeName === '어게인공유오피스') {
            return; // 기본 동작(새 창에서 링크 열기)을 막지 않음
        }

        // 다른 업체들의 링크는 기존처럼 알림창만 띄움
        if (target.classList.contains('kakao-link')) {
            e.preventDefault();
            alert(`'${officeName}'의 카카오톡으로 문의합니다.`);
        } else if (target.classList.contains('naver-talk-link')) {
            e.preventDefault();
            alert(`'${officeName}'의 네이버톡으로 문의합니다.`);
        }
    });
});
