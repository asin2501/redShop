// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: bcSfFilterConfig.custom.products_per_page,
        // Optional
        loadProductFirst: true,
        styleScrollToTop: 'style2'
    }
};

var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'onSaleClass': 'on-sale',

    // Grid Template
    'vendorGridHtml': '<div class="grid-view-item__vendor">{{itemVendorLabel}}</div>',
    'soldOutLabelGridHtml': ' <span class="product-price__sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
    'productGridItemHtml': '<div class="bc-sf-filter-product-item col-md-4 col-6">' +
                                '<div class="product-card {{soldOutClass}} {{saleClass}}">' +
                                    '<div class="product-card__image" style="background-image: url( {{itemThumbUrl}} );">' +
                                        '<a class="product-card__image-link" href="{{itemUrl}}"></a>' +
                                    '</div>' +
                                     '<h3 class="product-card__title"><a href="{{itemUrl}}">{{itemTitle}}</a></h3>' +
                                     '<div class="product-card__price">{{itemPrice}}</div>' +
                                '</div>' +
                            '</div>',

    // List Template
    'vendorSmallListHtml': '<div class="list-view-item__vendor-column small--hide"><div class="list-view-item__vendor">{{itemVendorLabel}}</div></div>',
    'vendorMediumListHtml': '<div class="list-view-item__vendor medium-up--hide">{{itemVendorLabel}}</div>',
    'saleLabelListHtml': '<div class="list-view-item__on-sale">' + bcSfFilterConfig.label.sale + '</div>',
    'soldOutLabelListHtml': '<div class="list-view-item__sold-out">' + bcSfFilterConfig.label.sold_out + '</div>',
    'productListItemHtml':  '<a href="{{itemUrl}}" class="list-view-item">' +
                                '<div class="list-view-item__image-column">' +
                                    '<div class="list-view-item__image-wrapper">' +
                                        '<img class="list-view-item__image" src="{{itemThumbUrl}}" alt="{{itemTitle}}">' +
                                    '</div>' +
                                '</div>' +
                                '<div class="list-view-item__title-column">' +
                                    '<div class="list-view-item__title">{{itemTitle}}</div>' +
                                    '{{itemSaleLabel}}' +
                                    '{{itemMediumVendor}}' +
                                    '{{itemSoldOutLabel}}' +
                                '</div>' +
                                '{{itemSmallVendor}}' +
                                '<div class="list-view-item__price-column">{{itemPrice}}</div>' +
                            '</a>',

    // Pagination Template
    'previousActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--secondary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></a></li>',
    'previousDisabledHtml': '<li><div class="btn btn--secondary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-left" viewBox="0 0 20 8"><path d="M4.814 7.555C3.95 6.61 3.2 5.893 2.568 5.4 1.937 4.91 1.341 4.544.781 4.303v-.44a9.933 9.933 0 0 0 1.875-1.196c.606-.485 1.328-1.196 2.168-2.134h.752c-.612 1.309-1.253 2.315-1.924 3.018H19.23v.986H3.652c.495.632.84 1.1 1.036 1.406.195.306.485.843.869 1.612h-.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Previous</span></div></li>',
    'nextActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--secondary btn--narrow"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></a></li>',
    'nextDisabledHtml': '<li><div class="btn btn--secondary btn--narrow btn--disabled"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-arrow-right" viewBox="0 0 20 8"><path d="M15.186.445c.865.944 1.614 1.662 2.246 2.154.631.491 1.227.857 1.787 1.098v.44a9.933 9.933 0 0 0-1.875 1.196c-.606.485-1.328 1.196-2.168 2.134h-.752c.612-1.309 1.253-2.315 1.924-3.018H.77v-.986h15.577c-.495-.632-.84-1.1-1.035-1.406-.196-.306-.486-.843-.87-1.612h.743z" fill="#000" fill-rule="evenodd"></path></svg><span class="icon__fallback-text">Next</span></div></li>',
    'paginateHtml': '<ul class="list--inline pagination clearfix">{{previous}}<li class="pagination__text">{{pageItems}}</li>{{next}}</ul>',
  
    // Sorting Template
    'sortingHtml': '<label class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select class="filters-toolbar__input filters-toolbar__input--sort">{{sortingItems}}</select>',
};

