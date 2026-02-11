document.addEventListener('DOMContentLoaded', () => {
    // --- Data: Office Information ---
    const officeData = [
        {
            name: '어게인공유오피스',
            address: '서울 강남구 테헤란로 1',
            img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
            desc: '강남의 중심, 최고의 비즈니스 환경'
        },
        {
            name: '패스트파이브 서울숲점',
            address: '서울 성동구 아차산로 5길 2',
            img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
            desc: '창의적인 영감을 주는 공간'
        },
        {
            name: '위워크 여의도역점',
            address: '서울 영등포구 국제금융로 10',
            img: 'https://images.unsplash.com/photo-1600880292210-f762c286536b?q=80&w=1974&auto=format&fit=crop',
            desc: '글로벌 네트워크의 중심'
        },
        {
            name: '스파크플러스 선릉점',
            address: '부산 해운대구 센텀2로 25',
            img: 'https://images.unsplash.com/photo-1573496774439-c9a9399435c2?q=80&w=1974&auto=format&fit=crop',
            desc: '성공적인 비즈니스를 위한 선택'
        },
         {
            name: '무인공유오피스 판교',
            address: '경기 성남시 분당구 판교역로 235',
            img: 'https://images.unsplash.com/photo-1583397333582-62a04a5a5c68?q=80&w=1935&auto=format&fit=crop',
            desc: '24시간 언제나 당신의 사무실'
        },
        {
            name: '더워크 홍대입구점',
            address: '서울 마포구 양화로 176',
            img: 'https://images.unsplash.com/photo-1593064390380-7d3a04a2c3a5?q=80&w=2070&auto=format&fit=crop',
            desc: '젊음과 열정이 넘치는 공간'
        }
    ];

    const officeGrid = document.getElementById('office-grid');

    // Render office cards into the grid
    officeData.forEach(office => {
        const card = document.createElement('div');
        card.className = 'office-card';
        card.innerHTML = `
            <img src="${office.img}" alt="${office.name}">
            <div class="office-card-content">
                <h2>${office.name}</h2>
                <p>${office.desc}</p>
            </div>
        `;
        officeGrid.appendChild(card);
    });
});
