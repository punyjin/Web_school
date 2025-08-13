document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันการส่งฟอร์มโดยตรง
    const form = this;

    // ส่งข้อมูลไป Formspree
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'ส่งข้อความสำเร็จ!',
                text: 'ทีมงานจะติดต่อกลับเร็วๆ นี้',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#2563eb'
            });
            form.reset(); // ล้างฟอร์มหลังส่งสำเร็จ
        } else {
            Swal.fire({
                icon: 'error',
                title: 'เกิดข้อผิดพลาด',
                text: 'กรุณาลองใหม่',
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#dc2626'
            });
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'ปัญหา: ' + error.message,
            confirmButtonText: 'ตกลง',
            confirmButtonColor: '#dc2626'
        });
    });
});


//Content : Poll Section
document.querySelector('.poll-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'ส่งแบบสำรวจสำเร็จ!',
                    text: 'ขอบคุณสำหรับความคิดเห็นของคุณ',
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#2563eb'
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'เกิดข้อผิดพลาด',
                    text: 'กรุณาลองใหม่',
                    confirmButtonText: 'ตกลง',
                    confirmButtonColor: '#dc2626'
                });
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'เกิดข้อผิดพลาด',
                text: 'ปัญหา: ' + error.message,
                confirmButtonText: 'ตกลง',
                confirmButtonColor: '#dc2626'
            });
        });
    });