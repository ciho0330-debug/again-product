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
        '대구광역시': 'https://images.unsplash.com/photo-1571223434453-6a031102f5e3?q=80&w=1974&auto=format&fit=crop',
        '인천광역시': 'https://images.unsplash.com/photo-1590372091427-13398c520863?q=80&w=2070&auto=format&fit=crop',
        '광주광역시': 'https://images.unsplash.com/photo-1629812456720-2a9699632128?q=80&w=2071&auto=format&fit=crop',
        '대전광역시': 'https://images.unsplash.com/photo-1629812456720-2a9699632128?q=80&w=2071&auto=format&fit=crop',
        '울산광역시': 'https://images.unsplash.com/photo-1593405435965-92435f11812e?q=80&w=1974&auto=format&fit=crop',
        '세종특별자치시': 'https://images.unsplash.com/photo-1631245389656-68254b1a808f?q=80&w=2070&auto=format&fit=crop',
        '경기도': 'https://images.unsplash.com/photo-1560167385-d8585e4c0276?q=80&w=2070&auto=format&fit=crop',
        '강원특별자치도': 'https://images.unsplash.com/photo-1544376722-54d9a1a6b47c?q=80&w=2070&auto=format&fit=crop',
        '충청북도': 'https://images.unsplash.com/photo-1553412086-6354c3a59e35?q=80&w=1974&auto=format&fit=crop',
        '충청남도': 'https://images.unsplash.com/photo-1601639097274-9a4f6b8d2c34?q=80&w=2070&auto=format&fit=crop',
        '전북특별자치도': 'https://images.unsplash.com/photo-1579459586111-c11e3c83b8b6?q=80&w=2070&auto=format&fit=crop',
        '전라남도': 'https://images.unsplash.com/photo-1571738222-094030d970c6?q=80&w=2070&auto=format&fit=crop',
        '경상북도': 'https://images.unsplash.com/photo-1582234407425-4c0a520337c8?q=80&w=2070&auto=format&fit=crop',
        '경상남도': 'https://images.unsplash.com/photo-1579294943964-c27d531d5e5c?q=80&w=2070&auto=format&fit=crop',
        '제주특별자치도': 'https://images.unsplash.com/photo-1551892529-e4d509f692a8?q=80&w=2070&auto=format&fit=crop',
    };

    regionNav.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName !== 'A') return;
        e.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        target.classList.add('active');

        const region = target.dataset.region;
        const subRegion = target.dataset.subRegion;

        if (region && region !== 'all' && regionImages[region]) {
            regionImage.src = regionImages[region];
            regionImageContainer.style.display = 'block';
        } else {
            regionImageContainer.style.display = 'none';
        }

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

    officeList.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target || !target.classList.contains('kakao-link') && !target.classList.contains('naver-talk-link')) return;

        const officeName = target.dataset.office;
        if (!officeName) return;
        
        e.preventDefault();
        alert(`'${officeName}'의 ${target.classList.contains('kakao-link') ? '카카오톡' : '네이버톡'}으로 문의합니다.`);
    });
});
