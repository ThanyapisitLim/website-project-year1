// เลือกปุ่มและรูปภาพ
const image = document.getElementById('mainImage');
const nextButton = document.getElementById('nextImageButton');
const previousButton = document.getElementById('previousImageButton');

// รายการรูปภาพที่ต้องการเปลี่ยน
const images = ['image/m01.JPG', 'image/m02.jpg', 'image/m03.JPG'];
let currentIndex = 0;

// ฟังก์ชันเปลี่ยนรูป
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // เปลี่ยนไปยังรูปถัดไป
    image.src = images[currentIndex]; // อัปเดต src ของรูปภาพ
    image.className = '';
    // เพิ่มคลาสใหม่ตามรูปภาพ
    if (currentIndex === 1) {
        image.classList.add('image-style-2'); // คลาสสำหรับรูปที่ 2
    } 
    else if (currentIndex === 2) {
        image.classList.add('image-style-3'); // คลาสสำหรับรูปที่ 3
    }
});

previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1) % images.length; // เปลี่ยนไปยังรูปถัดไป
    if (currentIndex === -1) {
        currentIndex = 2
    }
    image.src = images[currentIndex]; // อัปเดต src ของรูปภาพ
    image.className = '';

    // เพิ่มคลาสใหม่ตามรูปภาพ
    if (currentIndex === 1) {
        image.classList.add('image-style-2'); // คลาสสำหรับรูปที่ 2
    } 
    else if (currentIndex === 2) {
        image.classList.add('image-style-3'); // คลาสสำหรับรูปที่ 3
    }
});

// เลือก Navbar
const navbar = document.querySelector('nav');

// ฟังก์ชันตรวจจับการเลื่อน
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // ถ้าเลื่อนลงเกิน 50px
        navbar.classList.add('scrolled'); // เพิ่มคลาส "scrolled"
    } else {
        navbar.classList.remove('scrolled'); // ลบคลาส "scrolled"
    }
});

const homeLink = document.querySelector('a[href="#home"]');
const profileLink = document.querySelector('a[href="#profile"]');
const contactLink = document.querySelector('a[href="#contact"]');

// เลือก main และ profile
const mainSection = document.getElementById('main');
const profileSection = document.getElementById('profile');
const contactSection = document.getElementById('contact');

// ฟังก์ชันตรวจจับการเลื่อน
window.addEventListener('scroll', () => {
    const mainBottom = mainSection.getBoundingClientRect().bottom;

    // เช็คเลื่อนถึงล่างสุดของหน้าเว็บไหม
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
        // ถ้าเลื่อนถึงล่างสุด
        homeLink.classList.remove('active');
        profileLink.classList.remove('active');
        contactLink.classList.add('active');
    } else if (mainBottom <= 0) {
        // ถ้าเลื่อนเลย main
        homeLink.classList.remove('active');
        profileLink.classList.add('active');
        contactLink.classList.remove('active');
    } else {
        // กรณียังอยู่ main
        homeLink.classList.add('active');
        profileLink.classList.remove('active');
        contactLink.classList.remove('active');
    }
});

homeLink.addEventListener('click', (e) => {
    e.preventDefault(); // ป้องกันการกระโดดลิงก์ตามปกติ
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});



document.getElementById("readMoreButton").addEventListener("click", function () {
    const extraContent = document.getElementById("extraContent");

    if (extraContent.classList.contains("hidden")) {
        // กรณีที่ซ่อนอยู่ ให้แสดง
        extraContent.classList.remove("hidden");
        extraContent.classList.add("expanded");
        this.textContent = "Show less";  // เปลี่ยนข้อความปุ่ม
    } else {
        // กรณีที่แสดงอยู่ ให้ซ่อน
        extraContent.classList.remove("expanded");
        extraContent.classList.add("hidden");
        this.textContent = "Read more";  // เปลี่ยนข้อความปุ่มกลับ
    }

    // รีเฟรช AOS เพื่อให้ animation ทำงานกับ element ที่เพิ่งโชว์
    setTimeout(() => {
        AOS.refresh();
    }, 100);
});

