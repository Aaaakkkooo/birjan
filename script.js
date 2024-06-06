document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const courseItems = document.querySelectorAll('.chapter-item');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        courseItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

function toggleContent(id) {
    const content = document.querySelectorAll('.category-content');
    content.forEach(item => {
        if (item.id === id) {
            item.style.display = item.style.display === 'none' ? 'block' : 'none';
        } else {
            item.style.display = 'none';
        }
    });
}
