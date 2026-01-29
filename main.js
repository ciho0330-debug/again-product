document.addEventListener('DOMContentLoaded', () => {
    const regionNav = document.getElementById('region-nav');
    const officeList = document.getElementById('office-list');
    const officeCards = officeList.querySelectorAll('.office-card');
    const regionImageContainer = document.getElementById('region-image-container');
    const regionImage = document.getElementById('region-image');
    const navLinks = regionNav.querySelectorAll('a');

    // Region images map
    const regionImages = {
        '서울특별시': 'https://images.unsplash.com/photo-1518544923197-90c2688654a1?q=80&w=2070&auto=format&fit=crop',
        '부산광역시': 'https://images.unsplash.com/photo-1558997519-83a02c315b88?q=80&w=1932&auto=format&fit=crop',
    };

    regionNav.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName !== 'A') return;
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        target.classList.add('active');

        const region = target.dataset.region;
        const subRegion = target.dataset.subRegion;

        // Show region image
        if (region && region !== 'all' && regionImages[region]) {
            regionImage.src = regionImages[region];
            regionImageContainer.style.display = 'block';
        } else {
            regionImageContainer.style.display = 'none';
        }

        // Filter office cards
        officeCards.forEach(card => {
            const cardRegion = card.dataset.region;
            const cardSubRegion = card.dataset.subRegion;
            let show = false;

            if (region === 'all') {
                show = true;
            } else if (subRegion) {
                if (cardRegion === region && cardSubRegion === subRegion) {
                    show = true;
                }
            } else if (region) {
                if (cardRegion === region) {
                    show = true;
                }
            }

            card.classList.toggle('hidden', !show);
        });
    });

    // Handle contact icon clicks (delegated from officeList)
    officeList.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target || !target.classList.contains('kakao-link') && !target.classList.contains('naver-talk-link')) return;

        const officeName = target.dataset.office;
        if (!officeName) return; // For links like '어게인공유오피스'
        
        e.preventDefault();
        alert(`'${officeName}'의 ${target.classList.contains('kakao-link') ? '카카오톡' : '네이버톡'}으로 문의합니다.`);
    });
});
