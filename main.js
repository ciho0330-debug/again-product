document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Data: Office Information ---
    const officeData = [
        {
            name: '어게인공유오피스',
            address: '서울 강남구 테헤란로 1',
            lat: 37.506502, 
            lng: 127.053555,
            img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
            desc: '당신의 새로운 시작을 응원합니다.',
            kakao: 'http://pf.kakao.com/_BEZxcb',
            naver: 'https://talk.naver.com/profile/wc14ml'
        },
        {
            name: '패스트파이브',
            address: '서울 강남구 테헤란로 2',
            lat: 37.508502, 
            lng: 127.055555,
            img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop',
            desc: '강남의 중심에서 비즈니스를 시작하세요.',
            kakao: '#',
            naver: '#'
        },
        {
            name: '위워크 여의도',
            address: '서울 영등포구 국제금융로 10',
            lat: 37.5250, 
            lng: 126.9250,
            img: 'https://images.unsplash.com/photo-1600880292210-f762c286536b?q=80&w=1974&auto=format&fit=crop',
            desc: '글로벌 네트워크와 함께 성장하세요.',
            kakao: '#',
            naver: '#'
        },
        {
            name: '라인업 센텀',
            address: '부산 해운대구 센텀2로 25',
            lat: 35.1706, 
            lng: 129.1307,
            img: 'https://images.unsplash.com/photo-1573496774439-c9a9399435c2?q=80&w=1974&auto=format&fit=crop',
            desc: '부산의 실리콘밸리, 센텀시티에서 성공을!',
            kakao: '#',
            naver: '#'
        },
         {
            name: '무인공유오피스 판교',
            address: '경기 성남시 분당구 판교역로 235',
            lat: 37.4004, 
            lng: 127.1119,
            img: 'https://images.unsplash.com/photo-1583397333582-62a04a5a5c68?q=80&w=1935&auto=format&fit=crop',
            desc: '언제나 자유롭게, 24시간 당신의 워크스페이스.',
            kakao: '#',
            naver: '#'
        }
    ];

    // --- 2. Initialize Map ---
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(37.506502, 127.053555), // Initial center: Seoul
        level: 5 // Initial zoom level
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);
    const officeList = document.getElementById('office-list');
    let markers = [];

    // --- 3. Create Markers, InfoWindows, and List Items ---
    const imageSrc = 'https://img.icons8.com/office/80/building.png'; // Custom marker image URL
    const imageSize = new kakao.maps.Size(40, 40); // Marker image size
    const imageOption = {offset: new kakao.maps.Point(20, 40)}; // Marker image options (anchor point)
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    officeData.forEach((office, index) => {
        // Create Marker with custom image
        const position = new kakao.maps.LatLng(office.lat, office.lng);
        const marker = new kakao.maps.Marker({ 
            map: map,
            position: position,
            title: office.name,
            image: markerImage // Set custom marker image
        });

        // Create InfoWindow
        const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:5px;font-size:12px;">${office.name}</div>`
        });

        // Store marker and infowindow
        markers.push({marker, infowindow});

        // Add mouseover/mouseout events for InfoWindow
        kakao.maps.event.addListener(marker, 'mouseover', () => infowindow.open(map, marker));
        kakao.maps.event.addListener(marker, 'mouseout', () => infowindow.close());

        // Create List Item
        const card = document.createElement('div');
        card.className = 'office-card';
        card.dataset.index = index;
        card.innerHTML = `
            <img src="${office.img}" alt="${office.name}">
            <div class="office-card-content">
                <h2>${office.name}</h2>
                <p>${office.desc}</p>
                <div class="contact-icons">
                    <a href="${office.kakao}" target="_blank"><img src="https://www.kakaocorp.com/page/favicon.ico" alt="카카오톡 문의"></a>
                    <a href="${office.naver}" target="_blank"><img src="https://talk.naver.com/favicon.ico" alt="네이버톡 문의"></a>
                </div>
            </div>
        `;
        officeList.appendChild(card);

        // --- 4. Interactivity ---
        card.addEventListener('mouseenter', () => {
            infowindow.open(map, marker);
        });

        card.addEventListener('mouseleave', () => {
            infowindow.close();
        });
        
        card.addEventListener('click', () => {
            map.panTo(position);
        });

        kakao.maps.event.addListener(marker, 'click', () => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            officeList.querySelectorAll('.office-card').forEach(c => c.style.borderColor = '#ddd');
            card.style.borderColor = '#007bff';
        });
    });
});
