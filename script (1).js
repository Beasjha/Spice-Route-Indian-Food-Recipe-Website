document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }

  // Recipe Data
  const recipes = [
    {
      title: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce with aromatic spices.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      calories: 450,
      timeInMins: 40,
      servings: 4
    },
    {
      title: "Vegetable Biryani",
      description: "Fragrant basmati rice with mixed vegetables and authentic spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      calories: 380,
      timeInMins: 50,
      servings: 6
    },
    {
      title: "Masala Dosa",
      description: "Crispy rice and lentil crepe filled with spiced potato filling.",
      image: "https://images.unsplash.com/photo-1604908177522-3b1e4c2d3a3e",
      calories: 320,
      timeInMins: 30,
      servings: 2
    },
    {
      title: "Paneer Tikka",
      description: "Marinated and grilled Indian cottage cheese with vegetables.",
      image: "https://images.unsplash.com/photo-1604908177522-3b1e4c2d3a3e",
      calories: 350,
      timeInMins: 35,
      servings: 3
    },
    {
      title: "Chicken Tikka Masala",
      description: "Grilled chicken chunks in a creamy, spiced tomato sauce.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      calories: 480,
      timeInMins: 45,
      servings: 4
    },
    {
      title: "Palak Paneer",
      description: "Indian cottage cheese cubes in a spinach puree.",
      image: "https://images.pexels.com/photos/31249589/pexels-photo-31249589.jpeg",
      calories: 340,
      timeInMins: 30,
      servings: 4
    }
  ];

  // Populate Recipe Grid
  const recipeGrid = document.getElementById('recipe-grid');
  
  if (recipeGrid) {
    recipes.forEach(recipe => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
      
      recipeCard.innerHTML = `
        <div class="recipe-image">
          <img src="${recipe.image}" alt="${recipe.title}">
          <div class="recipe-overlay">
            <button class="view-recipe-btn">View Recipe</button>
          </div>
        </div>
        <div class="recipe-details">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <p class="recipe-calories">${recipe.calories} calories</p>
          <div class="recipe-meta">
            <div class="recipe-time">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              <span>${recipe.timeInMins} mins</span>
            </div>
            <div class="recipe-servings">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
              </svg>
              <span>${recipe.servings} ${recipe.servings === 1 ? 'person' : 'people'}</span>
            </div>
          </div>
        </div>
      `;
      
      recipeGrid.appendChild(recipeCard);
      
      // Add event listener to the view recipe button
      const viewRecipeBtn = recipeCard.querySelector('.view-recipe-btn');
      viewRecipeBtn.addEventListener('click', () => {
        showRecipeModal(recipe);
      });
    });
  }

  // Recipe Modal Functionality
  function showRecipeModal(recipe) {
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modalContent.innerHTML = `
      <div class="modal-header">
        <h2>${recipe.title}</h2>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="modal-image">
          <img src="${recipe.image}" alt="${recipe.title}">
        </div>
        <div class="modal-info">
          <p>${recipe.description}</p>
          <div class="recipe-facts">
            <div class="fact">
              <strong>Calories:</strong> ${recipe.calories}
            </div>
            <div class="fact">
              <strong>Time:</strong> ${recipe.timeInMins} minutes
            </div>
            <div class="fact">
              <strong>Servings:</strong> ${recipe.servings}
            </div>
          </div>
          <h3>Cooking Instructions</h3>
          <p>This is a placeholder for the cooking instructions. In a real application, this would contain the full recipe with ingredients and step-by-step instructions.</p>
        </div>
      </div>
    `;
    
    // Append modal to body
    document.body.appendChild(modalOverlay);
    modalOverlay.appendChild(modalContent);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add close modal functionality
    const closeModal = modalContent.querySelector('.close-modal');
    closeModal.addEventListener('click', () => {
      document.body.removeChild(modalOverlay);
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        document.body.removeChild(modalOverlay);
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Carousel for featured recipes
  const featuredRecipes = document.querySelector('.featured-recipes');
  if (featuredRecipes) {
    let currentSlide = 0;
    const slides = featuredRecipes.querySelectorAll('.featured-recipe');
    const totalSlides = slides.length;
    
    // Set initial state
    updateCarousel();
    
    // Next and Previous buttons
    document.querySelector('.carousel-next').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });
    
    document.querySelector('.carousel-prev').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
    
    // Auto-rotate carousel
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }, 5000);
    
    function updateCarousel() {
      slides.forEach((slide, index) => {
        if (index === currentSlide) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});
