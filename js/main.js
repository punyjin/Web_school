    function search_function() 
    {
        const query = document.querySelector('.search-box input').value;
        if (query) {
            alert('กำลังค้นหา: ' + query);
            alert('แต่ค้นหาไปก็เท่านั้นแหละ สุดท้ายก็หาเขาไม่เจอหรอก');
        } else {
            alert('กรุณากรอกคำค้นหา');
        }
    }
    document.getElementById('toggle-dark').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        // เปลี่ยนไอคอนและข้อความ
        const icon = document.querySelector('#toggle-dark i');
        const text = document.querySelector('#toggle-dark span');
        if (isDarkMode) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            text.textContent = 'โหมดกลางคืน';
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            text.textContent = 'โหมดกลางวัน';
        }
    });
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('#toggle-dark i');
        const text = document.querySelector('#toggle-dark span');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = 'โหมดกลางคืน';
    }

        // Mobile Menu Toggle
        $('.mobile-menu-btn').click(function() {
            $('.main-nav').toggleClass('active');
        });

        // FAQ Collapsible
        $('.faq-item h3').click(function() {
            $(this).parent().toggleClass('active');
        });

        // Fetch News from JSON
        fetch('news.json')
            .then(response => response.json())
            .then(data => {
                const container = $('#news-container');
                data.forEach(news => {
                    container.append(`
                        <div class="news-card fade-in">
                            <img src="${news.image}" alt="${news.title}">
                            <div class="news-card-content">
                                <div class="date">${news.date}</div>
                                <h3>${news.title}</h3>
                                <p>${news.content}</p>
                                <a href="#" class="read-more">อ่านเพิ่มเติม <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    `);
                });
            });

        

        // Header Scroll Effect
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('.sticky-header').addClass('scrolled');
            } else {
                $('.sticky-header').removeClass('scrolled');
            }
        });

        // Mobile Menu Toggle
$('.mobile-menu-btn').click(function() {
    $('.main-nav').toggleClass('active');
});

// FAQ Collapsible
$('.faq-item h3').click(function() {
    $(this).parent().toggleClass('active');
});




// Header Scroll Effect
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.sticky-header').addClass('scrolled');
    } else {
        $('.sticky-header').removeClass('scrolled');
    }
});