const tabMenu = document.getElementById('tabMenu');
let hideTimeout;

// ซ่อนแท็บเมนูหลังจาก 1 นาทีไม่มีการเคลื่อนไหว
function hideTabMenu() {
  tabMenu.classList.add('hidden');
}

// แสดงแท็บเมนูเมื่อเมาส์ไปอยู่ในพื้นที่แถวแท็บ
function showTabMenu() {
  tabMenu.classList.remove('hidden');
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(hideTabMenu, 10000); // 10 วินาที
}

// เพิ่ม Event Listener
document.addEventListener('mousemove', (event) => {
  const y = event.clientY; // ระดับ Y ของเมาส์
  if (y < 100) {
    showTabMenu(); // หากเมาส์อยู่ใกล้กับหัวหน้าเว็บไซต์
  }
});

// ตั้งค่าซ่อนแท็บเมนูครั้งแรก
hideTimeout = setTimeout(hideTabMenu, 10000);


document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // ถ้าเนื้อหาปรากฏในมุมมอง
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // เพิ่มคลาส .visible เพื่อแสดงเนื้อหา
        observer.unobserve(entry.target);  // หยุดสังเกตหลังจากเนื้อหาปรากฏแล้ว
      }
    });
  }, {
    threshold: 0.1 // เมื่อ 10% ของเนื้อหาปรากฏในมุมมองของผู้ใช้
  });

  // เลือกทุกๆ ส่วนที่ต้องการให้แสดงเมื่อมันปรากฏ
  document.querySelectorAll('.content').forEach(section => {
    observer.observe(section); // สังเกตแต่ละส่วน
  });
});