BCSfFilter.prototype.buildProductGridItem = function(data) {
    /*** Prepare data ***/
    var images = data.images_info;
     // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add a specific class for grid item
    var itemGridWidthClass = '';
    var imageSize = '600x600';
    switch(bcSfFilterConfig.custom.products_per_row) {
        case 2:
            itemGridWidthClass = 'medium-up--one-half';
            imageSize = '540x600';
            break;
        case 3:
            itemGridWidthClass = 'small--one-half medium-up--one-third';
            imageSize = '345x550';
            break;
        case 4:
            itemGridWidthClass = 'small--one-half medium-up--one-quarter';
            imageSize = '250x';
            break;
        case 5:
            itemGridWidthClass = 'small--one-half medium-up--one-fifth';
            imageSize = '195x';
            break;
    }
    itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);

    // Add onSale class
    var onSaleClass = onSale ? bcSfFilterTemplate.onSaleClass : '';  
    itemHtml = itemHtml.replace(/{{onSaleClass}}/g, onSaleClass);

    // Add soldOut item
    var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelGridHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

    // Add Thumbnail
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorGridHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add Price
    var itemPriceHtml = '';
    if (onSale) {
        if (priceVaries) {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="product-card__price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) +'</s>';
            itemPriceHtml += ' <span class="product-card__price product-price__sale">';
            itemPriceHtml += '<span class="product-card__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
            itemPriceHtml += ' <span class="pproduct-card__price-sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            itemPriceHtml += '</span>';
        } else {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="product-price__price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</span></s>';
            itemPriceHtml += ' <span class="product-price__price product-price__sale">';
            itemPriceHtml += this.formatMoney(data.price_min, this.moneyFormat);
            itemPriceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            itemPriceHtml += '</span>';
        }
    } else {
        if (priceVaries) {
            itemPriceHtml += '<span class="product-card__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
        } else {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<span class="product-card__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
        }
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add main attribute
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
}

BCSfFilter.prototype.buildProductListItem = function(data) {
    /*** Prepare data ***/
    var images = data.images_info;
     // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    var itemHtml = bcSfFilterTemplate.productListItemHtml;

    // Add onSale item
    var itemSaleLabel = onSale ? bcSfFilterTemplate.saleLabelListHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);

    // Add soldOut item
    var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelListHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

    // Add Thumbnail
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add Vendor
    var itemSmallVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorSmallListHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
    var itemMediumVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorMediumListHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);

    // Add Price
    var itemPriceHtml = '';
    if (onSale) {
        if (priceVaries) {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="product-price__price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</s>';
            itemPriceHtml += '<span class="product-price__price product-price__sale">';
            itemPriceHtml += '<span class="product__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
            itemPriceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            itemPriceHtml += '</span>';
        } else {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<s class="product-price__price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</s>';
            itemPriceHtml += '<span class="product-price__price product-price__sale">';
            itemPriceHtml += this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
            itemPriceHtml += ' <span class="product-price__sale-label">' + bcSfFilterConfig.label.sale + '</span>';
            itemPriceHtml += '</span>';
        }
    } else {
        if (priceVaries) {
            itemPriceHtml += '<span class="product__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
        } else {
            itemPriceHtml += '<span class="visually-hidden">' + bcSfFilterConfig.label.regular_price + '</span>';
            itemPriceHtml += '<span class="product-price__price">' + this.formatMoney(data.price_min, this.moneyFormat) + '</span>';
        }
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add main attribute
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
}

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    // Get page info
    var currentPage = parseInt(this.queryParams.page);
    var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

    // If it has only one page, clear Pagination
    if (totalPage == 1) {
        jQ(this.selector.pagination).html('');
        return false;
    }

    if (this.getSettingValue('general.paginationType') == 'default') {
        var paginationHtml = bcSfFilterTemplate.paginateHtml;

        // Build Previous
        var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
        previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage -1));
        paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

        // Build Next
        var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
        nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
        paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

        // Build page items
        paginationHtml = paginationHtml.replace(/{{pageItems}}/g, 'Page ' + currentPage + ' of ' + totalPage);

        jQ(this.selector.pagination).html(paginationHtml);
    }
  
    jQ('#bc-sf-filter-total-product').html(totalProduct + ' products');
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Display type
BCSfFilter.prototype.buildFilterDisplayType = function() {
    var itemHtml = '<span>View As </span>';
    itemHtml += '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid bc-sf-filter-sprite" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
    itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list bc-sf-filter-sprite" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
    jQ(this.selector.topDisplayType).html(itemHtml);

    // Active current display type
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
    if (this.queryParams.display == 'list') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
    } else if (this.queryParams.display == 'grid') {
        jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
    }
};

