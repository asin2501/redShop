/**
 * Created by User on 06.09.2017.
 */

$(document).ready(function() {

    initAccordion();
    initAccordionFooter();
    initSubscribeForm();
    initHeader();
    initFaqTabs();
	initCelebritiesScroll();
    initProductSizeLink();
    initProductSlider();
    changeOptionLabelText();
	initQTY();
	loadMorePosts();
	initCollectionFilterButton();

    function loadMorePosts(){
		if ($('.events-page')) {
			var month = new Array();
                month[0] = "January";
                month[1] = "February";
                month[2] = "March";
                month[3] = "April";
                month[4] = "May";
                month[5] = "June";
                month[6] = "July";
                month[7] = "August";
                month[8] = "September";
                month[9] = "October";
                month[10] = "November";
                month[11] = "December";

			blogArticles = blogArticles.map(function(item){

			    var rightFormat = new Date(item.post_date);
                item.post_date_right = month[rightFormat.getMonth()] + ' ' + rightFormat.getFullYear();
				return item;
			});

			function compare(a, b) {
				if (a.post_date < b.post_date)
					return 1;
				if (a.post_date > b.post_date)
					return -1;
				return 0;
			}

			blogArticles = blogArticles.sort(compare);

			console.log(blogArticles);

			new Vue({
				el: '#pastEventsList',
				data: {
					showed: 6,
					perPage: 6,
					articles: blogArticles
				},
				methods: {
					showMore: function(){
						this.showed += this.perPage;
					}
				}
			});
		}
    }

    function initAccordion() {
        var $accordionSwitcher = $('.js-accordion-switcher');

        if ($accordionSwitcher.length > 0) {
            $accordionSwitcher.click(function() {
                $(this).next().stop().slideToggle();
                $(this).toggleClass('opened');
            });
        }
    }

    function initHeader(){
        initDesctopMenu();
        initStickyHeader();
        initMobileMenu();
    }

    function initCelebritiesScroll(){
        if($('.celebrities-page')) {
            var $item = $('.js-celebrities-list__item');
            var $mobSelect = $('.js-celebrities-list--mobile');
            
            $mobSelect.on('change', function(){
              var currentID = $mobSelect.val();
				$('.celebrity').removeClass('is-select');

				var itemIDmob = '#' + currentID;
				$(itemIDmob).addClass('is-select');
				$('html, body').animate({
					scrollTop: $(itemIDmob).offset().top
				}, 600);
            });

            $item.on('click', function(e){
                e.preventDefault();
                $('.celebrity').removeClass('is-select');
                var attr = $(e.currentTarget).attr('href');

                var itemID = '#' + attr;
				$(itemID).addClass('is-select');
				$('html, body').animate({
					scrollTop: $(itemID).offset().top
				}, 600);

            });
        }
    }

    function initMobileMenu() {
        var mobmenu = $('#mobile-menu');

        $('#mobile-btn').click(function(){
            $(document.body).toggleClass('mobile-menu-opened');
        });
        //mobile-sub-menu--active
        mobmenu.find('.header-menu__item--has-children').children('.header-menu__link').click(function(e){
            $($(this).attr('href')).addClass('mobile-sub-menu--active');
            console.log($($(this).attr('href')));
            return false;
        });

        $('.js-back').click(function(){
            $(this).parent().removeClass('mobile-sub-menu--active');
        });
    }

    function initStickyHeader() {
        var header = $('#header');
        var headerState = false;

        setHeaderState();

        $(window).on('scroll', setHeaderState);

        function setHeaderState() {

            var scrollTop = $(window).scrollTop();

            if(scrollTop >= 40 && !headerState){
                header.addClass('header--sticky');
                headerState = true;
            }else if(scrollTop < 40 && headerState ){
                header.removeClass('header--sticky');
                headerState = false;
            }
        }
    }

	function initQTY(){
		$('.js-qty').each(function(){
			var minusBtn = $(this).find('.js-minus'),
				plusBtn = $(this).find('.js-plus'),
				inp = $(this).find('.js-inp');

			minusBtn.click(function(){
				var val = inp.val();
				if(!val){
					val = 0;
				}
				--val;
				if(val<1){
					val = 1;
				}
				inp.val(val);
			});

			plusBtn.click(function(){
				var val = inp.val();
				if(!val){
					val = 0;
				}
				++val;
				inp.val(val);
			});
		});
	}

    function initDesctopMenu() {
        var menu = $('#desktopmenu');

        menu
            .find('.header-menu__item--has-children')
            .children('.header-menu__link')
            .click(function(e){

                e.preventDefault();
                e.stopPropagation();
                var menu =  $(this).parent().children('.header-menu--submenu');

                if($(this).hasClass('header-menu__link--arrow-revert')){
                    this.classList.remove('header-menu__link--arrow-revert');
                    menu.removeClass('header-menu__opened').slideUp();
                }else{
                    this.classList.add('header-menu__link--arrow-revert');
                    menu.addClass('header-menu__opened').slideDown();
                }

                $(this).parents('.header-menu').eq(0).find('.header-menu--submenu').not(menu).removeClass('header-menu__opened').slideUp();
                $(this).parents('.header-menu').eq(0).find('.header-menu__link--arrow-revert').not(this).removeClass('header-menu__link--arrow-revert').slideDown();
        });
    }

    function initAccordionFooter() {
        var $footerSwitcher = $('.js-footer-switcher');

        if ($footerSwitcher.length > 0) {
            $footerSwitcher.click(function() {
                if (window.innerWidth < 768) {
                    $(this).next().stop().slideToggle();
                    $(this).toggleClass('opened');
                }
            });
        }
    }

    function initSubscribeForm() {
        if ($('#subscribe-form').length > 0) {
            $('#subscribe-form').formchimp();
        }
    }

    function initFaqTabs() {
        var $faqLinks = $('.js-tab-link');

        if ($faqLinks.length > 0) {
            var $faqBlocks = $('.js-tab');
            $faqLinks.click(function(e) {
               e.preventDefault();
                $faqLinks.removeClass('active');
                $(this).addClass('active');

                $faqBlocks.removeClass('active');
                $($(this).attr('href')).addClass('active');
            });
        }
    }

    function initProductSizeLink() {
        var $sizeLink = $('.js-popup-size');

        if ($sizeLink.length > 0) {
            $sizeLink.magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: true
                }
            });
        }
    }

    function initProductSlider() {
        var $productThumbnails = $('.js-product-thumbnails');
        var $slide = $productThumbnails.find('.product-thumbnails__slide');
        var $featureImage = $('.js-product-feature-img');

        if ($productThumbnails.length > 0) {
            $productThumbnails.slick({
                rows: 0,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                infinite: false,
                vertical: true,
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            verticalSwiping: false,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });

            $productThumbnails.on('afterChange', function(event, slick, currentSlide){
                var currentImageUrl = $(slick.$slides[currentSlide]).find('.product-thumbnails__image').attr('data-url');
                updateFeatureImgUrl(currentImageUrl)
            });

            $slide.click(function() {
                $slide.removeClass('slick-current');
                $(this).addClass('slick-current');
                var imageOriginalUrl = $(this).find('.product-thumbnails__image').attr('data-url');
                updateFeatureImgUrl(imageOriginalUrl)
            });
        }

        //Start code for swatches-filter slider
        var $swatches = $('.js-swatches');
        var $swatchesChecked = $('.js-swatches-checked');
        var $labelValue = $('.js-color-label');

        if ($swatchesChecked.length > 0) {
            var checkedColorHandle = $swatchesChecked.find('label').attr('data-color');
            $productThumbnails.slick('slickFilter', '[data-thumb-color="' + checkedColorHandle + '"]');
        }

        if ($swatches.length > 0) {
            $swatches.find('label').click(function () {
                var colorHandle = $(this).attr('data-color');
                $labelValue.text(colorHandle);

                $productThumbnails.slick('slickUnfilter');
                $productThumbnails.slick('slickFilter', '[data-thumb-color="' + colorHandle + '"]');
                updateFeatureImgUrl( $('.js-product-thumbnails').find('.product-thumbnails__image').first().attr('data-url') );
            });
        }

        function updateFeatureImgUrl(imageUrl) {
            console.log($featureImage);
            console.log(imageUrl);
            console.log($featureImage.css('background-image'));
            $featureImage.css('background-image', 'url(' + imageUrl + ')');
        }
    }


    function changeOptionLabelText() {
        //Update select label value on change
        var $selects = $('[data-single-option-selector]');
        $selects.on('change', function() {
            console.log($(this));
            console.log($(this).val());
            $(this).parents('.product__option').find('.js-select-label').text($(this).val());
        })
    }

    function initCollectionFilterButton() {
	    var $filterButton = $('.js-filter-button');

	    if ($filterButton.length > 0) {
	        var $filterTitle = $('.js-filter-title');
	        var $filterWindow = $('.js-filter-window');


            $filterButton.click(openFilters);
            $filterTitle.click(closeFilters);




            function openFilters() {
                $filterWindow.slideDown();
            }

            function closeFilters() {
                $filterWindow.slideUp();
            }
        }
    }
});