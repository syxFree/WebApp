(function () {
    //获取<html>元素
    var docEl = document.documentElement;

    function setRem() {
        var width = docEl.getBoundingClientRect().width;
        console.log(width)
        docEl.style.fontSize = width / 10 + 'px'

        //docEl.style.fontSize = width / 16 + 'px'
    }

    setRem()

    window.addEventListener('resize', setRem)
})()