// Add additional feature for product list, used commonly in customizing product list
/*
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    jQ('#bc-sf-filter-products').removeClass();
    if (this.queryParams.display == 'list') {
        jQ('#bc-sf-filter-products').addClass('row list-view-items');
    } else {
        jQ('#bc-sf-filter-products').addClass('row grid--view-items');
    }
};
*/
var search_global;
// Build Additional Elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
          /* Start Initialize BC QuickView */
          if (typeof(bcQuickView) !== 'undefined') {
            if(typeof(bcQuickViewParams) !== 'undefined') {
              bcQuickView.init(bcQuickViewParams);
            } else {
              bcQuickView.init();
            }
          }
          /* End Initialize BC QuickView */
    var totalProduct = '';


	if ($('.search-page').length) {
		search_global = data.total_product;
        $('#search-results-count').text(search_global);

        if (search_global == 0) {
            $('.search-page-results__count').addClass('is-empty');
        } else if (search_global == 1) {
            $('#search-results-count_prod').text('product');
        } else  {
			$('#search-results-count_prod').text('products');
        }
    }

    if (data.total_product == 1) {
        totalProduct = bcSfFilterConfig.label.items_with_count_one.replace(/{{ count }}/g, data.total_product);
    } else {
        totalProduct = bcSfFilterConfig.label.items_with_count_other.replace(/{{ count }}/g, data.total_product);
    }
    jQ('#bc-sf-filter-total-product').html(totalProduct);
}

    // Build Default layout
