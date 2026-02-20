 /*
 const animeAnbari = {
    "1": {
        ad: "Attack on Titan",
        haqqinda: "İnsanlığın titanlara qarşı mübarizəsi...",
        bolumler: [
            { ad: "Bölüm 1: ", link: "#" },
            { ad: "Bölüm 2: ", link: "#" },
            { ad: "Bölüm 3: ", link: "#" },
            { ad: "Bölüm 4: ", link: "#" }

        ]
    },

    "2": {
        ad: "Hajime no Ippo",
        haqqinda: "İppo Makunouchi'nin boks dünyasına girişi...",
        bolumler: [
            { ad: "Bölüm 1: ", link: "#" },
            { ad: "Bölüm 2: ", link: "#" },
            { ad: "Bölüm 3: ", link: "#" },
            { ad: "Bölüm 4: ", link: "#" }
        ]
    }
};


*/
const urlParametleri = new URLSearchParams(window.location.search);
const animeId = urlParametleri.get('id');
const episodeListContainer = document.querySelector('.episode-list');

if (animeAnbari[animeId]) {
    const secilenAnime = animeAnbari[animeId];
    
    // Əsas məlumatları doldururuq
    document.getElementById('anime-adi').innerText = secilenAnime.ad;
    document.getElementById('anime-açıqlama').innerText = secilenAnime.haqqinda;
    
    // BÖLÜMLƏRİ AVTOMATİK YARADIRIQ
    episodeListContainer.innerHTML = ""; // Köhnə düymələri silirik
    
    secilenAnime.bolumler.forEach((bolum, index) => {
        const btn = document.createElement('button');
        btn.classList.add('episode-btn');
        btn.innerText = `Bölüm ${index + 1}`;
        
        btn.onclick = () => {
            document.getElementById('ana-player').src = bolum.link;
            document.getElementById('bolum-basligi').innerText = bolum.ad;
        };
        
        episodeListContainer.appendChild(btn);
    });

    // İlk açılışda 1-ci bölümü avtomatik başlat
    if(secilenAnime.bolumler.length > 0) {
        document.getElementById('ana-player').src = secilenAnime.bolumler[0].link;
        document.getElementById('bolum-basligi').innerText = secilenAnime.bolumler[0].ad;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('anime-search');
    const suggestionsBox = document.getElementById('suggestions-box');
    
    // 1. URL-dən gələn sözü yoxla (Animeler.html səhifəsi açılanda)
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('search');

    if (query && searchInput) {
        searchInput.value = query;
        // Əgər Animeler.html-dəyiksə, dərhal filtrlə
        if (window.location.pathname.includes('Animeler.html')) {
            filterAnimeler(query);
        }
    }

    // 2. Canlı axtarış və Önerilər
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const val = this.value.toLowerCase();
            
            // Əgər Animeler.html səhifəsindəyiksə, kartları dərhal gizlət/göstər
            if (window.location.pathname.includes('Animeler.html')) {
                filterAnimeler(val);
            }

            // Önerilər bölməsi (Hər iki səhifədə işləyir)
            showSuggestions(val);
        });
    }

    function filterAnimeler(soz) {
        const cards = document.querySelectorAll('.anime-card');
        cards.forEach(card => {
            const name = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = name.includes(soz.toLowerCase()) ? 'block' : 'none';
        });
    }

    function showSuggestions(val) {
        if (val.length < 1) {
            suggestionsBox.style.display = 'none';
            return;
        }
        // animeList sənin əvvəlki kodundakı massivdir
        const filtered = animeList.filter(a => a.toLowerCase().includes(val));
        
        suggestionsBox.innerHTML = '';
        if (filtered.length > 0) {
            filtered.forEach(anime => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerText = anime;
                div.onclick = () => {
                    // Seçəndə birbaşa yönləndir
                    window.location.href = `Animeler.html?search=${encodeURIComponent(anime)}`;
                };
                suggestionsBox.appendChild(div);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    }
});


