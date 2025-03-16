const wishes = [
    "Hãy tự tin lên nhé! 💪",
    "Ngọc Minh là số 1! 🏆",
    "Cố lên! ❤️",
    "Bình tĩnh và tập trung nha! 🎯",
    "Em đã chuẩn bị rất kỹ rồi! 👍",
];

const encouragingIcons = [
    'fa-heart',
    'fa-star',
    'fa-thumbs-up',
    'fa-fire',
    'fa-crown',
    'fa-medal',
    'fa-magic',
    'fa-sparkles',
    'fa-book',
    'fa-graduation-cap'
];

let usedWishes = [];

function createClover(buttonRect) {
    const clover = document.createElement('i');
    clover.className = 'fas fa-clover floating-icon';
    clover.style.color = '#4CAF50';
    
    // Random vị trí xuất phát từ nút
    const startX = buttonRect.left + Math.random() * buttonRect.width;
    const startY = buttonRect.top;
    
    // Random góc xoay và hướng bay
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 200;
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY - 300 - Math.random() * 200;
    
    clover.style.left = `${startX}px`;
    clover.style.top = `${startY}px`;
    clover.style.transform = `translate(0, 0) rotate(0deg)`;
    
    // Thêm animation riêng cho mỗi cỏ
    clover.animate([
        { transform: 'translate(0, 0) rotate(0deg)', opacity: 0 },
        { opacity: 1, offset: 0.1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    });
    
    document.body.appendChild(clover);
    
    setTimeout(() => {
        document.body.removeChild(clover);
    }, 2000);
}

document.getElementById('wishButton').addEventListener('click', function() {
    const buttonRect = this.getBoundingClientRect();
    
    // Tạo nhiều đợt cỏ bay lên
    for (let wave = 0; wave < 3; wave++) {
        setTimeout(() => {
            // Mỗi đợt có 15 cỏ
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createClover(buttonRect);
                }, i * 50);
            }
        }, wave * 300);
    }
    
    if (usedWishes.length === wishes.length) {
        setTimeout(() => {
            window.location.href = 'capybara.html';
        }, 1000);
        return;
    }
    
    if (usedWishes.length === wishes.length) {
        usedWishes = [];
    }
    
    let availableWishes = wishes.filter(wish => !usedWishes.includes(wish));
    let randomWish = availableWishes[Math.floor(Math.random() * availableWishes.length)];
    usedWishes.push(randomWish);
    
    const wishElement = document.createElement('div');
    wishElement.className = 'wish';
    wishElement.textContent = randomWish;
    
    const wishesContainer = document.getElementById('wishes');
    wishesContainer.insertBefore(wishElement, wishesContainer.firstChild);
    
    if (wishesContainer.children.length > 3) {
        wishesContainer.removeChild(wishesContainer.lastChild);
    }
}); 