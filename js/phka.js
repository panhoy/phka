
// Wait for DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // Product Data
    // ==========================================
    const products = {
        phka: [
             {
                 id: 'phka-lipstick-01',
                 name: 'ផ្កា​​​​​ ​នគររាជ', // Khmer Name
                 price: 10, // Price as number
                 // rating removed
                 // reviews removed for data cleanliness, but was 1256
                 description: 'នគររាជ គឺជាបទភ្លេងជាតិរបស់ព្រះរាជាណាចក្រកម្ពុជាដែលត្រូវបាននិពន្ធដោយព្រះសង្ឃរាជជួនណាត បទចម្រៀងនេះត្រូវបានដាក់ឲ្យប្រើប្រាស់ចាប់តាំងពីឆ្នាំ១៩៤១ នៅពេលដែលប្រទេសកម្ពុជាស្ថិតនៅក្នុងអំឡុងសម័យអាណានិគមនិយម.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743695415350-2.png&w=384&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707575-RE-EDIT-PKA%2528final%2529-27.jpg&w=640&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514706959-RE-EDIT-PKA%2528final%2529-02.jpg&w=640&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514707747-DSC03976.jpg&w=640&q=100','https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743514706907-RE-EDIT-PKA%2528final%2529-16.jpg&w=640&q=100'],
                 colors: ['#F06292', ],
                 featured: true,
                 category: 'lip',
                 stock: 250000,
                 new: true
             },
             {
                 id: 'phka-blush-01',
                 name: 'ផ្កា ទឹកដោះ', // Khmer Name
                 price: 10, // Price as number
                 // rating removed
                 // reviews removed for data cleanliness, but was 983
                 description: 'ដើម​ផ្កាទឹកដោះ ជាប្រភេទរុក្ខជាតិមានកម្ពស់ចន្លោះពី ០.៥ ទៅ ១ម៉ែត្រ ដែលមានផ្កាពណ៌ស ។ផ្កាទឹកដោះជាផ្កាដែលយើងអាចបរិភោគទទួលទានបាន សម្រាប់ធ្វើជាអន្លក់ ដែលអាចស្រុះ ឬហូបស្រស់ជាមួយទឹកគ្រឿង មាំចំហុយ ផ្អកត្រីជូរ ឬត្រីប្រៃបានផងដែរ ។.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743695433679-3.png&w=256&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515026028-RE-EDIT-PKA%2528final%2529-30.jpg&w=640&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515025367-RE-EDIT-PKA%2528final%2529-18.jpg&w=640&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515026047-DSC03944.jpg&w=640&q=100',
                          'https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743515025452-RE-EDIT-PKA%2528final%2529-31.jpg&w=640&q=100'],
                 colors: ['#D2691E'],
                 featured: true,
                 category: 'cheek',
                 stock: 15,
                 new: true
             },
             {
                 id: 'phka-eyeshadow-01',
                 name: 'ផ្កា អង្គារដី', // Khmer Name
                 price: 10, // Price as number
                 // rating removed
                 // reviews removed for data cleanliness, but was 755
                 description: 'A versatile 12-pan eyeshadow palette featuring a mix of matte, shimmer, and metallic finishes in rosy and neutral shades.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1743695451355-4.png&w=256&q=100',
                          'https://via.placeholder.com/400x400/f06292/333333?text=Eyeshadow+Swatches',
                          'https://via.placeholder.com/400x400/e91e63/ffffff?text=Palette+Open'],
                 colors: ['#DC143C'],
                 featured: true,
                 category: 'eye',
                 stock: 10,
                 new: false
             },
             {
                 id: 'phka-foundation-01',
                 name: 'ផ្កា កូលាប', // Khmer Name
                 price: 10, // Price as number
                 // rating removed
                 // reviews removed for data cleanliness, but was 1115
                 description: 'A lightweight, buildable coverage liquid foundation that provides a natural, skin-like finish. SPF 15 protection included.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613766926-1000022449.jpg&w=256&q=100',
                          'https://via.placeholder.com/400x400/ffccbc/333333?text=Foundation+1+Swatch',
                          'https://via.placeholder.com/400x400/d7ccc8/ffffff?text=Swatch+Shades'],
                 colors: ['#FF6347'],
                 featured: true,
                 category: 'face',
                 stock: 2999, // Example: Out of stock
                 new: false
             },
             {
                 id: 'phka-lipgloss-01',
                 name: 'ផ្កា ឈូក', // Khmer Name
                 price: 10, // Price as number
                 // rating removed
                 // reviews removed for data cleanliness, but was 670
                 description: 'A high-shine, non-sticky lip gloss that hydrates and plumps lips with a glossy finish. Available in sheer and pigmented shades.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613775646-1000022448.jpg&w=256&q=100',
                          'https://via.placeholder.com/400x400/f8bbd0/333333?text=Lip+Gloss+Swatch',
                          'https://via.placeholder.com/400x400/e91e63/ffffff?text=Gloss+Texture'],
                 colors: ['#FF69B4'],
                 featured: false,
                 category: 'lip',
                 stock: 20,
                 new: false
             },
             {
                 id: 'phka-highlighter-01',
                 name: 'ផ្កា រំដួល', // Khmer Name
                 price: 10, // Price as number  
                 // rating removed
                 // reviews removed for data cleanliness, but was 845
                 description: 'A lightweight liquid highlighter that gives a radiant, dewy glow. Perfect for layering or wearing alone.',
                 images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742613798823-1000022450.jpg&w=256&q=100',
                          'https://via.placeholder.com/400x400/fce4ec/333333?text=Highlighter+Swatch',
                          'https://via.placeholder.com/400x400/f8bbd0/ffffff?text=Highlighter+Texture'],
                 colors: ['#F08080  '],
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
                price: 10, // Price as number
                // reviews removed for data cleanliness, but was 87
                description: 'A mild yet effective foaming cleanser that removes impurities without stripping the skin\'s natural moisture barrier.',
                images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742614772374-1000022455.jpg&w=256&q=100',
                         'https://via.placeholder.com/400x400/bbdefb/333333?text=Cleanser+Texture'],
                colors: [],
                featured: true,
                category: 'cleanser',
                stock: 30,
                new: false
            },
            {
                id: 'skincare-toner-01',
                name: 'Hydrating Toner',
                price: 10, // Price as number
                // rating removed
                // reviews removed for data cleanliness, but was 64
                description: 'An alcohol-free toner packed with hyaluronic acid and botanical extracts to hydrate, soothe, and balance the skin\'s pH.',
                images: ['https://pichpisey.shop/_next/image?url=https%3A%2F%2Fpichpiseyshop.sgp1.digitaloceanspaces.com%2F1742614861763-1000022456.jpg&w=256&q=100',
                         'https://via.placeholder.com/400x400/b2ebf2/333333?text=Toner+Usage'],
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
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2a100459&x-expires=1744009200&x-signature=Sp5d8mTpLh7ZIEGNDuFlYgXYti4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
        },
        {
            name: "pich pisey.",
            comment: "The cream blush is so easy to blend and gives a beautiful flush of color. My new favorite!",
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2a100459&x-expires=1744009200&x-signature=Sp5d8mTpLh7ZIEGNDuFlYgXYti4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
        },
        {
            name: "Pich Pisey.",
            comment: "I adore the eyeshadow palette! The shades are perfect for everyday looks and the formula is amazing.",
            image: "https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/938297c673eac27bb2c0c2bc13fbcc63~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=2a100459&x-expires=1744009200&x-signature=Sp5d8mTpLh7ZIEGNDuFlYgXYti4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
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
    // Elements (Selectors remain the same)
    // ==========================================
    const body = document.body;
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-navigation');
    const closeNavBtn = document.getElementById('close-nav-btn');
    const navLinks = mainNav.querySelectorAll('.nav-link');

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
    const mainContent = document.querySelector('.main-content');

    const testimonialsContainer = document.getElementById('testimonials-container');
    const feedsGrid = document.getElementById('feeds-grid');
    const newsletterForm = document.getElementById('newsletter-form');
    const backToTop = document.getElementById('back-to-top');

    const quickViewModal = document.getElementById('quick-view-modal');
    const closeModalBtn = document.getElementById('close-modal'); // Renamed from closeModal for clarity
    const productQuickViewContainer = document.getElementById('product-quick-view');
    const modalOverlay = document.getElementById('modal-overlay');

    const notificationToast = document.getElementById('notification-toast');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = notificationToast.querySelector('.notification-icon');
    const closeToastBtn = document.getElementById('close-toast');

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const currentYearSpan = document.getElementById('current-year');

    // ==========================================
    // State Variables (Remain the same)
    // ==========================================
    let cart = JSON.parse(localStorage.getItem('phkaCart')) || [];
    let currentSlide = 0;
    let slideInterval;
    let notificationTimeout;
    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 75;


    // ==========================================
    // Dark Mode Functionality (Remains the same)
    // ==========================================
    function applyDarkMode(isDark) {
        const icon = darkModeToggle.querySelector('i');
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
    } // else {
        // Optional: Respect OS preference if no setting saved
        // applyDarkMode(prefersDark);
    // }

    // ==========================================
    // Mobile Navigation (Remains the same)
    // ==========================================
    function openMobileNav() {
        mainNav.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        cartOverlay.classList.add('active'); // Use cart overlay for nav too
        body.classList.add('nav-open');
    }

    function closeMobileNav() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        // Only remove overlay if cart is also closed
        if (!cartSidebar.classList.contains('active')) {
            cartOverlay.classList.remove('active');
        }
        body.classList.remove('nav-open');
    }

    // ==========================================
    // Cart Functionality
    // ==========================================
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <p>Your cart is empty</p>
                    <button class="btn btn-secondary close-cart-btn">Start Shopping</button>
                </div>
            `;
             const closeBtn = cartItemsContainer.querySelector('.close-cart-btn');
             if (closeBtn) {
                 closeBtn.addEventListener('click', closeCartSidebar);
             }
        } else {
            cart.forEach((item, index) => {
                const itemPrice = parseFloat(item.price) || 0; // Ensure price is a number
                const subtotal = itemPrice * item.quantity;
                total += subtotal;

                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.setAttribute('data-index', index);
                cartItemElement.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="cart-item-details">
                        <div>
                           <div class="cart-item-name">${item.name}</div>
                           <div class="cart-item-price">$${itemPrice.toFixed(2)}</div> <!-- Updated Currency -->
                        </div>
                        <div class="cart-item-actions">
                            <div class="quantity-selector">
                                <button class="quantity-btn quantity-decrease" aria-label="Decrease quantity">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn quantity-increase" aria-label="Increase quantity">+</button>
                            </div>
                            <button class="remove-item" aria-label="Remove item">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
        }

        cartTotalAmount.textContent = `$${total.toFixed(2)}`; // Updated Currency
        updateCartCount();
    }

    function saveCart() {
        localStorage.setItem('phkaCart', JSON.stringify(cart));
    }

    function addToCart(product, quantity = 1) {
        if (!product) return;
        const productPrice = parseFloat(product.price) || 0; // Ensure price is a number

        if (product.stock <= 0) {
            showNotification(`${product.name} is out of stock!`, 'error');
            return;
        }

        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            const availableStock = product.stock - cart[existingItemIndex].quantity;
            if (quantity > availableStock) {
                 showNotification(`Only ${availableStock} more of ${product.name} available. Added maximum available to cart.`, 'info');
                 quantity = availableStock;
            }
            if (quantity > 0) {
                cart[existingItemIndex].quantity += quantity;
            } else {
                // No more stock can be added
                 return; // Exit if no quantity can be added
            }

        } else {
             if (quantity > product.stock) {
                 showNotification(`Only ${product.stock} of ${product.name} available. Added maximum stock to cart.`, 'info');
                 quantity = product.stock;
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
        showNotification(`${product.name} added to cart!`, 'success');
    }


    function decreaseQuantity(index) {
        if (cart[index]) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
                saveCart();
                updateCartDisplay();
            } else {
                removeFromCart(index); // Remove if quantity reaches 0
            }
        }
    }

    function increaseQuantity(index) {
         if (cart[index]) {
             const product = findProductById(cart[index].id);
             if (product && cart[index].quantity >= product.stock) {
                 showNotification(`Maximum stock (${product.stock}) reached for ${product.name}`, 'info');
                 return;
             }
             cart[index].quantity += 1;
             saveCart();
             updateCartDisplay();
         }
    }

    function removeFromCart(index) {
         if (cart[index]) {
             const removedItemName = cart[index].name;
             cart.splice(index, 1);
             saveCart();
             updateCartDisplay();
             showNotification(`${removedItemName} removed from cart`, 'info');
         }
    }

    function handleCartActions(e) {
        const target = e.target;
        // Close button inside empty cart
        const closeEmptyCartButton = target.closest('.empty-cart .close-cart-btn');
        if (closeEmptyCartButton) {
             closeCartSidebar();
             return;
         }

        const cartItem = target.closest('.cart-item');
        if (!cartItem) return;

        const index = parseInt(cartItem.dataset.index);

        if (target.closest('.quantity-decrease')) {
            decreaseQuantity(index);
        } else if (target.closest('.quantity-increase')) {
            increaseQuantity(index);
        } else if (target.closest('.remove-item')) {
            removeFromCart(index);
        }
    }


    function openCartSidebar() {
        updateCartDisplay();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        body.classList.add('no-scroll'); // Changed class to generic no-scroll
    }

    function closeCartSidebar() {
        cartSidebar.classList.remove('active');
        // Only remove overlay if nav menu is also closed
        if (!mainNav.classList.contains('active')) {
             cartOverlay.classList.remove('active');
             body.classList.remove('no-scroll');
        }
    }

    // ==========================================
    // Product Grid Generation & Interaction
    // ==========================================
    function renderProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', product.id);

        const newBadge = product.new ? `<span class="product-badge new-badge">New</span>` : '';
        const outOfStock = product.stock <= 0;
        const stockBadge = outOfStock ? `<span class="product-badge stock-badge">Sold Out</span>` : '';

        let colorOptions = '';
        if (product.colors && product.colors.length > 0) {
            colorOptions = `
                <div class="product-colors">
                    ${product.colors.map(color => `<span class="color-option" style="background-color: ${color};" title="Color Option"></span>`).join('')}
                </div>
            `;
        }

        const productPrice = parseFloat(product.price) || 0; // Ensure price is number

        // Review count display removed

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
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
                <div class="product-price">$${productPrice.toFixed(2)}</div> <!-- Updated Currency -->
                <!-- Review count removed from here -->
                ${colorOptions}
            </div>
        `;

        return productCard;
    }

    function populateProductGrids() {
        // Clear existing content or show loading state
        phkaProductsGrid.innerHTML = '<p class="loading-text">Loading PHKA products...</p>';
        skincareProductsGrid.innerHTML = '<p class="loading-text">Loading Skincare products...</p>';

        // Add small delay for perceived loading
        setTimeout(() => {
            phkaProductsGrid.innerHTML = ''; // Clear loading text
            skincareProductsGrid.innerHTML = ''; // Clear loading text

            if (!products || !products.phka || !products.skincare) {
                 console.error("Product data is missing or malformed.");
                 phkaProductsGrid.innerHTML = '<p class="loading-text error-text">Could not load products.</p>';
                 skincareProductsGrid.innerHTML = '<p class="loading-text error-text">Could not load products.</p>';
                 return;
            }

            if (products.phka.length > 0) {
                products.phka.forEach(product => {
                    const productCard = renderProductCard(product);
                    phkaProductsGrid.appendChild(productCard);
                });
            } else {
                 phkaProductsGrid.innerHTML = '<p class="loading-text">No PHKA products found.</p>';
            }

            if (products.skincare.length > 0) {
                products.skincare.forEach(product => {
                    const productCard = renderProductCard(product);
                    skincareProductsGrid.appendChild(productCard);
                });
            } else {
                skincareProductsGrid.innerHTML = '<p class="loading-text">No Skincare products found.</p>';
            }
        }, 200); // Small delay e.g., 200ms
    }

    function handleProductGridClick(e) {
        const target = e.target;
        const quickViewButton = target.closest('.quick-view-btn');
        const addToCartButton = target.closest('.add-to-cart-btn');

        if (quickViewButton) {
            e.preventDefault();
            const productId = quickViewButton.dataset.productId;
            openQuickViewModal(productId);
        } else if (addToCartButton) {
            e.preventDefault();
            if (addToCartButton.disabled) return;
            const productId = addToCartButton.dataset.productId;
            const product = findProductById(productId);
            if (product) {
                addToCart(product);
                 // Optional: Visual feedback on button
                 addToCartButton.classList.add('added');
                 setTimeout(() => addToCartButton.classList.remove('added'), 1000);
            }
        }
        // Optional: Click on card itself could also open quick view
        // else if (target.closest('.product-card') && !quickViewButton && !addToCartButton) {
        //      const productCard = target.closest('.product-card');
        //      const productId = productCard.dataset.productId;
        //      openQuickViewModal(productId);
        // }
    }

    function findProductById(productId) {
         if (!productId) return null;
         // Check both product categories
         return products.phka.find(p => p.id === productId) || products.skincare.find(p => p.id === productId);
    }


    // ==========================================
    // Testimonials Section
    // ==========================================
    function renderTestimonials() {
        testimonialsContainer.innerHTML = '<p class="loading-text">Loading reviews...</p>';
        setTimeout(() => {
            testimonialsContainer.innerHTML = '';
            if (!testimonials || testimonials.length === 0) {
                testimonialsContainer.innerHTML = '<p class="loading-text">No reviews available yet.</p>';
                return;
            }

            testimonials.forEach(testimonial => {
                const testimonialElement = document.createElement('div');
                testimonialElement.className = 'testimonial';

                 // Rating display removed

                testimonialElement.innerHTML = `
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">
                            <img src="${testimonial.image}" alt="${testimonial.name}" loading="lazy">
                        </div>
                        <div class="testimonial-meta">
                            <h4 class="testimonial-name">${testimonial.name}</h4>
                            {/* Rating display removed */}
                        </div>
                    </div>
                    <div class="testimonial-content">
                        <p>"${testimonial.comment}"</p>
                    </div>
                `;
                testimonialsContainer.appendChild(testimonialElement);
            });
        }, 200); // Simulate loading
    }

    // ==========================================
    // Instagram Feeds Section (Remains the same)
    // ==========================================
    function renderFeeds() {
        feedsGrid.innerHTML = '<p class="loading-text">Loading feeds...</p>';
        setTimeout(() => {
             feedsGrid.innerHTML = '';
             if (!feeds || feeds.length === 0) {
                 feedsGrid.innerHTML = '<p class="loading-text">Could not load Instagram feed.</p>';
                 return;
             }

            feeds.forEach(feed => {
                const feedElement = document.createElement('a');
                feedElement.className = 'feed-item';
                feedElement.href = "https://instagram.com"; // Generic link for placeholder
                feedElement.target = "_blank";
                feedElement.rel = "noopener noreferrer";
                feedElement.setAttribute('aria-label', `View Instagram post: ${feed.caption}`);

                feedElement.innerHTML = `
                    <div class="feed-image">
                        <img src="${feed.image}" alt="Instagram Post: ${feed.caption.substring(0, 50)}..." loading="lazy">
                        <div class="feed-overlay">
                            <div class="feed-info">
                                <span><i class="fas fa-heart"></i> ${feed.likes}</span>
                            </div>
                        </div>
                    </div>
                `;
                feedsGrid.appendChild(feedElement);
            });
         }, 200); // Simulate loading
    }

    // ==========================================
    // Banner Slider (Remains the same)
    // ==========================================
    function setupSlider() {
        if (!slidesContainer) return;

        const slideElements = slidesContainer.querySelectorAll('.slide');
        const totalSlides = slideElements.length;

        if (totalSlides <= 1) {
             if(prevSlideBtn) prevSlideBtn.style.display = 'none';
             if(nextSlideBtn) nextSlideBtn.style.display = 'none';
             if(dotsContainer) dotsContainer.style.display = 'none';
             if (slideElements.length === 1) { // Ensure the single slide is visible
                slideElements[0].classList.add('active');
             }
             return; // No need for controls or dots
         };

        // Clear previous dots if any
        if (dotsContainer) dotsContainer.innerHTML = '';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.setAttribute('role', 'button');
             dot.tabIndex = 0; // Make dots focusable
            if (dotsContainer) dotsContainer.appendChild(dot);
        }
        const dotElements = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];

        function showSlide(index) {
            if (index >= totalSlides) index = 0;
            if (index < 0) index = totalSlides - 1;

            slidesContainer.style.transform = `translateX(-${index * 100}%)`;

            slideElements.forEach((slide, i) => {
                 slide.classList.toggle('active', i === index);
                 // Improve accessibility for screen readers
                 slide.setAttribute('aria-hidden', i !== index);
            });

             dotElements.forEach((dot, i) => {
                 dot.classList.toggle('active', i === index);
                 dot.setAttribute('aria-current', i === index ? 'true' : 'false');
             });

            currentSlide = index;
        }

        function next() {
            showSlide(currentSlide + 1);
        }

        function prev() {
            showSlide(currentSlide - 1);
        }

        function startAutoSlide() {
            stopAutoSlide(); // Clear existing interval first
            slideInterval = setInterval(next, 5000); // 5 second interval
        }

        function stopAutoSlide() {
            clearInterval(slideInterval);
        }

        // Add event listeners only if buttons exist
        if(nextSlideBtn) nextSlideBtn.addEventListener('click', () => { next(); stopAutoSlide(); startAutoSlide(); });
        if(prevSlideBtn) prevSlideBtn.addEventListener('click', () => { prev(); stopAutoSlide(); startAutoSlide(); });

        // Dot navigation
         if (dotsContainer) {
             dotsContainer.addEventListener('click', (e) => {
                 if (e.target.classList.contains('dot')) {
                     const index = parseInt(e.target.dataset.index);
                     showSlide(index);
                     stopAutoSlide();
                     startAutoSlide();
                 }
             });
             // Keyboard accessibility for dots
             dotsContainer.addEventListener('keydown', (e) => {
                 if (e.key === 'Enter' || e.key === ' ') {
                     if (e.target.classList.contains('dot')) {
                         e.preventDefault();
                         const index = parseInt(e.target.dataset.index);
                         showSlide(index);
                         stopAutoSlide();
                         startAutoSlide();
                     }
                 }
             });
         }


        // Pause on hover/focus
        const sliderElement = slidesContainer.parentElement; // The container holding slides and nav
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
        const product = findProductById(productId);
        if (!product) {
            console.error("Product not found for Quick View:", productId);
            showNotification('Could not load product details.', 'error');
            return;
        }

        // Show loading state immediately
        productQuickViewContainer.innerHTML = '<p class="loading-text">Loading product details...</p>';
        modalOverlay.classList.add('active');
        quickViewModal.classList.add('active');
        body.classList.add('modal-open'); // Use a dedicated class

        // Focus management for accessibility
         setTimeout(() => {
             if (closeModalBtn) closeModalBtn.focus();
         }, 150); // Short delay to allow modal transition

        // Render content after a slight delay (can simulate network request)
        setTimeout(() => {
            renderQuickViewContent(product);
        }, 100); // Simulate quick load
    }

    function renderQuickViewContent(product) {
        const productPrice = parseFloat(product.price) || 0;
        // Review count display removed

        // Color Options Logic (same as product card)
        let colorOptionsHtml = '';
        if (product.colors && product.colors.length > 0) {
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

        // Stock Status Logic
        const outOfStock = product.stock <= 0;
        const stockStatusClass = outOfStock ? 'out-of-stock' : 'in-stock';
        const stockText = outOfStock ? 'Out of Stock' : `In Stock (${product.stock} available)`;
        const categoryText = product.category ? `Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}` : '';
        // Review count removed

        // Dynamic HTML Content
        productQuickViewContainer.innerHTML = `
            <div class="quick-view-gallery">
                <div class="main-image">
                    <img src="${product.images[0]}" alt="${product.name}" id="main-product-image">
                </div>
                 ${product.images.length > 1 ? /* Only show thumbnails if more than one image */
                    `<div class="thumbnails">
                        ${product.images.map((image, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}" role="button" tabindex="0" aria-label="View image ${index + 1}">
                                <img src="${image}" alt="${product.name} thumbnail ${index + 1}">
                            </div>
                        `).join('')}
                    </div>`
                 : '' }
            </div>
            <div class="quick-view-details">
                <h2 class="product-name">${product.name}</h2>
                 <div class="product-meta top-meta">
                     <p class="stock-status ${stockStatusClass}">${stockText}</p>
                     ${categoryText ? `<p class="product-category">${categoryText}</p>` : ''}
                 </div>
                <div class="product-price">$${productPrice.toFixed(2)}</div> <!-- Updated Currency -->
                 <!-- Review count removed from here -->
                ${product.description ? /* Description Section */
                 `<div class="product-description">
                    <p>${product.description}</p>
                  </div>`
                 : ''
                }
                ${colorOptionsHtml} <!-- Color options if available -->
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn quantity-decrease" id="modal-quantity-decrease" aria-label="Decrease quantity">-</button>
                        <span class="quantity" id="modal-quantity" aria-live="polite">1</span>
                        <button class="quantity-btn quantity-increase" id="modal-quantity-increase" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="btn modal-add-to-cart" data-product-id="${product.id}" ${outOfStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-bag"></i>&nbsp; <!-- Add icon -->
                        ${outOfStock ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
        // Re-attach event listeners for the new content if needed, handled by delegation below
    }


    function handleQuickViewInteraction(e) {
        const target = e.target;

        // Thumbnail Click
        if (target.closest('.thumbnail')) {
            e.preventDefault(); // Prevent link-like behavior if thumbnail is wrapped in <a>
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
            const productId = productQuickViewContainer.querySelector('.modal-add-to-cart')?.dataset.productId;
            const product = findProductById(productId); // Get product details for stock check

             if (target.closest('#modal-quantity-decrease')) {
                if (currentQuantity > 1) {
                    quantityDisplay.textContent = currentQuantity - 1;
                }
            } else if (target.closest('#modal-quantity-increase')) {
                 if (product && currentQuantity < product.stock) { // Check against stock
                     quantityDisplay.textContent = currentQuantity + 1;
                 } else if (product) {
                    showNotification(`Maximum stock (${product.stock}) reached`, 'info');
                 } else { // Fallback if product info not available, just increment
                      quantityDisplay.textContent = currentQuantity + 1;
                 }
            }
        }

        // Add to Cart Button
        const addToCartButton = target.closest('.modal-add-to-cart');
        if (addToCartButton) {
             if (addToCartButton.disabled) return; // Don't proceed if disabled
             const productId = addToCartButton.dataset.productId;
             const quantity = parseInt(quantityDisplay?.textContent || '1');
             const product = findProductById(productId);
             if (product) {
                 addToCart(product, quantity);
                 closeQuickViewModal(); // Close modal after adding
             } else {
                 console.error("Product not found when adding from modal:", productId);
                 showNotification("Error adding product to cart.", "error");
             }
        }

         // Color Option Click
         if (target.classList.contains('color-option')) {
             productQuickViewContainer.querySelectorAll('.color-option').forEach(co => co.classList.remove('selected'));
             target.classList.add('selected');
             // Optional: Store selected color if needed for cart logic
             // console.log("Selected color:", target.style.backgroundColor);
         }
    }

    function closeQuickViewModal() {
        modalOverlay.classList.remove('active');
        quickViewModal.classList.remove('active');
        body.classList.remove('modal-open'); // Use specific class

        // Clear content after transition for smoother visual
        setTimeout(() => {
            if (productQuickViewContainer) productQuickViewContainer.innerHTML = '';
        }, 300); // Match transition duration
    }

    // ==========================================
    // Notification Toast (Remains the same logic)
    // ==========================================
    function showNotification(message, type = 'info') {
        if (!notificationToast || !notificationMessage || !notificationIcon) return;

        clearTimeout(notificationTimeout);

        notificationMessage.textContent = message;
        notificationToast.className = 'notification-toast'; // Reset classes
        notificationToast.classList.add(type); // Add type class

        // Set appropriate icon based on type
        let iconClass = 'fa-info-circle'; // Default to info
        if (type === 'success') {
            iconClass = 'fa-check-circle';
        } else if (type === 'error') {
            iconClass = 'fa-times-circle';
        }
        notificationIcon.className = `fas ${iconClass} notification-icon`;

        notificationToast.classList.add('active');

        // Auto-dismiss after a delay
        notificationTimeout = setTimeout(() => {
            notificationToast.classList.remove('active');
        }, 4000); // 4 seconds
    }

    function closeNotification() {
         clearTimeout(notificationTimeout);
         if(notificationToast) notificationToast.classList.remove('active');
    }


    // ==========================================
    // Newsletter Form (Remains the same logic)
    // ==========================================
    function handleNewsletterSubmit(e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const email = emailInput.value.trim();

        if (email && emailInput.checkValidity()) {
            console.log('Newsletter subscription attempt:', email);
            // Disable form during fake submission
            emailInput.disabled = true;
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';

            // Simulate network request
            setTimeout(() => {
                emailInput.value = ''; // Clear input
                emailInput.disabled = false;
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe'; // Reset button text
                showNotification('Thank you for subscribing!', 'success');
            }, 1500); // 1.5 second delay
        } else {
             showNotification('Please enter a valid email address.', 'error');
             emailInput.focus(); // Focus invalid input
        }
    }

    // ==========================================
    // Back to Top Button (Remains the same logic)
    // ==========================================
    function handleScroll() {
        // Back to Top Button Visibility
        if (backToTop) {
             if (window.scrollY > 300) { // Show after scrolling down 300px
                 backToTop.classList.add('show');
             } else {
                 backToTop.classList.remove('show');
             }
        }

        // Update Active Nav Link Highlighting
        updateActiveNavLink();
    }

    // ==========================================
    // Active Nav Link Highlighting (Remains the same logic)
    // ==========================================
    function updateActiveNavLink() {
        let currentSectionId = '';
        const sections = document.querySelectorAll('section[id], footer[id]'); // Include footer
        // Adjust threshold to be slightly above the element for better accuracy
        const scrollThreshold = window.scrollY + headerHeight + 50; // Offset for fixed header + buffer

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
             if (scrollThreshold >= sectionTop) {
                 // Keep updating as long as we are past the section top
                currentSectionId = section.getAttribute('id');
             }
        });

        // Special case for top of the page
        if (window.scrollY < headerHeight * 2) { // If near the top
            currentSectionId = 'top';
         }
        // Special case for reaching footer area even if not past its exact top offset
         const footerContact = document.getElementById('footer-contact');
         if (footerContact && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
             // Consider 'footer-contact' active when near the bottom 100px
            currentSectionId = 'footer-contact';
         }

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            const linkHref = link.getAttribute('href');
            // Check if the link href matches the current section ID
            if (linkHref === `#${currentSectionId}`) {
                link.classList.add('active-link');
            }
        });
    }


    // ==========================================
    // Initial Setup Function
    // ==========================================
    function initializeShop() {
        populateProductGrids();
        renderTestimonials();
        renderFeeds();
        setupSlider();
        updateCartDisplay(); // Initial cart state
        handleScroll(); // Initial scroll check for back-to-top and nav links
        if (currentYearSpan) {
             currentYearSpan.textContent = new Date().getFullYear();
        }

        // --- Add Global Event Listeners using Delegation Where Possible ---

        // Header Actions & Nav
        if(menuToggle) menuToggle.addEventListener('click', openMobileNav);
        if(closeNavBtn) closeNavBtn.addEventListener('click', closeMobileNav);
        if(darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
        if(cartButton) cartButton.addEventListener('click', openCartSidebar);
        if(closeCart) closeCart.addEventListener('click', closeCartSidebar);

        // Overlays for closing modals/sidebars
         if(cartOverlay) {
             cartOverlay.addEventListener('click', () => {
                 // Close whichever is open
                 if (mainNav.classList.contains('active')) closeMobileNav();
                 if (cartSidebar.classList.contains('active')) closeCartSidebar();
                 if (quickViewModal.classList.contains('active')) closeQuickViewModal(); // Close modal too if overlay clicked
             });
         }
        if (modalOverlay) { // Specific listener for modal overlay too
            modalOverlay.addEventListener('click', closeQuickViewModal);
        }


         // Close mobile nav when a link is clicked
         if(mainNav) {
             mainNav.addEventListener('click', (e) => {
                 if (e.target.classList.contains('nav-link')) {
                     closeMobileNav();
                 }
             });
         }

        // Cart Interactions (Delegated)
        if(cartItemsContainer) cartItemsContainer.addEventListener('click', handleCartActions);

        // Product Grid Interactions (Delegated)
        if(mainContent) mainContent.addEventListener('click', handleProductGridClick);

        // Modal Interactions
        if(closeModalBtn) closeModalBtn.addEventListener('click', closeQuickViewModal);
        if(quickViewModal) {
             // Delegate interactions within the modal content
             quickViewModal.addEventListener('click', handleQuickViewInteraction);
              // Stop propagation if clicking inside the modal itself, not the overlay
             quickViewModal.addEventListener('click', (e) => e.stopPropagation());
        }


        // Newsletter Form
        if(newsletterForm) newsletterForm.addEventListener('submit', handleNewsletterSubmit);

        // Scroll Listener
        window.addEventListener('scroll', handleScroll, { passive: true }); // Use passive for performance

        // Notification Toast Close
        if(closeToastBtn) closeToastBtn.addEventListener('click', closeNotification);

        // Keyboard Accessibility (Escape key)
         document.addEventListener('keydown', (e) => {
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

         // Ensure sidebars don't close when clicking inside them
         if (cartSidebar) cartSidebar.addEventListener('click', (e) => e.stopPropagation());


         console.log("PHKA Cosmetics Shop Initialized");
    }

    // ==========================================
    // Initialize
    // ==========================================
    initializeShop();

});