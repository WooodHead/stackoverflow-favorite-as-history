//http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript

(function () {
    setTimeout(() => {
        const button = document.querySelector('.js-bookmark-btn')
        const isStared = document.querySelector('.fc-yellow-600')
        if (!isStared) {
            button.click();
        }
    }, 1000);
})();
