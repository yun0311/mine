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
