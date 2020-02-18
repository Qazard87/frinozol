'use strict'

new Vue({
    el: ".header-menu",
    data: {
        isOpen: false,
        icon: "fa-bars",
        visible: 'd-none',

    },
    methods: {
        checkBtnClass: function () {
            let elem = document.querySelector('.dropdown-menu');

            if (elem.classList.contains('d-none')) {
                elem.classList.remove('d-none');
                elem.classList.add('d-block');
                this.icon = "fa-times";
            } else {
                elem.classList.remove('d-block');
                elem.classList.add('d-none');
                this.icon = "fa-bars";
            }
        },
    },
    mounted() {
        let elements = document.querySelectorAll('.dropdown-item');
        for (let i = 0; i < elements.length; i++) {
            let current = elements[i];
            current.addEventListener('click', this.checkBtnClass);
        }
    }
});