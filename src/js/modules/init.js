// Initialization module
import NiceSelect from "nice-select2";

export function init() {
    // console.log('App initialized');
    const nav = document.querySelector('.header__nav');
    const items = document.querySelectorAll('.menu > .menu__item > a');
    const activeLink = document.querySelector('.menu__item.active a');

    function move(element) {
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        nav.style.setProperty('--left', `${rect.left - navRect.left}px`);
        nav.style.setProperty('--width', `${rect.width}px`);
    }

    if (activeLink) move(activeLink);

    items.forEach(item => {
        item.addEventListener('mouseenter', () => move(item));
        item.addEventListener('focus', () => move(item));
    });

    nav.addEventListener('mouseleave', () => {
        if (activeLink) move(activeLink);
    });

    nav.addEventListener('focusout', (e) => {
        // Перевіряємо, чи новий елемент у фокусі лежить поза межами нашого <nav>
        if (!nav.contains(e.relatedTarget) && activeLink) {
            move(activeLink);
        }
    });
//==============================================================================
//  RANGE SLIDER
//  ============================================================================
    function initPriceSlider() {
        const priceSlider = document.getElementById('price-slider');
        if (!priceSlider) {
            return;
        }
        const priceMin = document.getElementById('price-min');
        const priceMax = document.getElementById('price-max');

        noUiSlider.create(priceSlider, {
            start: [456, 4500],
            connect: true,
            range: {
                min: 0,
                max: 5000
            },
            step: 1,
            format: {
                to: value => Math.round(value),
                from: value => Number(value)
            }
        });

        priceSlider.noUiSlider.on('update', (values, handle) => {
            if (handle === 0) {
                priceMin.textContent = values[0];
            }

            if (handle === 1) {
                priceMax.textContent = values[1];
            }
        });

    }

//==============================================================================
//  COLLAPSE CONTENT
//  ============================================================================
    function initSidebarCollapse() {
        const toggles = document.querySelectorAll('[data-toggle="collapse"]');

        if (!toggles.length) return;

        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = toggle.getAttribute('data-target');
                const targetBlock = document.querySelector(targetId);
                const section = toggle.closest('.catalog-filter');

                if (!targetBlock || !section) return;

                const isOpen = targetBlock.classList.toggle('show');

                section.classList.toggle('is-active', isOpen);
            });
        });
    }

//==============================================================================
//  CUSTOM SELECT
//  ============================================================================
    function initCustomSelect() {
        const selectElement = document.querySelector(".js-custom-select");
        if (selectElement) {
            const NiceSelectConstructor = NiceSelect.default || NiceSelect;

            new NiceSelectConstructor(selectElement, {
                searchable: false
            });
        }
    }

//====================================================================
//COUNTER-NUMBERS
//====================================================================

    const counters = document.querySelectorAll('.counter__number');

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function numberCountUp(element, countTo) {
        const numEl = element.querySelector('.num');
        if (!numEl) return;

        const start = parseInt(numEl.textContent, 10) || 0;

        const duration = 3000;
        const startTime = performance.now();

        function animate(time) {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = easeOutCubic(progress);

            const value = Math.floor(start + eased * (countTo - start));
            numEl.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                numEl.textContent = countTo;
            }
        }

        requestAnimationFrame(animate);
    }

    const observerCount = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;

            if (el.dataset.animated) return;

            const target = parseInt(el.dataset.target, 10);

            if (isNaN(target)) return;

            numberCountUp(el, target);

            el.dataset.animated = "true";

            obs.unobserve(el);
        });
    }, {threshold: 0.3});

    counters.forEach(el => observerCount.observe(el));
//  ============================================================================
//  SLIDER BANNER
//  ============================================================================
    function initSliderBanner() {
        if (!document.querySelector('.banner-slider')) return;
        const sliderBanner = new Splide('.banner-slider', {
            type: 'loop',
            perPage: 1,
            pagination: false,
            autoplay: true,
            arrows: false,
            speed: 1200,
        });
        sliderBanner.mount();
    }

//  ============================================================================
//  SLIDER CATEGORY
//  ============================================================================
    function initSliderCategory() {
        if (!document.querySelector('.category-slider')) return;

        const sliderCategory = new Splide('.category-slider', {
            perPage: 3,
            perMove: 1,
            pagination: false,
            speed: 1200,
            gap: 20,
            arrowPath: 'M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z',
        });
        initProgressBar(sliderCategory);
        sliderCategory.mount();
    }

    function initProgressBar(splide) {
        const bar = splide.root.querySelector('.slider-progress__bar');
        if (!bar) return;

        splide.on('mounted move', function () {
            const end = splide.Components.Controller.getEnd() + 1;
            const rate = Math.min((splide.index + 1) / end, 1);

            bar.style.width = `${100 * rate}%`;
        });
    }