function buildDefaultLink(a,b){var c=window.location.href.split("?")[0];return c+="?"+a+"="+b}BCSfFilter.prototype.buildDefaultElements=function(a){if(bcSfFilterConfig.general.hasOwnProperty("collection_count")&&jQ("#bc-sf-filter-bottom-pagination").length>0){var b=bcSfFilterConfig.general.collection_count,c=parseInt(this.queryParams.page),d=Math.ceil(b/this.queryParams.limit);if(1==d)return jQ(this.selector.pagination).html(""),!1;if("default"==this.getSettingValue("general.paginationType")){var e=bcSfFilterTemplate.paginateHtml,f="";f=c>1?bcSfFilterTemplate.hasOwnProperty("previousActiveHtml")?bcSfFilterTemplate.previousActiveHtml:bcSfFilterTemplate.previousHtml:bcSfFilterTemplate.hasOwnProperty("previousDisabledHtml")?bcSfFilterTemplate.previousDisabledHtml:"",f=f.replace(/{{itemUrl}}/g,buildDefaultLink("page",c-1)),e=e.replace(/{{previous}}/g,f);var g="";g=c<d?bcSfFilterTemplate.hasOwnProperty("nextActiveHtml")?bcSfFilterTemplate.nextActiveHtml:bcSfFilterTemplate.nextHtml:bcSfFilterTemplate.hasOwnProperty("nextDisabledHtml")?bcSfFilterTemplate.nextDisabledHtml:"",g=g.replace(/{{itemUrl}}/g,buildDefaultLink("page",c+1)),e=e.replace(/{{next}}/g,g);for(var h=[],i=c-1;i>c-3&&i>0;i--)h.unshift(i);c-4>0&&h.unshift("..."),c-4>=0&&h.unshift(1),h.push(c);for(var j=[],k=c+1;k<c+3&&k<=d;k++)j.push(k);c+3<d&&j.push("..."),c+3<=d&&j.push(d);for(var l="",m=h.concat(j),n=0;n<m.length;n++)"..."==m[n]?l+=bcSfFilterTemplate.pageItemRemainHtml:l+=m[n]==c?bcSfFilterTemplate.pageItemSelectedHtml:bcSfFilterTemplate.pageItemHtml,l=l.replace(/{{itemTitle}}/g,m[n]),l=l.replace(/{{itemUrl}}/g,buildDefaultLink("page",m[n]));e=e.replace(/{{pageItems}}/g,l),jQ(this.selector.pagination).html(e)}}if(bcSfFilterTemplate.hasOwnProperty("sortingHtml")&&jQ(this.selector.topSorting).length>0){jQ(this.selector.topSorting).html("");var o=this.getSortingList();if(o){var p="";for(var q in o)p+='<option value="'+q+'">'+o[q]+"</option>";var r=bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g,p);jQ(this.selector.topSorting).html(r);var s=void 0!==this.queryParams.sort_by?this.queryParams.sort_by:this.defaultSorting;jQ(this.selector.topSorting+" select").val(s),jQ(this.selector.topSorting+" select").change(function(a){window.location.href=buildDefaultLink("sort_by",jQ(this).val())})}}};

    // Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData=function(data){for(var k=0;k<data.length;k++){data[k]['images']=data[k]['images_info'];if(data[k]['images'].length>0){data[k]['featured_image']=data[k]['images'][0]}else{data[k]['featured_image']={src:bcSfFilterConfig.general.no_image_url,width:'',height:'',aspect_ratio:0}}data[k]['url']='/products/'+data[k].handle;var optionsArr=[];for(var i=0;i<data[k]['options_with_values'].length;i++){optionsArr.push(data[k]['options_with_values'][i]['name'])}data[k]['options']=optionsArr;data[k]['price_min']*=100,data[k]['price_max']*=100,data[k]['compare_at_price_min']*=100,data[k]['compare_at_price_max']*=100;data[k]['price']=data[k]['price_min'];data[k]['compare_at_price']=data[k]['compare_at_price_min'];data[k]['price_varies']=data[k]['price_min']!=data[k]['price_max'];var firstVariant=data[k]['variants'][0];if(getParam('variant')!==null&&getParam('variant')!=''){var paramVariant=data.variants.filter(function(e){return e.id==getParam('variant')});if(typeof paramVariant[0]!=='undefined')firstVariant=paramVariant[0]}else{for(var i=0;i<data[k]['variants'].length;i++){if(data[k]['variants'][i].available){firstVariant=data[k]['variants'][i];break}}}data[k]['selected_or_first_available_variant']=firstVariant;for(var i=0;i<data[k]['variants'].length;i++){var variantOptionArr=[];var count=1;var variant=data[k]['variants'][i];var variantOptions=variant['merged_options'];if(Array.isArray(variantOptions)){for(var j=0;j<variantOptions.length;j++){var temp=variantOptions[j].split(':');data[k]['variants'][i]['option'+(parseInt(j)+1)]=temp[1];data[k]['variants'][i]['option_'+temp[0]]=temp[1];variantOptionArr.push(temp[1])}data[k]['variants'][i]['options']=variantOptionArr}data[k]['variants'][i]['compare_at_price']=parseFloat(data[k]['variants'][i]['compare_at_price'])*100;data[k]['variants'][i]['price']=parseFloat(data[k]['variants'][i]['price'])*100}data[k]['description']=data[k]['content']=data[k]['body_html']}return data};