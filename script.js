document.addEventListener('DOMContentLoaded', () => {
    
    // เลือก elements ที่ต้องใช้
    const flames = document.querySelectorAll('.flame');
    const countdownEl = document.getElementById('countdown');

    // 1. (3s) จุดไฟ
    setTimeout(() => {
        flames.forEach(flame => flame.classList.add('lit'));
    }, 3000);

    
    // 2. (3s) เริ่มลำดับการนับถอยหลัง
    setTimeout(() => {
        countdownEl.style.opacity = '1';
        countdownEl.innerText = 'เตรียมตัวเป่าเทียน';
    }, 3000); // เริ่มที่ 3 วินาที

    setTimeout(() => {
        countdownEl.innerText = '5';
    }, 4000); // 4 วินาที

    setTimeout(() => {
        countdownEl.innerText = '4';
    }, 5000); // 5 วินาที

    setTimeout(() => {
        countdownEl.innerText = '3';
    }, 6000); // 6 วินาที

    setTimeout(() => {
        countdownEl.innerText = '2';
    }, 7000); // 7 วินาที

    setTimeout(() => {
        countdownEl.innerText = '1';
    }, 8000); // 8 วินาที

    
    // 3. (8.5s) ดับไฟ และซ่อนข้อความนับถอยหลัง
    setTimeout(() => {
        flames.forEach(flame => flame.classList.remove('lit'));
        countdownEl.style.opacity = '0'; // ซ่อนเลข 1
    }, 8500);


    // 4. (9s) (เพิ่มส่วนนี้) แสดงข้อความ "Happybirthday SD"
    // (หลังจากเลข 1 จางหายไป 0.5s)
    setTimeout(() => {
        countdownEl.innerText = 'Happy Birthday เอย'; // เปลี่ยนข้อความ
        countdownEl.style.opacity = '1'; // แสดงข้อความใหม่
    }, 9000);
});