const butunAnimeler = [
    {
        id: "1",
        ad: "Attack on Titan",
        sekil: "tian2.jpg",
        haqqinda: "İnsanlığın titanlara qarşı mübarizəsi",
        bal: 9.0,
        kateqoriya: "trend"
    },
    {
        id: "2",
        ad: "Hajime no Ippo",
        sekil: "Hajime-no-Ippo.jpg",  
        haqqinda: "İppo Makunouchi'nin boks dünyasına girişi",
        bal: 8.5,
        kateqoriya:"trend"
    },
    {
        id: "8",
        ad: "Demon Slayer",
        sekil: "Demon-Slayer.jpg",
        haqqinda: "Tanjiro'nun demonlarla mübarizəsi",
        bal: 8.8,
        kateqoriya:"trend"
    },
    {
        id: "22",
        ad: "Sola Leveling",
        sekil: "solo-leveling.jpg",
        haqqinda: "Sola Leveling'in hikayesi",
        bal: 8.2,
        kateqoriya:"trend"
    },
    {
        id: "14",
        ad: "Jujutsu Kaisen",
        sekil: "jujutsu-kaisen.jpg",
        haqqinda: "Jujutsu Kaisen'in hikayesi",
        bal: 8.7,
        kateqoriya:"trend"
    },
    {
        id: "5",
        ad: "Chainsaw Man",
        sekil: "chainsaw-man2.jpg",
        haqqinda: "Chainsaw Man'in hikayesi",
        bal: 8.9,
        kateqoriya:"trend"
    },
    {
        id: "4",
        ad: "Blue Lock",
        sekil: "blue-lock.jpg",
        haqqinda: "Blue Lock'in hikayesi",
        bal: 8.4,
        kateqoriya:"trend"
    },
    {
        id: "23",
        ad: "Oshi no Ko",
        sekil: "oshi-no-ko.jpg",
        haqqinda: "Oshi no Ko'nun hikayesi",
        bal: 8.6,
        kateqoriya:"trend"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    vitrineDuz('trend','trend-movies');
    vitrineDuz('yeni','new-movies');
})  


function vitrineDuz( kateqoriya, divId){
    const hedefDiv = document.getElementById(divId);
    if (!hedefDiv) return;
     const secilenAnimeler = butunAnimeler.filter(anime => anime.kateqoriya === kateqoriya);
     secilenAnimeler.forEach(anime => {
        const kart = `
            <div class="anime-card-mini" onclick="window.location.href='anime.izle.html?id=${anime.id}'">
                <img src="${anime.sekil}" alt="${anime.ad}">
                <h3>${anime.ad}</h3>
                <p>${anime.haqqinda}</p>
                <div class="rating">${anime.bal}/10</div>
            </div>
        `;
        hedefDiv.innerHTML += kart;

     });
}
