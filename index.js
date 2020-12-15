    // slider
    var i;
    var str = '';
    for (i = 1; i < 4; i++) {
        str += "<div class='mySlides fade'><img src='./images/img" + i + ".jpg' width='100%'></div>";
    }
    document.getElementById('pic').innerHTML = str;
    var slideIndex = 1;
    autoSlide();

    function plusSlides(n) {
        slideIndex += n
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    function autoSlide() {
        slideIndex++;
        showSlides(slideIndex);
        setTimeout(autoSlide, 4000);
    }

    // timer
    var timer = null;
    var index = 60 * 60 * 3;
    function count() {
        var time = document.getElementsByTagName('i');
        var hr = index / 60 / 60;
        var min = index / 60 % 60;
        var sec = index % 60;
        time[0].textContent = parseInt(hr) + "時";
        time[1].textContent = parseInt(min) + "分";
        time[2].textContent = sec + "秒"
        index--;
        if (index < 0) {
            clearInterval(timer);
            timer = null;
        }
    }
    timer = setInterval(count, 1000);

    // set products
    const products = ["3022WTMi", "3628A", "4002WLMi", "5562", "B2821",
        "dv4213AP", "F3APT24DD", "NC2400", "S6F", "TC4200", "TM2403", "V2632",
        "VGN-AR18TP", "VGN-FE25TP", "VGN-FJ79TP", "VX1", "W5GT24DD", "W7J"];
    var str = '';
    for (i = 0; i < products.length; i++) {
        str += "<div class='item' onclick='showPop(\"" + products[i] + "\")'><img src='./products/" + products[i]
            + ".jpg' width='150' height='150'/><p style='text-align:center'>"
            + products[i] + "</p></div>";
    }
    var showProducts = document.getElementById('products');
    showProducts.innerHTML = str;
    // search
    function changeValue() {
        var search = document.getElementById('search');
        if (search.value) {
            var newProducts = [];
            newProducts = products.filter((item) => item.indexOf(search.value) > -1);
            var newStr = '';
            for (i = 0; i < newProducts.length; i++) {
                newStr += "<div class='item' onclick='showPop(\"" + newProducts[i] + "\")'><img src='./products/"
                    + newProducts[i] +
                    ".jpg' width='150' height='150'/><p style='text-align:center'>"
                    + newProducts[i] + "</p></div>";
            }
            showProducts.innerHTML = newStr;
        } else {
            showProducts.innerHTML = str;
        }
    }
    function changeList(list) {
        var newStr = '';
        for (i = 0; i < list.length; i++) {
            newStr += "<div class='item' onclick='showPop(\"" + list[i] + "\")'><img src='./products/"
                + list[i] +
                ".jpg' width='150' height='150'/><p style='text-align:center'>"
                + list[i] + "</p></div>";
        }
        showProducts.innerHTML = newStr;
    }
    // show popup
    function showPop(str) {
        var pop = document.getElementById('popup');
        var img = document.getElementById('img');
        var title = document.getElementById('title');
        var backdrop = document.getElementById('backdrop');
        pop.style.display = 'block';
        backdrop.style.display = 'block';
        img.src = "./products/" + str + ".jpg"
        title.textContent = str;
    }

    // close popup
    function closePop() {
        var pop = document.getElementById('popup');
        var backdrop = document.getElementById('backdrop');
        pop.style.display = 'none';
        backdrop.style.display = 'none';
    }

    // filter brand
    function filterbrand(brand) {
        var newProducts = [];
        switch (brand) {
            case 'asus':
                newProducts = ["S6F", "F3APT24DD", "VX1", "W5GT24DD", "W7J"];
                changeList(newProducts);
                break;
            case 'acer':
                newProducts = ["3022WTMi", "5562", "NC2400", "TM2403", "3628A"];
                changeList(newProducts);
                break;
            case 'hp':
                newProducts = ["B2821", "dv4213AP", "NC2400", "TC4200", "V2632",];
                changeList(newProducts);
                break;
            case 'sony':
                newProducts = ["VGN-AR18TP", "VGN-FE25TP", "VGN-FJ79TP"];
                changeList(newProducts);
                break;
            default:
                newProducts = products;
                changeList(newProducts);
        }
    }
    // scroll to top

    // 定義滾動位置
    var scrollTop = null;
    var goToTop = document.getElementById('goToTop');
    window.addEventListener('scroll',()=>{
      scrollTop = document.documentElement.scrollTop
      // 控制按鈕隱藏跟顯示
      if(scrollTop > 300){
        isScrollTop = true;
        goToTop.style.display = '';
      }else{
        goToTop.style.display= 'none';
      }
    },true);
    function scrollToTop(){
      setTimeout(()=>{
        if(document.documentElement.scrollTop>0){
          document.documentElement.scrollTop-=30;
          scrollToTop();
        }
      },1);
    }