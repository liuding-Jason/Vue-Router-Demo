
var lazyLoad = {
    init: function() {
        var that = this;
        that.onerrorImgUrl = "data-error"; //图片加载失败用什么图片替换
        that.srcStore = "data-src"; //图片真实地址存放的自定义属性
        that.class = "lazy-img"; //惰性加载的图片需要添加的class
        that.sensitivity = 50; //该值越小，惰性越强（加载越少）
        minScroll = 5,
        slowScrollTime = 200;

        document.addEventListener("scroll", function() {
            that.changeimg();
        });

        setTimeout(function() {
            that.trigger();
        }, 100);

    },
    scanImage: function() {
        var that = this;
        var imgList = [];
        var allimg = [].slice.call(document.querySelectorAll('img.' + that.class + ''));
        allimg.forEach(function(ele) {
            if (!that.isLoadedImageCompleted(ele)) {
                imgList.push(ele);
            }
        });

        that.imglistArr = imgList;
    },
    isLoadedImageCompleted: function(ele) {
        return (ele.getAttribute('data-loaded') == '1');
    },
    trigger: function() {
        var that = this;
        eventType = that.isPhone && "touchend" || "scroll";
        that.fireEvent(document, eventType);
        //$(window).trigger(eventType);
    },
    fireEvent: function(element, event) {
        // 其他标准浏览器使用dispatchEvent方法
        var evt = document.createEvent('HTMLEvents');
        // initEvent接受3个参数：
        // 事件类型，是否冒泡，是否阻止浏览器的默认行为
        evt.initEvent(event, true, true);
        return !element.dispatchEvent(evt);
    },
    changeimg: function() {
        function loadYesOrno(img) {
            var windowPageYOffset = window.pageYOffset,
                windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight,
                imgOffsetTop = img.getBoundingClientRect().top + window.pageYOffset;
            return imgOffsetTop >= windowPageYOffset && imgOffsetTop - that.sensitivity <= windowPageYOffsetAddHeight;
        }

        function loadImg(img, index) {

            var imgUrl = img.getAttribute(that.srcStore);

            img.setAttribute("src", imgUrl);

            img.onload || (img.onload = function() {
                    img.classList.remove(that.class);
                    img.setAttribute('data-loaded', 1)
                    //$(this).removeClass(that.class).getAttribute('data-loaded',1),
                    that.imglistArr[index] = null;
                    img.onerror = img.onload = null;
                },
                img.onerror = function() {
                    img.src = img.getAttribute(that.onerrorImgUrl);
                    img.classList.remove(that.class);
                    img.classList.add("lazy-err");
                    img.setAttribute('data-loaded', 0);
                    //$(this).removeClass(that.class).getAttribute('data-loaded',0),
                    that.imglistArr[index] = null,
                        img.onerror = img.onload = null
                });

            var newImgStack = [];
            that.imglistArr.forEach(function(ele) {

                //img标签可见并且加载未完成
                if (!that.isLoadedImageCompleted(ele)) {
                    newImgStack.push(ele);
                }
            });
            that.imglistArr = newImgStack;
        }

        var that = this;
        that.scanImage();
        that.imglistArr.forEach(function(val, index) {

            if (!val) return;
            var img = val;
            if (!loadYesOrno(img) || that.isLoadedImageCompleted(img)) return;

            if (!img.getAttribute(that.srcStore)) return;

            loadImg(img, index);
        })

    }
};