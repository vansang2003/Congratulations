document.addEventListener('DOMContentLoaded', function() {
    // Hiển thị hình ảnh capybara với hiệu ứng
    const capybaraImage = document.getElementById('capybaraImage');
    capybaraImage.style.opacity = '1';

    // Hiệu ứng gõ chữ
    function typeText() {
        const text = "+1 capybara chăm chỉ học bài lấy 10 điểm nhá!!!! ✨📚";
        const typingElement = document.getElementById('typing-text');
        let index = 0;
        
        function type() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        // Đợi hiệu ứng capybara hoàn thành rồi mới bắt đầu gõ chữ
        setTimeout(type, 1200);
    }

    // Bắt đầu hiệu ứng gõ chữ
    typeText();
});