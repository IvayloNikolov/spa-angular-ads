var n = (function () {
    function newNotySuccess() {
        return noty({
            text: 'Success',
            animation: {
                open: {height: 'toggle'},
                close: {height: 'toggle'},
                easing: 'swing',
                speed: 500
            },
            layout: 'topCenter',
            timeout: 3000,
            closeWith: ['button'],
            type: 'success'
        });
    }
    function newNotyError(){
        return noty({
            text: 'Error',
            animation: {
                open: {height: 'toggle'},
                close: {height: 'toggle'},
                easing: 'swing',
                speed: 500
            },
            layout: 'topCenter',
            timeout: 3000,
            closeWith: ['button'],
            type: 'error'
        });
    }
    return {
        success : newNotySuccess,
        error: newNotyError

    }
})();