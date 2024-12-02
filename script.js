// script.js
// عرض رسالة ترحيب عند تحميل الصفحة
window.onload = function () {
    alert("مرحبًا بك في موقع غزة وفلسطين!");
};

// تغيير لون الخلفية عند الضغط على زر
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#e0f7fa";
}

// عداد للأشخاص الذين ضغطوا على زر الدعم
let supportCount = 0;

function increaseSupportCount() {
    supportCount++;
    document.getElementById("support-counter").innerText = `عدد الداعمين: ${supportCount}`;
}