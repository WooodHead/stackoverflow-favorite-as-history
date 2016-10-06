//http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript

(function() {
    function eventFire(el, etype) {
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    }

    var question = document.getElementsByClassName('question')[0];
    var starOff = question.getElementsByClassName('star-off')[0];
    var starOn = question.getElementsByClassName('star-on')[0];
    if (!starOn) {
        eventFire(starOff, 'click');
    }
})();
