const wishes = [
    "Hãy tự tin lên nhé! 💪",
    "Em là số 1! 🏆",
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

function createFloatingIcon(buttonRect) {
    const icon = document.createElement('i');
    icon.className = `fas ${encouragingIcons[Math.floor(Math.random() * encouragingIcons.length)]} floating-icon`;
    
    // Tính toán vị trí bắt đầu dựa trên vị trí của nút
    const startX = buttonRect.left + (Math.random() * buttonRect.width);
    const startY = buttonRect.top;
    
    // Đặt vị trí ban đầu cho icon
    icon.style.left = `${startX}px`;
    icon.style.top = `${startY}px`;
    
    document.body.appendChild(icon);
    
    // Xóa icon sau khi animation kết thúc
    setTimeout(() => {
        document.body.removeChild(icon);
    }, 2000);
}

document.getElementById('wishButton').addEventListener('click', function(event) {
    const buttonRect = this.getBoundingClientRect();
    
    // Tạo nhiều icon cùng lúc
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createFloatingIcon(buttonRect);
        }, i * 150); // Giảm delay giữa các icon
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