//  ============================================================================
//  SLIDER BRANDS
//  ============================================================================
    function initSliderBrands() {
        if (!document.querySelector('.brands-slider')) return;

        const initSliderBrands = new Splide('.brands-slider', {
            perPage: 8,
            perMove: 1,
            pagination: false,
            speed: 1200,
            gap: 9,
            arrowPath: 'M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z',
        });
        initProgressBar(initSliderBrands);
        initSliderBrands.mount();
    }

//  ============================================================================
//  SLIDER PARTNERS
//  ============================================================================
    function initSliderPartners(selector, speed, direction = 'ltr') {
        const element = document.querySelector(selector);
        if (!element) return;

        new Splide(selector, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            arrows: false,
            pagination: false,
            autoWidth: true,
            gap: '30px',
            clones: 30,
            autoScroll: {
                speed: speed,
                pauseOnHover: false,
                pauseOnFocus: false,
            },
        }).mount(window.splide.Extensions);
    }

//============================================================================
// ACCORDION
//============================================================================
    function initAccordion() {
        const acItems = document.querySelectorAll('.accordion__item');

        acItems.forEach((item) => {
            const acHeader = item.querySelector('.accordion__header');

            acHeader.addEventListener("click", () => {

                toggleItem(item);
            });
        });

        const toggleItem = (item) => {
            const acDescription = item.querySelector('.accordion-collapse');

            if (item.classList.contains('show')) {
                acDescription.style.height = acDescription.scrollHeight + 'px';
                setTimeout(() => {
                    acDescription.style.height = '0';
                }, 10);
                item.classList.remove('show');
            } else {
                acDescription.style.height = acDescription.scrollHeight + 'px';
                item.classList.add('show');

                acDescription.addEventListener('transitionend', function () {
                    if (item.classList.contains('show')) {
                        acDescription.style.height = 'auto';
                    }
                }, {once: true});
            }
        };
    }

//=====================================================================================================
// PRODUCTS TABS
//=====================================================================================================

    const SLIDER_TABS_OPTIONS = {
        products: {
            perPage: 5,
            perMove: 1,
            gap: 40,
            speed: 1200,
            arrowPath: 'M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z',
        },

        blog: {
            perPage: 3,
            perMove: 1,
            autoWidth: true,
            gap: 20,
            speed: 1200,
            snap: false,
            focus: 'left',
            arrowPath: 'M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z',
        },
    };


    function initTabsSlider(root, options) {
        const tabs = root.querySelectorAll('.js-tabs__tab');
        const panels = root.querySelectorAll('.js-tabs__panel');

        if (!tabs.length || !panels.length) {
            return;
        }


        function initSlider(panel) {
            // Не ініціалізуємо Splide повторно
            if (panel.splideInstance) {
                return panel.splideInstance;
            }

            const sliderElement = panel.querySelector('.js-slider');

            if (!sliderElement) {
                return null;
            }

            const splide = new Splide(sliderElement, {
                ...options,
                pagination: false,
            });

            initProgressBarTabs(splide);

            splide.mount();

            panel.splideInstance = splide;

            return splide;
        }


        function activateTab(tab) {
            const tabName = tab.dataset.tab;

            if (!tabName) {
                return;
            }

            // Tabs
            tabs.forEach(item => {
                const isActive = item === tab;

                item.classList.toggle('is-active', isActive);
                item.setAttribute('aria-selected', String(isActive));
            });


            // Panels
            panels.forEach(panel => {
                const isActive = panel.dataset.slider === tabName;

                panel.classList.toggle('is-active', isActive);
                panel.hidden = !isActive;

                if (!isActive) {
                    return;
                }

                // Splide створюється тільки при першому відкритті
                const splide = initSlider(panel);

                if (!splide) {
                    return;
                }

                // Panel щойно став visible,
                // тому Splide може коректно визначити свої розміри
                splide.refresh();

                // При перемиканні tab починаємо з першого слайда
                splide.go(0);
            });
        }


        // Click tabs
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                activateTab(tab);
            });
        });


        // Ініціалізуємо тільки початково активний tab
        const activeTab =
            root.querySelector('.js-tabs__tab.is-active') || tabs[0];

        if (activeTab) {
            activateTab(activeTab);
        }
    }


    function initProgressBarTabs(splide) {
        const panel = splide.root.closest('.js-tabs__panel');

        if (!panel) {
            return;
        }

        const bar = panel.querySelector('.js-slider-progress__bar');

        if (!bar) {
            return;
        }


        const updateProgress = () => {
            const end = splide.Components.Controller.getEnd();

            if (end <= 0) {
                bar.style.width = '100%';
                return;
            }

            const rate = (splide.index + 1) / (end + 1);

            bar.style.width = `${rate * 100}%`;
        };


        splide.on('mounted', updateProgress);
        splide.on('move', updateProgress);
        splide.on('refresh', updateProgress);
    }

    document.querySelectorAll('.js-tabs').forEach(root => {
        const type = root.dataset.type;
        const options = SLIDER_TABS_OPTIONS[type];

        if (!options) {
            return;
        }

        initTabsSlider(root, options);
    });

