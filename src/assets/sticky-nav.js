(function(){
  var config = {"custom_selector": "", "version": 2.0, "advanced": false, "animation": "none", "offset": "0", "last_modified": 1563299580, "display": "all", "display_when": "scroll_past", "custom_click_handler": "", "store": "bookgenie.myshopify.com", "location": "bottom", "display_on_all_pages": false, "manual_liquid_update": false, "padding": "12", "always_display": false, "tracking_api_url": "https://http://rechargepayments.com/subscribe-with-recharge/", "cart_mode": "normal", "custom_html": "", "background": "#0084ff", "size": "24", "foreground": "#ffffff", "automatic": true, "google_analytics": false};
  var original_button = null;
  var sticky_button = null;
  var animation_interval = -1;
  var text_copy_interval = -1;

  function is_mobile() {
      var check = false;
      (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
  }

  function animate(){
      if(config.animation != 'none'){
          sticky_button.classList.remove('animated');
          sticky_button.classList.remove(config.animation);

          setTimeout(function(){
          sticky_button.classList.add('animated');
          sticky_button.classList.add(config.animation);
          },10);
      }
  }

  function scroll(e){
      if(!find_button()){
          return;
      }

      var original_rect = original_button.getBoundingClientRect();
      var sticky_rect = sticky_button.getBoundingClientRect();
      var location = -10 * sticky_rect.height;

      var document_height = document.documentElement.scrollHeight || document.body.scrollHeight;
      var scroll_top = document.documentElement.scrollTop || document.body.scrollTop;
      var client_height = document.documentElement.clientHeight;
      var original_button_top = original_rect.top + scroll_top;

      var target = -1;

      switch(config.display_when){
          case 'scroll_past':
              target = original_button_top;
              break;

          case 'always':
              target = (-1 * sticky_rect.height);
              break;

          case 'scroll_10':
              target = (document_height - client_height) * 0.1;
              break;

          case 'scroll_20':
              target = (document_height - client_height) * 0.2;
              break;

          case 'scroll_30':
              target = (document_height - client_height) * 0.3;
              break;

          case 'scroll_40':
              target = (document_height - client_height) * 0.4;
              break;

          case 'scroll_50':
              target = (document_height - client_height) * 0.5;
              break;

          case 'scroll_60':
              target = (document_height - client_height) * 0.6;
              break;

          case 'scroll_70':
              target = (document_height - client_height) * 0.7;
              break;

          case 'scroll_80':
              target = (document_height - client_height) * 0.8;
              break;

          case 'scroll_90':
              target = (document_height - client_height) * 0.9;
              break;
      }

      location = (-1 * sticky_rect.height) - (target - scroll_top);

      if(location >= (-1 * sticky_rect.height)){
          if(location >= 0){
              location = 0;
              if(animation_interval == -1){
                  animation_interval = setInterval(animate, 5000);
              }
          }else{
              clearInterval(animation_interval);
              animation_interval = -1;
          }
      }else{
          clearInterval(animation_interval);
          animation_interval = -1;
      }

      if(config.advanced){
          location = location + (1*config.offset);
      }
      sticky_button.style[config.location] = location + 'px';
  }

  function find_button(){
      var selectors = [
          'form[action^="/cart/add"] [type="submit"]',
          'form button.add-to-cart',
          'form[action^="/cart/add"] button[name="add"]',
          '.addtocart-js',
          '#AddToCart',
          '[data-shopify="payment-button"] div[role="button"]',
          'form[action^="/cart/add"] .shg-btn',
          '.fastcheckout_buy_button'
      ];

      if(config.advanced && config.custom_selector != ''){
          selectors = [config.custom_selector];
      }

      for(var i = 0; i < selectors.length; i++){
          var buttons = document.querySelectorAll(selectors[i]);

          for(var j = 0; j < buttons.length; j++) {
              var button = buttons[j];
              if (button) {
                  var button_rect = button.getBoundingClientRect();
                  if (button_rect.width > 0 && button_rect.height > 0) {
                      original_button = button;
                      return true;
                  }
              }
          }
      }
      return false;
  }

  function track_click(){
      if( typeof this.last_add_to_cart == 'undefined' ) {
          this.last_add_to_cart = 0;
      }
      var time = new Date().getTime();

      if(time - this.last_add_to_cart < 1000){
          return;
      }

      this.last_add_to_cart = time;

      var product_id = window.ShopifyAnalytics.meta.product.id;
      var variant_id = original_button.closest('form').querySelector('[name="id"]').value;
      var currency = window.ShopifyAnalytics.meta.currency;
      var quantity = 1;
      try{
          quantity = original_button.closest('form').querySelector('[name="quantity"]').value;
      }catch (e) {}

      var variant = null;

      for(var i = 0; i < window.ShopifyAnalytics.meta.product.variants.length; i++){
          variant = window.ShopifyAnalytics.meta.product.variants[i];
          if(variant.id == variant_id){
              break;
          }
      }

      var product_name = variant.name;
      var variant_name = variant.public_title;
      if(variant_name) {
          product_name = product_name.substr(0, product_name.length - variant_name.length - 3);
      }
      var price = variant.price;

      var data = {
          store: config.store,
          product_id: product_id,
          variant_id: variant_id,
          product_name: product_name,
          variant_name: variant_name,
          price: price,
          currency: currency,
          quantity: quantity,
          referrer: document.referrer
      };

      var encoded = '';

      for (var prop in data) {
          if (data.hasOwnProperty(prop)) {
              if (encoded.length > 0) {
                  encoded += '&';
              }
              encoded += encodeURI(prop + '=' + (data[prop] ? data[prop] : ''));
          }
      }

      var xhr = new XMLHttpRequest();

      xhr.open('POST', config.tracking_api_url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(encoded);
  }

  function enable_direct_to_checkout(){
      var form = original_button.closest('form');
      var return_to = form.querySelector('input[name="return_to"]');
      if(!return_to){
          return_to = document.createElement('input');
          return_to.setAttribute('type', 'hidden');
          return_to.setAttribute('name', 'return_to');
          form.appendChild(return_to);
      }
      return_to.setAttribute('value', '/checkout/');
  }

  function click(e){
      if(config.google_analytics) {
          if (window['_gaq']) {
              window['_gaq'].push(['_trackEvent', 'Sticky Cart', 'Sticky Button Click'])
          } else if (window['ga']) {
              window['ga']('send', 'event', 'Sticky Cart', 'Sticky Button Click');
          } else if (window['gtag']) {
              window['gtag']('event', 'Sticky Button Click', {'event_category': 'Sticky Cart'});
          }
      }

      if(config.cart_mode == 'direct_sticky'){
          enable_direct_to_checkout();
      }

      try {
          track_click();
      }catch (e) {}

      if(config.advanced && config.custom_click_handler != '') {
          eval(config.custom_click_handler);
      }else {
          original_button.dispatchEvent(new e.constructor(e.type, e));
          //original_button.click();
      }
  }

  function get_page_type(){
      var type = 'unknown';
      if(window.ShopifyAnalytics) {
          if (window.ShopifyAnalytics.meta && window.ShopifyAnalytics.meta.page) {
              type = window.ShopifyAnalytics.meta.page.pageType;
          }
      }else{
          if(location.href.match(/\/products\//)){
              type = 'product';
          }
      }

      return type;
  }

  function initialize(){
      if(get_page_type() != 'product'){
          if(!config.display_on_all_pages){
              return;
          }
      }

      if(document.querySelector('.sticky-cart-button')){
          return;
      }

      if (config.display == 'mobile' && !is_mobile()) {
          return;
      }
      if (config.display == 'desktop' && is_mobile()) {
          return;
      }
      if(!find_button()){
          setTimeout(initialize, 1000);
          return;
      }

      var style = getComputedStyle(original_button);

      sticky_button = document.createElement('button');

      sticky_button.style.font = style.font;

      sticky_button.classList.add('sticky-cart-button');

      for(var i in style){
          if((''+i).startsWith('font') && (''+i).length > 4){
              sticky_button.style[i] = style[i];
          }
      }

      sticky_button.style.lineHeight = style.lineHeight;

      if(original_button.tagName === 'INPUT'){
          sticky_button.textContent = original_button.value.trim();
      }else{
          sticky_button.textContent = original_button.textContent.trim();
      }

      if(config.advanced && config.custom_html != ''){
          sticky_button.innerHTML = config.custom_html;
      }else{
          text_copy_interval = setInterval(function(){
              find_button();
              if(original_button) {
                  var text = '';
                  if(original_button.tagName === 'INPUT'){
                      text = original_button.value.trim();
                  }else{
                      text = original_button.textContent.trim();
                  }
                  if(sticky_button.textContent != text){
                      sticky_button.textContent = text;
                  }
              }
          },100);
      }

      if(config.automatic){
          sticky_button.style.background = style.background;
          sticky_button.style.backgroundColor = style.backgroundColor;
          sticky_button.style.color = style.color;
          sticky_button.style.padding = style.padding;
          sticky_button.style.border = style.border;
          sticky_button.style.borderRadius = style.borderRadius;

          for(var k in style){
              if(    k.startsWith('border-top') || k.startsWith('borderTop')
                  || k.startsWith('border-bottom') || k.startsWith('borderBottom')
                  || k.startsWith('border-left') || k.startsWith('borderLeft')
                  || k.startsWith('border-right') || k.startsWith('borderRight')
                  || k.startsWith('background')
                  || k.startsWith('padding')){

                  if(k.indexOf('-') > 0 || k.toLowerCase() != k){
                      if(style[k] != '') {
                          sticky_button.style[k] = style[k];
                      }
                  }
              }
          }
      }else {
          sticky_button.style.border = 'initial';
          sticky_button.style.borderRadius = 'initial';
          sticky_button.style.background = config.background;
          sticky_button.style.backgroundColor = config.background;
          sticky_button.style.color = config.foreground;
          sticky_button.style.fontSize = config.size + 'px';
          sticky_button.style.paddingTop = config.padding + 'px';
          sticky_button.style.paddingBottom = config.padding + 'px';
          sticky_button.style.paddingLeft = '0';
          sticky_button.style.paddingRight = '0';
      }

      sticky_button.style.position = 'fixed';
      sticky_button.style.bottom = -100000000;
      sticky_button.style.zIndex = 999;
      sticky_button.style.left = 0;
      sticky_button.style.right = 0;
      sticky_button.style.textAlign = 'center';
      sticky_button.style.display = 'block';
      sticky_button.style.width = '100%';
      sticky_button.style.margin = '0';
      sticky_button.style.boxSizing = 'border-box';

      sticky_button.addEventListener('click', click);
      sticky_button.addEventListener('touchstart', click);

      document.body.appendChild(sticky_button);

      var sticky_rect = sticky_button.getBoundingClientRect();

      if(config.location == 'bottom') {
          document.body.style.paddingBottom = sticky_rect.height + 'px';
      }

      document.addEventListener('scroll', scroll);
      scroll();

      if(config.cart_mode == 'direct'){
          enable_direct_to_checkout();
      }
  }

  initialize();
})();



  (function(code){
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet) {
          style.styleSheet.cssText = code;
      } else {
          style.innerHTML = code;
      }
  document.getElementsByTagName("head")[0].appendChild( style );
  })("/* misc fixes */\nbody.js-drawer-open .sticky-cart-button{display: none!important;}");
