document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  menuToggle.addEventListener('click', function() {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.add('closing');
      setTimeout(() => {
        navLinks.classList.remove('active', 'closing');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }, 500);
    } else {
      navLinks.classList.add('active');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  const slideInterval = 5000; // 5 seconds

  function loadSlide(index) {
    const slide = slides[index];
    if (!slide.querySelector('img')) {
      const img = document.createElement('img');
      img.src = slide.dataset.src;
      img.alt = `Image ${index + 1}`;
      slide.appendChild(img);
    }
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.classList.toggle('active', i === index);
    });
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    loadSlide(currentIndex);
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    loadSlide(currentIndex);
    showSlide(currentIndex);
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      loadSlide(currentIndex);
      showSlide(currentIndex);
    });
  });

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  setInterval(nextSlide, slideInterval);

  loadSlide(currentIndex);
  showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", function() {
  // Loader
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000); // 2 seconds timeout for demo purposes

  // Event Items Hover Effect
  const eventItems = document.querySelectorAll('.event-item');
  eventItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.querySelector('.overlay').style.opacity = '1';
    });
    item.addEventListener('mouseout', function() {
      this.querySelector('.overlay').style.opacity = '0';
    });
  });
});

 // Precision Items Hover Effect
 const precisionItems = document.querySelectorAll('.precision-item');
 precisionItems.forEach(item => {
   item.addEventListener('mouseover', function() {
     this.querySelector('.bubble').style.display = 'inline-block';
   });
   item.addEventListener('mouseout', function() {
     this.querySelector('.bubble').style.display = 'none';
   });
 });


 document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.gallery-slide');
  const prevButton = document.querySelector('.gallery-prev');
  const nextButton = document.querySelector('.gallery-next');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  showSlide(currentSlide);
});


// You can add JavaScript functionality if needed, such as for interactive elements.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
