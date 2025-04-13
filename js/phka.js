// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // Product Data (Using numbers for price/stock)
    // ==========================================
    const products = {
        phka: [
             {
                 id: 'phka-lipstick-01',
                 name: 'ផ្កា​​​​​ ​នគររាជ', // Khmer Name
                 price: 10,
                 description: 'នគររាជ គឺជាបទភ្លេងជាតិរបស់ព្រះរាជាណាចក្រកម្ពុជាដែលត្រូវបាននិពន្ធដោយព្រះសង្ឃរាជជួនណាត បទចម្រៀងនេះត្រូវបានដាក់ឲ្យប្រើប្រាស់ចាប់តាំងពីឆ្នាំ១៩៤១ នៅពេលដែលប្រទេសកម្ពុជាស្ថិតនៅក្នុងអំឡុងសម័យអាណានិគមនិយម.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743695415350-2.png&w=384&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707575-RE-EDIT-PKA%2528final%2529-27.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514706959-RE-EDIT-PKA%2528final%2529-02.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707747-DSC03976.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514706907-RE-EDIT-PKA%2528final%2529-16.jpg&w=640&q=100'
                 ],
                 colors: ['#F06292'],
                 featured: true,
                 category: 'lip',
                 stock: 250000,
                 new: true
             },
             {
                 id: 'phka-blush-01',
                 name: 'ផ្កា ទឹកដោះ', // Khmer Name
                 price: 10,
                 description: 'ដើម​ផ្កាទឹកដោះ ជាប្រភេទរុក្ខជាតិមានកម្ពស់ចន្លោះពី ០.៥ ទៅ ១ម៉ែត្រ ដែលមានផ្កាពណ៌ស ។ផ្កាទឹកដោះជាផ្កាដែលយើងអាចបរិភោគទទួលទានបាន សម្រាប់ធ្វើជាអន្លក់ ដែលអាចស្រុះ ឬហូបស្រស់ជាមួយទឹកគ្រឿង មាំចំហុយ ផ្អកត្រីជូរ ឬត្រីប្រៃបានផងដែរ ។.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1744435794428-3.png&w=256&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515026028-RE-EDIT-PKA%2528final%2529-30.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515025367-RE-EDIT-PKA%2528final%2529-18.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515026047-DSC03944.jpg&w=640&q=100',
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515025452-RE-EDIT-PKA%2528final%2529-31.jpg&w=640&q=100'
                  ],
                 colors: ['#D2691E'], // Brownish color for example
                 featured: true,
                 category: 'cheek',
                 stock: 15,
                 new: true
             },
             {
                 id: 'phka-eyeshadow-01',
                 name: 'ផ្កា អង្គារដី', // Khmer Name
                 price: 10,
                 description: 'A versatile 12-pan eyeshadow palette featuring a mix of matte, shimmer, and metallic finishes in rosy and neutral shades.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1744435803760-4.png&w=256&q=100',
                    'https://via.placeholder.com/400x400/f06292/333333?text=Eyeshadow+Swatches',
                    'https://via.placeholder.com/400x400/e91e63/ffffff?text=Palette+Open'
                  ],
                 colors: ['#DC143C'], // Crimson color example
                 featured: true,
                 category: 'eye',
                 stock: 10,
                 new: false
             },
             {
                 id: 'phka-foundation-01',
                 name: 'ផ្កា កូលាប', // Khmer Name
                 price: 10,
                 description: 'A lightweight, buildable coverage liquid foundation that provides a natural, skin-like finish. SPF 15 protection included.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613766926-1000022449.jpg&w=256&q=100',
                    'https://via.placeholder.com/400x400/ffccbc/333333?text=Foundation+1+Swatch',
                    'https://via.placeholder.com/400x400/d7ccc8/ffffff?text=Swatch+Shades'
                 ],
                 colors: ['#FF6347'], // Tomato color example
                 featured: true,
                 category: 'face',
                 stock: 0, // Example: Out of stock
                 new: false
             },
             {
                 id: 'phka-lipgloss-01',
                 name: 'ផ្កា ឈូក', // Khmer Name
                 price: 10,
                 description: 'A high-shine, non-sticky lip gloss that hydrates and plumps lips with a glossy finish. Available in sheer and pigmented shades.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613775646-1000022448.jpg&w=256&q=100',
                    'https://via.placeholder.com/400x400/f8bbd0/333333?text=Lip+Gloss+Swatch',
                    'https://via.placeholder.com/400x400/e91e63/ffffff?text=Gloss+Texture'
                 ],
                 colors: ['#FF69B4'], // Hot Pink color example
                 featured: false,
                 category: 'lip',
                 stock: 20,
                 new: false
             },
             {
                 id: 'phka-highlighter-01',
                 name: 'ផ្កា រំដួល', // Khmer Name
                 price: 10,
                 description: 'A lightweight liquid highlighter that gives a radiant, dewy glow. Perfect for layering or wearing alone.',
                 images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613798823-1000022450.jpg&w=256&q=100',
                    'https://via.placeholder.com/400x400/fce4ec/333333?text=Highlighter+Swatch',
                    'https://via.placeholder.com/400x400/f8bbd0/ffffff?text=Highlighter+Texture'
                 ],
                 colors: ['#F08080'], // Light Coral color example
                 featured: false,
                 category: 'face',
                 stock: 12,
                 new: false
             }
        ],
        skincare: [
            {
                id: 'skincare-cleanser-01',
                name: 'Gentle Cleansing Foam',
                price: 10,
                description: 'A mild yet effective foaming cleanser that removes impurities without stripping the skin\'s natural moisture barrier.',
                images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742614772374-1000022455.jpg&w=256&q=100',
                    'https://via.placeholder.com/400x400/bbdefb/333333?text=Cleanser+Texture'
                ],
                colors: [],
                featured: true,
                category: 'cleanser',
                stock: 30,
                new: false
            },
            {
                id: 'skincare-toner-01',
                name: 'Hydrating Toner',
                price: 10,
                description: 'An alcohol-free toner packed with hyaluronic acid and botanical extracts to hydrate, soothe, and balance the skin\'s pH.',
                images: [
                    'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742614861763-1000022456.jpg&w=256&q=100',
                    'https://via.placeholder.com/400x400/b2ebf2/333333?text=Toner+Usage'
                ],
                colors: [],
                featured: false,
                category: 'toner',
                stock: 25,
                new: false
            }
        ]
    };

    // ==========================================
    // Testimonial Data
    // ==========================================
    const testimonials = [
        {
            name: "pich pisey.",
            comment: " The skincare line is fantastic! My skin feels so hydrated and fresh after using the cleanser and toner.", // Renamed from review
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?lk3s=a5d48078&x-expires=1744156800&x-signature=zLp4N192y6%2F%2Bu%2BRkUjH0zP1Xw7o%3D"
        },
        {
            name: "pich pisey.",
            comment: "The cream blush is so easy to blend and gives a beautiful flush of color. My new favorite!",
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?lk3s=a5d48078&x-expires=1744156800&x-signature=zLp4N192y6%2F%2Bu%2BRkUjH0zP1Xw7o%3D"
        },
        {
            name: "Pich Pisey.",
            comment: "I adore the eyeshadow palette! The shades are perfect for everyday looks and the formula is amazing.",
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?lk3s=a5d48078&x-expires=1744156800&x-signature=zLp4N192y6%2F%2Bu%2BRkUjH0zP1Xw7o%3D"
        },
    ];

    // ==========================================
    // Instagram Feeds Data
    // ==========================================
     const feeds = [
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F1.jpg&w=256&q=100",
             likes: 3842,
             caption: "Feeling pretty in pink with our new collection! ✨ #PHKAcosmetics #newcollection #pinkmakeup"
         },
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F2.jpg&w=256&q=100",
             likes: 2869,
             caption: "Lipstick swatches that pop! Which pink shade is your favorite? 💄 #PHKAlips #lipstickaddict #pinklips"
         },
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F3.jpg&w=256&q=100",
             likes: 4280,
             caption: "Your daily dose of hydration 💧 Healthy skin is the best base for any makeup look. #skincareroutine #phkaskincare #glowingskin"
         },
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F4.jpg&w=256&q=100",
             likes: 3760, // Reduced likes slightly for variation
             caption: "Behind the scenes magic at our latest pink campaign shoot 📸 #PHKAteam #photoshoot #beautybrand"
         },
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F5.jpg&w=256&q=100",
             likes: 2980,
             caption: "Weekend essentials sorted 💕 Our cream blush and matte lipstick are must-haves. #PHKAblush #makeupflatlay #beautyessentials"
         },
         {
             image: "https://pichpisey.shop/_next/image?url=%2Fimages%2FFeed%2F6.jpg&w=256&q=100",
             likes: 3100,
             caption: "Self-care Sunday never looked so good. Treat your skin! 🧖‍♀️ #PHKAskincare #selfcare #skincarelover"
         }
     ];

    // ==========================================
    // Elements
    // ==========================================
    const body = document.body;
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-navigation');
    const closeNavBtn = document.getElementById('close-nav-btn');
    const navLinks = mainNav ? mainNav.querySelectorAll('.nav-link') : []; // Check if mainNav exists

    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const cartCount = document.querySelector('.cart-count');
    const cartOverlay = document.getElementById('cart-overlay');

    const slidesContainer = document.getElementById('slides');
    const prevSlideBtn = document.getElementById('prev-slide');
    const nextSlideBtn = document.getElementById('next-slide');
    const dotsContainer = document.getElementById('banner-dots');

    const phkaProductsGrid = document.getElementById('phka-products-grid');
    const skincareProductsGrid = document.getElementById('skincare-products-grid');
    const mainContent = document.querySelector('.main-content'); // Used for event delegation

    const testimonialsContainer = document.getElementById('testimonials-container');
    const feedsGrid = document.getElementById('feeds-grid');
    const newsletterForm = document.getElementById('newsletter-form');
    const backToTop = document.getElementById('back-to-top');

    const quickViewModal = document.getElementById('quick-view-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const productQuickViewContainer = document.getElementById('product-quick-view');
    const modalOverlay = document.getElementById('modal-overlay');

    const notificationToast = document.getElementById('notification-toast');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = notificationToast ? notificationToast.querySelector('.notification-icon') : null; // Check if toast exists
    const closeToastBtn = document.getElementById('close-toast');

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const currentYearSpan = document.getElementById('current-year');

    // === Cart Footer Elements ===
    const locationInput = document.getElementById('cart-location');
    const phoneInput = document.getElementById('cart-phone');
    const checkoutButton = document.getElementById('checkout-qr-button');


    // ==========================================
    // State Variables
    // ==========================================
    let cart = JSON.parse(localStorage.getItem('phkaCart')) || [];
    let currentSlide = 0;
    let slideInterval;
    let notificationTimeout;
    let headerHeight = 75; // Default, will update dynamically
    try { // Get header height safely
         headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 75;
    } catch (e) { console.warn("Could not read --header-height CSS variable."); }


    // ==========================================
    // Dark Mode Functionality
    // ==========================================
    function applyDarkMode(isDark) {
        if (!darkModeToggle) return; // Check if toggle exists
        const icon = darkModeToggle.querySelector('i');
        if (!icon) return; // Check if icon exists

        if (isDark) {
            body.classList.add('dark-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            darkModeToggle.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            body.classList.remove('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            darkModeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    }

    function toggleDarkMode() {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('phkaDarkMode', isDarkMode);
        applyDarkMode(isDarkMode);
    }

    // Check local storage on load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedDarkMode = localStorage.getItem('phkaDarkMode');

    if (savedDarkMode !== null) {
        applyDarkMode(savedDarkMode === 'true');
    } else {
        // Optional: Respect OS preference if no setting saved
        // applyDarkMode(prefersDark);
    }

    // ==========================================
    // Mobile Navigation
    // ==========================================
    function openMobileNav() {
        if(!mainNav || !menuToggle || !cartOverlay || !body) return;
        mainNav.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        cartOverlay.classList.add('active'); // Use cart overlay for nav too
        body.classList.add('nav-open'); // Specific class for nav
    }

    function closeMobileNav() {
        if(!mainNav || !menuToggle || !cartOverlay || !body || !cartSidebar) return;
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        // Only remove overlay if cart is also closed
        if (!cartSidebar.classList.contains('active')) {
            cartOverlay.classList.remove('active');
             body.classList.remove('no-scroll'); // Remove general scroll lock if overlay gone
        }
        body.classList.remove('nav-open'); // Remove nav specific lock
    }

    // ==========================================
    // Cart Functionality
    // ==========================================
    function updateCartCount() {
         if (!cartCount) return;
         const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
         cartCount.textContent = totalItems;
         cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
     }

    function updateCartDisplay() {
         if (!cartItemsContainer || !cartTotalAmount || !checkoutButton) return;

         cartItemsContainer.innerHTML = ''; // Clear previous items
         let total = 0;

         if (cart.length === 0) {
             cartItemsContainer.innerHTML = `
                 <div class="empty-cart">
                     <i class="fas fa-shopping-bag"></i>
                     <p>Your cart is empty</p>
                     <button class="btn btn-secondary close-cart-btn">Start Shopping</button>
                 </div>
             `;
             checkoutButton.disabled = true; // Disable checkout when empty
             if (locationInput) locationInput.value = ''; // Clear inputs
             if (phoneInput) phoneInput.value = '';
             // Remove potential validation styles
             if (locationInput) locationInput.classList.remove('invalid-input');
             if (phoneInput) phoneInput.classList.remove('invalid-input');

         } else {
             cart.forEach((item, index) => {
                 const itemPrice = parseFloat(item.price) || 0; // Ensure price is a number
                 const subtotal = itemPrice * item.quantity;
                 total += subtotal;

                 const cartItemElement = document.createElement('div');
                 cartItemElement.className = 'cart-item';
                 cartItemElement.setAttribute('data-index', index); // Use index for removal/update
                 cartItemElement.innerHTML = `
                     <div class="cart-item-image">
                         <img src="${item.image}" alt="${item.name}" loading="lazy">
                     </div>
                     <div class="cart-item-details">
                         <div>
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${itemPrice.toFixed(2)}</div>
                         </div>
                         <div class="cart-item-actions">
                             <div class="quantity-selector">
                                 <button class="quantity-btn quantity-decrease" aria-label="Decrease quantity for ${item.name}">-</button>
                                 <span class="quantity">${item.quantity}</span>
                                 <button class="quantity-btn quantity-increase" aria-label="Increase quantity for ${item.name}">+</button>
                             </div>
                             <button class="remove-item" aria-label="Remove ${item.name} from cart">
                                 <i class="fas fa-trash-alt"></i>
                             </button>
                         </div>
                     </div>
                 `;
                 cartItemsContainer.appendChild(cartItemElement);
             });
             // Enable checkout button only if cart is not empty
             checkoutButton.disabled = false;
         }

         cartTotalAmount.textContent = `$${total.toFixed(2)}`;
         updateCartCount();
    }


    function saveCart() {
        localStorage.setItem('phkaCart', JSON.stringify(cart));
    }

    function addToCart(product, quantity = 1) {
         if (!product) {
            console.error("Attempted to add null product to cart.");
            showNotification("Error: Could not add item.", "error");
            return;
         }
         const productPrice = parseFloat(product.price) || 0;
         const productStock = parseInt(product.stock) || 0;

         if (productStock <= 0) {
             showNotification(`${product.name} is out of stock!`, 'error');
             return;
         }

         const existingItemIndex = cart.findIndex(item => item.id === product.id);
         let addedNotification = false;

         if (existingItemIndex !== -1) {
             const currentCartQuantity = cart[existingItemIndex].quantity;
             const canAddQuantity = productStock - currentCartQuantity;

             if (quantity > canAddQuantity) {
                 if (canAddQuantity > 0) {
                     showNotification(`Only ${canAddQuantity} more of ${product.name} available. Added maximum available.`, 'info');
                     cart[existingItemIndex].quantity += canAddQuantity;
                     addedNotification = true;
                 } else {
                      showNotification(`Maximum stock (${productStock}) already in cart for ${product.name}.`, 'info');
                     return; // Cannot add more
                 }
             } else {
                 cart[existingItemIndex].quantity += quantity;
             }
         } else {
             // Adding a new item
             if (quantity > productStock) {
                 showNotification(`Only ${productStock} of ${product.name} available. Added maximum stock.`, 'info');
                 quantity = productStock; // Add max available
                 addedNotification = true;
             }
             cart.push({
                 id: product.id,
                 name: product.name,
                 price: productPrice, // Store numeric price
                 image: product.images[0],
                 quantity: quantity
             });
         }

         saveCart();
         updateCartDisplay();
         if (!addedNotification) {
              showNotification(`${product.name} added to cart!`, 'success');
         }
     }


    function decreaseQuantity(index) {
        if (cart[index]) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                // If quantity is 1, remove the item instead of decreasing
                removeFromCart(index); // Call remove function directly
                return; // Exit decrease function early
            }
            saveCart();
            updateCartDisplay();
        } else {
            console.warn(`Attempted to decrease quantity for invalid index: ${index}`);
        }
    }

    function increaseQuantity(index) {
         if (cart[index]) {
             const product = findProductById(cart[index].id);
             const productStock = product ? (parseInt(product.stock) || 0) : Infinity;

             if (cart[index].quantity >= productStock) {
                 showNotification(`Maximum stock (${productStock}) reached for ${product?.name || 'item'}`, 'info');
                 return;
             }
             cart[index].quantity += 1;
             saveCart();
             updateCartDisplay();
         } else {
             console.warn(`Attempted to increase quantity for invalid index: ${index}`);
         }
    }

    function removeFromCart(index) {
         if (cart[index]) {
             const removedItemName = cart[index].name;
             cart.splice(index, 1);
             saveCart();
             updateCartDisplay();
             showNotification(`${removedItemName} removed from cart`, 'info');
         } else {
            console.warn(`Attempted to remove item at invalid index: ${index}`);
         }
    }

    // Use event delegation for cart items
    function handleCartActions(e) {
         const target = e.target;

         // Close button inside empty cart
         if (target.closest('.empty-cart .close-cart-btn')) {
              closeCartSidebar();
              return;
          }

         const cartItem = target.closest('.cart-item');
         if (!cartItem) return; // Click was not inside a cart item

         const indexStr = cartItem.dataset.index;
         if (indexStr === undefined) return; // No index found

         const index = parseInt(indexStr);
         if (isNaN(index)) return; // Index is not a number

         if (target.closest('.quantity-decrease')) {
             decreaseQuantity(index);
         } else if (target.closest('.quantity-increase')) {
             increaseQuantity(index);
         } else if (target.closest('.remove-item')) {
             removeFromCart(index);
         }
     }


    function openCartSidebar() {
        if (!cartSidebar || !cartOverlay || !body) return;
        updateCartDisplay(); // Update content before showing
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        body.classList.add('no-scroll'); // General scroll lock
        body.classList.add('modal-open'); // Also use modal-open for consistency? or keep separate? Using 'no-scroll' for now.
    }

    function closeCartSidebar() {
        if (!cartSidebar || !cartOverlay || !body || !mainNav) return;
        cartSidebar.classList.remove('active');
         // Only remove overlay and scroll lock if mobile nav is also closed
        if (!mainNav.classList.contains('active')) {
             cartOverlay.classList.remove('active');
             body.classList.remove('no-scroll');
        }
    }

    // ==========================================
    // Product Grid Generation & Interaction
    // ==========================================
    function renderProductCard(product) {
        if (!product || !product.id || !product.name) {
            console.error("Invalid product data passed to renderProductCard:", product);
            return null; // Return null or an empty element
        }

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', product.id);

        const isNew = product.new === true; // Explicit boolean check
        const productStock = parseInt(product.stock) || 0;
        const outOfStock = productStock <= 0;

        const newBadge = isNew ? `<span class="product-badge new-badge">New</span>` : '';
        const stockBadge = outOfStock ? `<span class="product-badge stock-badge">Sold Out</span>` : '';

        let colorOptions = '';
        if (Array.isArray(product.colors) && product.colors.length > 0) {
            colorOptions = `
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-option" style="background-color: ${color};" title="Color Option"></span>`).join('')}
                </div>
            `;
        }

        const productPrice = parseFloat(product.price) || 0;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images && product.images.length > 0 ? product.images[0] : 'placeholder.jpg'}" alt="${product.name}" loading="lazy">
                ${newBadge}
                ${stockBadge}
                <div class="product-actions">
                    <button class="quick-view-btn" data-product-id="${product.id}" aria-label="Quick view ${product.name}">
                        <i class="far fa-eye"></i>
                    </button>
                    <button class="add-to-cart-btn" data-product-id="${product.id}" aria-label="Add ${product.name} to cart" ${outOfStock ? 'disabled' : ''}>
                        <i class="fas fa-${outOfStock ? 'ban' : 'shopping-bag'}"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${productPrice.toFixed(2)}</div>
                ${colorOptions}
            </div>
        `;

        return productCard;
    }

    function populateProductGrid(gridElement, productList, emptyMessage) {
         if (!gridElement) {
             console.error("Target grid element not found.");
             return;
         }
         gridElement.innerHTML = `<p class="loading-text">Loading products...</p>`; // Show loading

         setTimeout(() => { // Simulate loading delay
             gridElement.innerHTML = ''; // Clear loading text
             if (!Array.isArray(productList) || productList.length === 0) {
                 gridElement.innerHTML = `<p class="loading-text">${emptyMessage}</p>`;
                 return;
             }

             productList.forEach(product => {
                 const productCard = renderProductCard(product);
                 if (productCard) { // Only append if card was created successfully
                    gridElement.appendChild(productCard);
                 }
             });
         }, 200); // Small delay
     }

     function populateAllProductGrids() {
         populateProductGrid(phkaProductsGrid, products.phka, 'No PHKA products found.');
         populateProductGrid(skincareProductsGrid, products.skincare, 'No Skincare products found.');
     }

    function handleProductGridClick(e) {
        const target = e.target;
        const quickViewButton = target.closest('.quick-view-btn');
        const addToCartButton = target.closest('.add-to-cart-btn');

        if (quickViewButton) {
            e.preventDefault();
            const productId = quickViewButton.dataset.productId;
            if (productId) {
                openQuickViewModal(productId);
            } else {
                console.error("Quick view button missing product ID.");
            }
        } else if (addToCartButton) {
            e.preventDefault();
            if (addToCartButton.disabled) return; // Check disabled state

            const productId = addToCartButton.dataset.productId;
            if (productId) {
                const product = findProductById(productId);
                if (product) {
                    addToCart(product);
                    // Optional: Visual feedback
                    addToCartButton.classList.add('added');
                    setTimeout(() => addToCartButton.classList.remove('added'), 1000);
                } else {
                    console.error("Product not found for ID:", productId);
                    showNotification("Error: Could not find product.", "error");
                }
            } else {
                 console.error("Add to cart button missing product ID.");
            }
        }
    }


    function findProductById(productId) {
         if (!productId || !products || typeof products !== 'object') return null;
         const phkaProduct = Array.isArray(products.phka) ? products.phka.find(p => p && p.id === productId) : null;
         if (phkaProduct) return phkaProduct;
         const skincareProduct = Array.isArray(products.skincare) ? products.skincare.find(p => p && p.id === productId) : null;
         return skincareProduct;
    }


    // ==========================================
    // Testimonials Section
    // ==========================================
    function renderTestimonials() {
         if (!testimonialsContainer) return;
         testimonialsContainer.innerHTML = '<p class="loading-text">Loading reviews...</p>';
         setTimeout(() => {
             testimonialsContainer.innerHTML = '';
             if (!Array.isArray(testimonials) || testimonials.length === 0) {
                 testimonialsContainer.innerHTML = '<p class="loading-text">No reviews available yet.</p>';
                 return;
             }

             testimonials.forEach(testimonial => {
                 const testimonialElement = document.createElement('div');
                 testimonialElement.className = 'testimonial';
                 testimonialElement.innerHTML = `
                     <div class="testimonial-header">
                         <div class="testimonial-avatar">
                             <img src="${testimonial.image || 'placeholder-avatar.jpg'}" alt="${testimonial.name || 'Customer'}" loading="lazy">
                         </div>
                         <div class="testimonial-meta">
                             <h4 class="testimonial-name">${testimonial.name || 'Anonymous'}</h4>
                         </div>
                     </div>
                     <div class="testimonial-content">
                         <p>"${testimonial.comment || 'No comment provided.'}"</p>
                     </div>
                 `;
                 testimonialsContainer.appendChild(testimonialElement);
             });
         }, 200); // Simulate loading
     }

    // ==========================================
    // Instagram Feeds Section
    // ==========================================
    function renderFeeds() {
         if (!feedsGrid) return;
         feedsGrid.innerHTML = '<p class="loading-text">Loading feeds...</p>';
         setTimeout(() => {
              feedsGrid.innerHTML = '';
              if (!Array.isArray(feeds) || feeds.length === 0) {
                  feedsGrid.innerHTML = '<p class="loading-text">Could not load Instagram feed.</p>';
                  return;
              }

             feeds.forEach(feed => {
                 const feedElement = document.createElement('a');
                 feedElement.className = 'feed-item';
                 feedElement.href = "https://instagram.com/phka_cosmetics"; // Generic link
                 feedElement.target = "_blank";
                 feedElement.rel = "noopener noreferrer";
                 const shortCaption = (feed.caption || 'Instagram Post').substring(0, 50);
                 feedElement.setAttribute('aria-label', `View Instagram post: ${shortCaption}...`);

                 feedElement.innerHTML = `
                     <div class="feed-image">
                         <img src="${feed.image || 'placeholder.jpg'}" alt="Instagram Post: ${shortCaption}..." loading="lazy">
                         <div class="feed-overlay">
                             <div class="feed-info">
                                 <span><i class="fas fa-heart" aria-hidden="true"></i> ${feed.likes || 0}</span>
                             </div>
                         </div>
                     </div>
                 `;
                 feedsGrid.appendChild(feedElement);
             });
          }, 200); // Simulate loading
     }

    // ==========================================
    // Banner Slider
    // ==========================================
    function setupSlider() {
         if (!slidesContainer || !prevSlideBtn || !nextSlideBtn || !dotsContainer) {
             console.warn("Slider elements not found, skipping setup.");
             return;
         }

         const slideElements = slidesContainer.querySelectorAll('.slide');
         const totalSlides = slideElements.length;

         if (totalSlides <= 1) {
              if(prevSlideBtn) prevSlideBtn.style.display = 'none';
              if(nextSlideBtn) nextSlideBtn.style.display = 'none';
              if(dotsContainer) dotsContainer.style.display = 'none';
              if (slideElements.length === 1) {
                 slideElements[0].classList.add('active');
                 slideElements[0].setAttribute('aria-hidden', 'false');
              }
              return;
          };

         dotsContainer.innerHTML = ''; // Clear previous dots

         for (let i = 0; i < totalSlides; i++) {
             const dot = document.createElement('button'); // Use button for accessibility
             dot.classList.add('dot');
             dot.dataset.index = i;
             dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
             dot.setAttribute('role', 'tab'); // Role for tablist
             dot.setAttribute('aria-controls', 'slides'); // Controls the slides container
             dot.setAttribute('aria-selected', 'false');
             dotsContainer.appendChild(dot);
         }
         const dotElements = dotsContainer.querySelectorAll('.dot');

         function showSlide(index) {
             if (index >= totalSlides) index = 0;
             if (index < 0) index = totalSlides - 1;

             slidesContainer.style.transform = `translateX(-${index * 100}%)`;

             slideElements.forEach((slide, i) => {
                  slide.classList.toggle('active', i === index);
                  slide.setAttribute('aria-hidden', i !== index);
             });

              dotElements.forEach((dot, i) => {
                  dot.classList.toggle('active', i === index);
                   dot.setAttribute('aria-selected', i === index);
              });

             currentSlide = index;
         }

         function next() { showSlide(currentSlide + 1); }
         function prev() { showSlide(currentSlide - 1); }

         function startAutoSlide() {
             stopAutoSlide();
             slideInterval = setInterval(next, 5000);
         }
         function stopAutoSlide() { clearInterval(slideInterval); }

         nextSlideBtn.addEventListener('click', () => { next(); stopAutoSlide(); startAutoSlide(); });
         prevSlideBtn.addEventListener('click', () => { prev(); stopAutoSlide(); startAutoSlide(); });

         dotsContainer.addEventListener('click', (e) => {
              if (e.target.classList.contains('dot') && e.target.dataset.index !== undefined) {
                  const index = parseInt(e.target.dataset.index);
                  if (!isNaN(index)) {
                      showSlide(index);
                      stopAutoSlide();
                      startAutoSlide();
                  }
              }
          });

         // Pause on hover/focus
         const sliderElement = slidesContainer.parentElement;
         if (sliderElement) {
             sliderElement.addEventListener('mouseenter', stopAutoSlide);
             sliderElement.addEventListener('mouseleave', startAutoSlide);
             sliderElement.addEventListener('focusin', stopAutoSlide);
             sliderElement.addEventListener('focusout', startAutoSlide);
         }

         // Initialize
         showSlide(0);
         startAutoSlide();
     }


    // ==========================================
    // Quick View Modal
    // ==========================================
    function openQuickViewModal(productId) {
         if (!productQuickViewContainer || !modalOverlay || !quickViewModal || !body || !closeModalBtn) return;

         const product = findProductById(productId);
         if (!product) {
             console.error("Product not found for Quick View:", productId);
             showNotification('Could not load product details.', 'error');
             return;
         }

         productQuickViewContainer.innerHTML = '<p class="loading-text">Loading product details...</p>';
         modalOverlay.classList.add('active');
         quickViewModal.classList.add('active');
         body.classList.add('modal-open'); // Use dedicated class

         setTimeout(() => { closeModalBtn.focus(); }, 150); // Focus close button

         setTimeout(() => { renderQuickViewContent(product); }, 100); // Render content
     }

    function renderQuickViewContent(product) {
        if (!productQuickViewContainer) return;
        const productPrice = parseFloat(product.price) || 0;
        const productStock = parseInt(product.stock) || 0;
        const outOfStock = productStock <= 0;

        let colorOptionsHtml = '';
        if (Array.isArray(product.colors) && product.colors.length > 0) {
            colorOptionsHtml = `
                <div class="product-colors">
                    <span class="color-label">Colors:</span>
                    ${product.colors.map(color => `
                        <span class="color-option" style="background-color: ${color};"
                              role="button" tabindex="0" title="Select color ${color}" aria-label="Select color ${color}"></span>
                    `).join('')}
                </div>
            `;
        }

        const stockStatusClass = outOfStock ? 'out-of-stock' : 'in-stock';
        const stockText = outOfStock ? 'Out of Stock' : `In Stock (${productStock} available)`;
        const categoryText = product.category ? `Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}` : '';

        productQuickViewContainer.innerHTML = `
            <div class="quick-view-gallery">
                <div class="main-image">
                    <img src="${product.images && product.images.length > 0 ? product.images[0] : 'placeholder.jpg'}" alt="${product.name}" id="main-product-image">
                </div>
                 ${product.images && product.images.length > 1 ? /* Only show thumbnails if more than one image */
                    `<div class="thumbnails">
                        ${product.images.map((image, index) => `
                            <button class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}" aria-label="View image ${index + 1} of ${product.name}">
                                <img src="${image}" alt="">
                            </button>
                        `).join('')}
                    </div>`
                 : '' }
            </div>
            <div class="quick-view-details">
                <h3 class="product-name">${product.name}</h3>
                 <div class="product-meta top-meta">
                     <p class="stock-status ${stockStatusClass}">${stockText}</p>
                     ${categoryText ? `<p class="product-category">${categoryText}</p>` : ''}
                 </div>
                <div class="product-price">$${productPrice.toFixed(2)}</div>
                 ${product.description ?
                  `<div class="product-description">
                     <p>${product.description}</p>
                   </div>`
                  : ''
                 }
                ${colorOptionsHtml}
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn quantity-decrease" id="modal-quantity-decrease" aria-label="Decrease quantity">-</button>
                        <span class="quantity" id="modal-quantity" aria-live="polite">1</span>
                        <button class="quantity-btn quantity-increase" id="modal-quantity-increase" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="btn modal-add-to-cart" data-product-id="${product.id}" ${outOfStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-bag" aria-hidden="true"></i>&nbsp;
                        ${outOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
     }


    function handleQuickViewInteraction(e) {
         const target = e.target;
         if (!productQuickViewContainer) return;

         // Thumbnail Click (using button now)
         if (target.closest('.thumbnail')) {
             const thumbnail = target.closest('.thumbnail');
             const mainImage = document.getElementById('main-product-image');
             if (mainImage && thumbnail.dataset.image) {
                 mainImage.src = thumbnail.dataset.image;
                 // Update active state
                 productQuickViewContainer.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                 thumbnail.classList.add('active');
             }
         }

         // Quantity Adjustment
         const quantityDisplay = document.getElementById('modal-quantity');
         if (quantityDisplay) {
             let currentQuantity = parseInt(quantityDisplay.textContent);
             const modalAddToCartBtn = productQuickViewContainer.querySelector('.modal-add-to-cart');
             const productId = modalAddToCartBtn?.dataset.productId;
             const product = findProductById(productId);
             const productStock = product ? (parseInt(product.stock) || 0) : Infinity;

              if (target.closest('#modal-quantity-decrease')) {
                 if (currentQuantity > 1) {
                     quantityDisplay.textContent = currentQuantity - 1;
                 }
             } else if (target.closest('#modal-quantity-increase')) {
                  if (currentQuantity < productStock) {
                      quantityDisplay.textContent = currentQuantity + 1;
                  } else if (productStock > 0) { // Only show notification if stock exists but limit reached
                     showNotification(`Maximum stock (${productStock}) reached`, 'info');
                  }
             }
         }

         // Add to Cart Button
         const addToCartButton = target.closest('.modal-add-to-cart');
         if (addToCartButton && !addToCartButton.disabled) {
              const productId = addToCartButton.dataset.productId;
              const quantityEl = document.getElementById('modal-quantity');
              const quantity = quantityEl ? parseInt(quantityEl.textContent) : 1;

              if (isNaN(quantity) || quantity < 1) {
                   console.error("Invalid quantity selected in modal");
                   showNotification("Invalid quantity selected.", "error");
                   return;
              }

              const product = findProductById(productId);
              if (product) {
                  addToCart(product, quantity);
                  closeQuickViewModal();
              } else {
                  console.error("Product not found when adding from modal:", productId);
                  showNotification("Error adding product to cart.", "error");
              }
         }

          // Color Option Click
          if (target.classList.contains('color-option')) {
              productQuickViewContainer.querySelectorAll('.color-option').forEach(co => co.classList.remove('selected'));
              target.classList.add('selected');
              // console.log("Selected color:", target.style.backgroundColor);
          }
     }

    function closeQuickViewModal() {
         if (!modalOverlay || !quickViewModal || !body) return;
         modalOverlay.classList.remove('active');
         quickViewModal.classList.remove('active');
         body.classList.remove('modal-open');

         // Focus back to the button that opened the modal? More complex, skip for now.

         setTimeout(() => {
             if (productQuickViewContainer) productQuickViewContainer.innerHTML = '';
         }, 300); // Match transition duration
    }

    // ==========================================
    // Notification Toast
    // ==========================================
    function showNotification(message, type = 'info') {
        if (!notificationToast || !notificationMessage || !notificationIcon) return;

        clearTimeout(notificationTimeout);

        notificationMessage.textContent = message;
        notificationToast.className = 'notification-toast'; // Reset classes
        notificationToast.classList.add(type); // Add type class

        let iconClass = 'fa-info-circle';
        if (type === 'success') iconClass = 'fa-check-circle';
        else if (type === 'error') iconClass = 'fa-times-circle';
        notificationIcon.className = `fas ${iconClass} notification-icon`;

        notificationToast.classList.add('active');

        notificationTimeout = setTimeout(() => {
            notificationToast.classList.remove('active');
        }, 4000);
    }

    function closeNotification() {
         clearTimeout(notificationTimeout);
         if(notificationToast) notificationToast.classList.remove('active');
    }


    // ==========================================
    // Newsletter Form
    // ==========================================
    function handleNewsletterSubmit(e) {
         e.preventDefault();
         if (!newsletterForm) return;
         const emailInput = newsletterForm.querySelector('input[type="email"]');
         const submitButton = newsletterForm.querySelector('button[type="submit"]');
         if (!emailInput || !submitButton) return;

         const email = emailInput.value.trim();

         if (email && emailInput.checkValidity()) {
             console.log('Newsletter subscription attempt:', email);
             emailInput.disabled = true;
             submitButton.disabled = true;
             submitButton.textContent = 'Subscribing...';

             setTimeout(() => {
                 emailInput.value = '';
                 emailInput.disabled = false;
                 submitButton.disabled = false;
                 submitButton.textContent = 'Subscribe';
                 showNotification('Thank you for subscribing!', 'success');
             }, 1500);
         } else {
              showNotification('Please enter a valid email address.', 'error');
              emailInput.focus();
              // Optional: add invalid style
               emailInput.classList.add('invalid-input');
               emailInput.style.borderColor = 'var(--error-color)';
               // Remove validation style after a delay or on input change
               emailInput.addEventListener('input', () => {
                   emailInput.classList.remove('invalid-input');
                   emailInput.style.borderColor = '';
               }, { once: true });
         }
     }

    // ==========================================
    // Back to Top Button & Scroll Handling
    // ==========================================
    function handleScroll() {
        // Back to Top Button Visibility
        if (backToTop) {
             if (window.scrollY > 300) {
                 backToTop.classList.add('show');
             } else {
                 backToTop.classList.remove('show');
             }
        }
        // Update Active Nav Link Highlighting
        updateActiveNavLink();
    }

    // ==========================================
    // Active Nav Link Highlighting
    // ==========================================
    function updateActiveNavLink() {
         if (!navLinks || navLinks.length === 0) return;

         let currentSectionId = '';
         const sections = document.querySelectorAll('section[id], footer[id]'); // Include footer ID
          // Adjust threshold: slightly more than header height + some buffer
         const scrollThreshold = window.scrollY + headerHeight + 50;

         sections.forEach(section => {
              // Ensure section has an ID and is visible enough
             const sectionId = section.getAttribute('id');
             if (!sectionId) return;

             const sectionTop = section.offsetTop;
             const sectionHeight = section.offsetHeight;
             // Consider a section active if its top is within the threshold range
             if (scrollThreshold >= sectionTop && scrollThreshold < sectionTop + sectionHeight) {
                  currentSectionId = sectionId;
             }
             // Special case: if we scrolled past the top of a section, mark it as current
             // This helps catch sections quickly as you scroll down.
             else if (scrollThreshold >= sectionTop && currentSectionId === '') {
                  // Check if *any* part of the section is currently visible
                  const rect = section.getBoundingClientRect();
                  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                      currentSectionId = sectionId;
                  }
             }
         });


         // --- Edge Case Handling ---
         // 1. Very Top of Page: If scroll is very low, default to 'Home' ('top')
         if (window.scrollY < headerHeight) { // Reduced threshold
             currentSectionId = 'top';
         }

         // 2. Bottom of Page: If near the bottom, force 'Contact' ('footer-contact')
         const footerContact = document.getElementById('footer-contact');
         // Check if the bottom of the viewport is close to or past the bottom of the document
         if (footerContact && (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100)) {
             currentSectionId = 'footer-contact';
         }

         // --- Apply active class ---
         navLinks.forEach(link => {
             link.classList.remove('active-link');
             const linkHref = link.getAttribute('href');

              // Match link href with currentSectionId (handle '#top' separately)
             if (linkHref === `#${currentSectionId}` || (currentSectionId === 'top' && linkHref === '#top')) {
                 link.classList.add('active-link');
             }
         });
     }


     // ==========================================
     // Telegram Integration
     // ==========================================
     // !!! IMPORTANT: Replace with your actual Bot Token and Chat ID !!!
     const TELEGRAM_BOT_TOKEN = '7775302991:AAGhN0WzRQ7FNu4z_TJkOTPU6peAPZuMlnU'; // <--- REPLACE
     const TELEGRAM_CHAT_ID = '1732455712';   // <--- REPLACE (User ID, Group ID starting with '-', or Channel ID starting with '-')

     // Helper function to escape characters for Telegram MarkdownV2
     function escapeTelegramMarkdownV2(text) {
          if (typeof text !== 'string') {
              text = String(text); // Convert non-strings to strings
          }
          // Escape characters: _ * [ ] ( ) ~ ` > # + - = | { } . ! \
          // Added \ to the list of chars to escape
          const charsToEscape = /[_*[\]()~`>#+\-=|{}.!\\]/g; // Added backslash here
          // First escape the backslash itself, then escape the other characters
          return text.replace(/\\/g, '\\\\').replace(charsToEscape, '\\$&');
     }


     async function sendOrderToTelegram(orderData) {
         // Safety check: Only log config errors to console, don't notify user
         if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === 'YOUR_TELEGRAM_BOT_TOKEN' || !TELEGRAM_BOT_TOKEN.includes(':')) {
             console.error("Telegram Bot Token is missing, invalid, or is a placeholder! Please replace it in the script.");
             return false; // Stop execution
         }
          if (!TELEGRAM_CHAT_ID || TELEGRAM_CHAT_ID === 'YOUR_TELEGRAM_CHAT_ID') {
             console.error("Telegram Chat ID is missing or is a placeholder! Please replace it in the script.");
             return false; // Stop execution
         }

         // Format the message using MarkdownV2, escaping ALL dynamic parts
         let message = `🛍️ *New PHKA Order*\n\n`;
         message += `📍 *Location:* ${escapeTelegramMarkdownV2(orderData.location)}\n`;
         message += `📞 *Phone:* ${escapeTelegramMarkdownV2(orderData.phone)}\n\n`;
         message += `🛒 *Items:*\n`;

         orderData.cartItems.forEach(item => {
             const itemPrice = parseFloat(item.price) || 0;
             const itemQuantity = parseInt(item.quantity) || 0;
             const itemSubtotal = (itemPrice * itemQuantity).toFixed(2);

             const itemNameEscaped = escapeTelegramMarkdownV2(item.name);
             const quantityEscaped = escapeTelegramMarkdownV2(`x${itemQuantity}`);
             // Escape the subtotal string, including the decimal point and currency symbol
             const subtotalStringEscaped = escapeTelegramMarkdownV2(`$${itemSubtotal}`);

             message += `\\- ${itemNameEscaped} \\(${quantityEscaped}\\) \\- ${subtotalStringEscaped}\n`; // Use escaped '-' for list item
         });

         const totalAmountEscaped = escapeTelegramMarkdownV2(orderData.totalAmount); // Total amount is already "$XX.XX" string
         message += `\n💰 *Total:* ${totalAmountEscaped}\n`;

         // Add current date/time (escape the result)
          // Use a specific timezone relevant to the business (e.g., Cambodia)
         const dateTimeString = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Phnom_Penh', // Example: Indochina Time
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', hour12: true
         });
         message += `\n🗓️ *Date:* ${escapeTelegramMarkdownV2(dateTimeString)}`;


         const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
         const payload = {
             chat_id: TELEGRAM_CHAT_ID,
             text: message,
             parse_mode: 'MarkdownV2'
         };

         try {
             const response = await fetch(url, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(payload),
             });
             const responseData = await response.json();

             if (response.ok && responseData.ok) {
                 console.log('Order sent to Telegram successfully!');
                 return true;
             } else {
                 // Log detailed error for debugging
                 console.error('Error sending order to Telegram:', response.status, responseData);
                 // Provide a user-friendly error message
                 let errorMsg = `Error: ${responseData.description || 'Could not submit order.'}`;
                  // Simplify common user-facing errors
                 if (response.status === 400 && responseData.description?.includes("can't parse entities")) {
                    // This often means markdown escaping failed. Log the raw message for debugging.
                    console.error("Telegram MarkdownV2 Parsing Error. Raw message:", message);
                    errorMsg = "Submission error (Format). Please contact support.";
                 } else if (response.status === 401 || response.status === 403) {
                    errorMsg = "Submission error (Auth). Please contact support.";
                    console.error("Check your Telegram Bot Token.");
                 } else if (response.status === 404) {
                     errorMsg = "Submission error (Not Found). Please contact support.";
                     console.error("Check your Telegram Bot Token or API endpoint.");
                 } else if (responseData.description?.includes("chat not found")) {
                     errorMsg = "Submission error (Chat). Please contact support.";
                     console.error("Check your Telegram Chat ID.");
                 } else {
                    // Generic error for other issues
                    errorMsg = "Could not submit order. Please try again later or contact support.";
                 }
                 showNotification(errorMsg, "error");
                 return false;
             }
         } catch (error) {
             console.error('Network error sending order to Telegram:', error);
             showNotification("Network error. Could not submit order.", "error");
             return false;
         }
     }


    // ==========================================
    // Checkout Button Handler
    // ==========================================
     async function handleCheckout() {
          if (!checkoutButton || !locationInput || !phoneInput || !cartTotalAmount) {
              console.error("Checkout elements missing.");
              return;
          }

          // 1. Check cart
          if (cart.length === 0) {
              showNotification("Your cart is empty.", "info");
              checkoutButton.disabled = true; // Ensure disabled
              return;
          }

          // 2. Get & Validate Input
          const location = locationInput.value.trim();
          const phone = phoneInput.value.trim();
          let isValid = true;

          // Reset validation styles first
          locationInput.classList.remove('invalid-input');
          locationInput.style.borderColor = '';
          phoneInput.classList.remove('invalid-input');
          phoneInput.style.borderColor = '';

          if (!location) {
              showNotification("Please enter your location.", "error");
              locationInput.focus();
              locationInput.classList.add('invalid-input');
              locationInput.style.borderColor = 'var(--error-color)';
              isValid = false;
          }

          // Basic phone validation (presence check)
          if (!phone) {
              showNotification("Please enter your phone number.", "error");
              if (isValid) phoneInput.focus(); // Focus only if location was valid
              phoneInput.classList.add('invalid-input');
              phoneInput.style.borderColor = 'var(--error-color)';
              isValid = false;
          }
          // Optional: Add more specific phone validation if needed
          // const phonePattern = /^[0-9\s\-+()]{8,}$/; // Example simple pattern
          // if (phone && !phonePattern.test(phone)) {
          //     showNotification("Please enter a valid phone number.", "error");
          //     if (isValid) phoneInput.focus();
          //     phoneInput.classList.add('invalid-input');
          //     phoneInput.style.borderColor = 'var(--error-color)';
          //     isValid = false;
          // }

          if (!isValid) {
               // Ensure button is re-enabled if validation fails immediately
              checkoutButton.disabled = false;
              checkoutButton.textContent = 'QR';
              return; // Stop if validation failed
          }

          // 3. Prepare Order Data
          const orderData = {
              location: location,
              phone: phone,
              cartItems: [...cart], // Shallow copy
              totalAmount: cartTotalAmount.textContent // Get the formatted total string "$XX.XX"
          };

          // 4. Process Order (Send to Telegram)
          checkoutButton.disabled = true;
          checkoutButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...'; // Add spinner

          const success = await sendOrderToTelegram(orderData);

          // 5. Handle Result
          if (success) {
              showNotification("Order submitted successfully! We will contact you soon.", "success");
              cart = []; // Clear cart array
              saveCart(); // Update local storage
              updateCartDisplay(); // Update UI (will also disable button)
              locationInput.value = ''; // Clear inputs
              phoneInput.value = '';
              // Reset validation styles fully on success
              locationInput.classList.remove('invalid-input');
              locationInput.style.borderColor = '';
              phoneInput.classList.remove('invalid-input');
              phoneInput.style.borderColor = '';
              // Optionally close cart sidebar after successful order
              // closeCartSidebar();
          } else {
              // Error message already shown by sendOrderToTelegram
              // Keep data in cart and fields for retry
              checkoutButton.disabled = false; // Re-enable button on failure ONLY if cart still has items
          }

          // Final button state check
          if (cart.length === 0) {
              checkoutButton.disabled = true;
              checkoutButton.textContent = 'QR'; // Reset text even if disabled
          } else if (!success) {
               checkoutButton.disabled = false; // Ensure enabled if failed and cart has items
               checkoutButton.textContent = 'QR'; // Reset text
          } else {
               // If success, cart is empty, button should be disabled
               checkoutButton.disabled = true;
               checkoutButton.textContent = 'QR'; // Reset text
          }
     }

      // Add input event listeners to clear validation on typing
     function clearValidationOnChange(inputElement) {
          if (inputElement) {
              inputElement.addEventListener('input', () => {
                  if (inputElement.classList.contains('invalid-input')) {
                      inputElement.classList.remove('invalid-input');
                      inputElement.style.borderColor = '';
                  }
                  // Check if both fields are now filled to potentially re-enable button early
                  if (locationInput.value.trim() && phoneInput.value.trim() && cart.length > 0) {
                      checkoutButton.disabled = false;
                  } else if (cart.length > 0) {
                       // Keep enabled if cart has items, rely on checkout click for final validation
                       checkoutButton.disabled = false;
                  } else {
                       checkoutButton.disabled = true; // Disable if cart is empty
                  }
              });
          }
      }


    // ==========================================
    // Initial Setup Function
    // ==========================================
    function initializeShop() {
        // Set current year
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }

        // Populate dynamic content
        populateAllProductGrids();
        renderTestimonials();
        renderFeeds();
        setupSlider();

        // Initial cart update (also sets initial checkout button state)
        updateCartDisplay();

        // Add Event Listeners
        if (menuToggle) menuToggle.addEventListener('click', openMobileNav);
        if (closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);
        if (cartButton) cartButton.addEventListener('click', openCartSidebar);
        if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
        if (cartOverlay) cartOverlay.addEventListener('click', () => {
            closeCartSidebar();
            closeMobileNav();
            closeQuickViewModal(); // Close modal too if overlay clicked
        });
        if (cartItemsContainer) cartItemsContainer.addEventListener('click', handleCartActions); // Event delegation for cart items

        // Product grid event delegation (attach to main content or specific grids)
        if (mainContent) mainContent.addEventListener('click', handleProductGridClick);

        if (newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);
        if (closeToastBtn) closeToastBtn.addEventListener('click', closeNotification);
        if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);

        // Quick View Modal Listeners
        if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickViewModal);
        if (productQuickViewContainer) productQuickViewContainer.addEventListener('click', handleQuickViewInteraction); // Event delegation for modal content

         // === Checkout Button Listener ===
         if (checkoutButton) {
             checkoutButton.addEventListener('click', handleCheckout);
         }
         // Add listeners to clear validation on input
         clearValidationOnChange(locationInput);
         clearValidationOnChange(phoneInput);


        // Close mobile nav when a nav link is clicked
        if (navLinks) {
            navLinks.forEach(link => link.addEventListener('click', closeMobileNav));
        }

        // Scroll listener for back-to-top and active nav link
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on load

         // Close modal/cart/nav on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (quickViewModal && quickViewModal.classList.contains('active')) {
                    closeQuickViewModal();
                } else if (cartSidebar && cartSidebar.classList.contains('active')) {
                    closeCartSidebar();
                } else if (mainNav && mainNav.classList.contains('active')) {
                     closeMobileNav();
                }
            }
        });

        console.log("PHKA Cosmetics Shop Initialized!");
    }

    // ==========================================
    // Initialize
    // ==========================================
    initializeShop();

}); // End DOMContentLoaded