//  ============================================================================
//  SLIDER SIMILAR SLIDER
//  ============================================================================
    function initSimilarSlider() {
        if (!document.querySelector('.similar-slider')) return;
        const similarSlider = new Splide('.similar-slider', {
            perPage: 4,
            perMove: 1,
            gap: 20,
            pagination: false,
            arrowPath: 'M33 6.36377C33.5523 6.36377 34 6.81148 34 7.36377C34 7.91605 33.5523 8.36377 33 8.36377V7.36377V6.36377ZM0.292892 8.07088C-0.0976295 7.68035 -0.0976295 7.04719 0.292892 6.65666L6.65685 0.292702C7.04738 -0.0978227 7.68054 -0.0978227 8.07107 0.292702C8.46159 0.683226 8.46159 1.31639 8.07107 1.70692L2.41421 7.36377L8.07107 13.0206C8.46159 13.4111 8.46159 14.0443 8.07107 14.4348C7.68054 14.8254 7.04738 14.8254 6.65685 14.4348L0.292892 8.07088ZM33 7.36377V8.36377H1V7.36377V6.36377H33V7.36377Z',
            speed: 1200,
        });
        similarSlider.mount();
    }

//===========================================================================================================
// PRODUCT SLIDER
//===========================================================================================================
    function initProductSliders() {
        // Перевіряємо наявність елементів на сторінці перед ініціалізацією
        const mainSliderEl = document.querySelector('#main-slider');
        const thumbSliderEl = document.querySelector('#thumbnail-slider');

        if (!mainSliderEl || !thumbSliderEl) return;

        // 1. Ініціалізація головного слайдера
        var main = new Splide('#main-slider', {
            type: 'fade',
            rewind: true,
            pagination: false,
            arrows: false,
            speed: 1200,
        });

        // 2. Ініціалізація слайдера мініатюр
        var thumbnails = new Splide('#thumbnail-slider', {
            perPage: 5,
            perMove: 1,
            gap: 10,
            rewind: true,
            pagination: false,
            isNavigation: true,
            arrows: false,
            speed: 1200,
            breakpoints: {
                600: {
                    fixedWidth: 60,
                    fixedHeight: 60,
                },
            },
        });

        // 3. Синхронізація та запуск слайдерів
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
    }

//===========================================================================================================
//HIDDEN CONTENT
//===========================================================================================================
    function initHiddenContent() {
        const accordionHeaders = document.querySelectorAll('.product-description__header');

        if (accordionHeaders.length === 0) return;

        accordionHeaders.forEach(header => {
            header.addEventListener('click', function () {
                // Знаходимо батьківський контейнер всього акордеона
                const accordionWrapper = this.closest('.product-description');

                if (accordionWrapper) {
                    // Просто перемикаємо клас .is-open на всьому блоці
                    accordionWrapper.classList.toggle('is-open');
                }
            });
        });
    }

//===========================================================================================================
// QUANTITY PICKERS
//===========================================================================================================

    function initQuantityPickers() {
        document.querySelectorAll('.quantity-picker').forEach(initQuantityPicker);
    }

    function initQuantityPicker(picker) {
        if (picker.classList.contains('js-initialized')) {
            return;
        }
        const minusBtn = picker.querySelector('.qty-btn_minus');
        const plusBtn = picker.querySelector('.qty-btn_plus');
        const input = picker.querySelector('.qty-input');
        if (!minusBtn || !plusBtn || !input) {
            return;
        }
        const getValue = () => parseInt(input.value, 10) || 1;
        const getStep = () => parseInt(input.getAttribute('step'), 10) || 1;
        const getMin = () => parseInt(input.getAttribute('min'), 10) || 1;
        const getMax = () => parseInt(input.getAttribute('max'), 10);
        const updateValue = value => {
            input.value = value;
            input.dispatchEvent(new Event('change', {bubbles: true}));
        };
        minusBtn.addEventListener('click', () => {
            const value = getValue();
            const min = getMin();
            const step = getStep();
            if (value > min) {
                updateValue(value - step);
            }
        });
        plusBtn.addEventListener('click', () => {
            const value = getValue();
            const step = getStep();
            const max = getMax();
            if (!max || value < max) {
                updateValue(value + step);
            }
        });
        picker.classList.add('js-initialized');
    }

//===========================================================================================================
//
//===========================================================================================================


    initPriceSlider();
    initSidebarCollapse();
    initCustomSelect();
    initSliderCategory();
    initSliderBrands();
    initSliderPartners('.partner-marquee-left', 1, 'ltr');
    initSliderPartners('.partner-marquee-right', -1, 'rtl');
    initAccordion();
    initSimilarSlider();
    initProductSliders();
    initHiddenContent();
    initQuantityPickers();

    window.addEventListener('load', () => {
        initSliderBanner();
    });
}
