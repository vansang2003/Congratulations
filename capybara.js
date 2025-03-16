document.addEventListener('DOMContentLoaded', function() {
    // Tạo audio element
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.5;

    // Hiển thị hình ảnh capybara với hiệu ứng
    const capybaraImage = document.getElementById('capybaraImage');
    capybaraImage.style.opacity = '1';

    // Phát nhạc khi capybara xuất hiện
    audio.play().catch(error => {
        console.log('Auto-play prevented:', error);
        // Thêm thông báo cho người dùng biết cần click để phát nhạc
        const playMessage = document.createElement('div');
        playMessage.textContent = 'Click để phát nhạc 🎵';
        playMessage.style.position = 'fixed';
        playMessage.style.top = '20px';
        playMessage.style.left = '50%';
        playMessage.style.transform = 'translateX(-50%)';
        playMessage.style.padding = '10px 20px';
        playMessage.style.background = 'rgba(255, 255, 255, 0.9)';
        playMessage.style.borderRadius = '20px';
        playMessage.style.cursor = 'pointer';
        playMessage.style.zIndex = '1000';
        
        playMessage.onclick = function() {
            audio.play();
            document.body.removeChild(playMessage);
        };
        
        document.body.appendChild(playMessage);
    });

    // Xử lý click vào capybara
    capybaraImage.addEventListener('click', function(event) {
        createScorePopup(event.clientX, event.clientY);
    });

    function createScorePopup(x, y) {
        // Tạo nhiều điểm số xuất hiện ở các vị trí ngẫu nhiên
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const scoreElement = document.createElement('div');
                scoreElement.className = 'score-popup';
                scoreElement.textContent = '10 điểm!';

                // Tính toán vị trí ngẫu nhiên xung quanh điểm click
                const randomOffsetX = (Math.random() - 0.5) * 200;
                const randomOffsetY = (Math.random() - 0.5) * 200;

                scoreElement.style.left = `${x + randomOffsetX}px`;
                scoreElement.style.top = `${y + randomOffsetY}px`;

                document.body.appendChild(scoreElement);

                // Xóa element sau khi animation kết thúc
                setTimeout(() => {
                    document.body.removeChild(scoreElement);
                }, 1500);
            }, i * 100);
        }
    }

    // Hiệu ứng gõ chữ
    function typeText() {
        const text = "+1 Capybara chăm chỉ học bài lấy 10 điểm nhá! ✨📚";
        const typingElement = document.getElementById('typing-text');
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 200);
            }
        }
        
        // Đợi hiệu ứng capybara hoàn thành rồi mới bắt đầu gõ chữ
        setTimeout(type, 200);
    }

    // Bắt đầu hiệu ứng gõ chữ
    typeText();
});