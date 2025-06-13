document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const categories = document.querySelectorAll(".category");

    // 햄버거 메뉴 클릭 이벤트
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // 각 카테고리 클릭 시 하위 메뉴 열기/닫기
    categories.forEach(category => {
        category.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

// 다크/라이트 모드 전환
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 초기 상태: 로컬스토리지에서 불러오기
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
