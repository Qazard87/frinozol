'use strict'

new Vue({
    el: ".header-menu",
    data: {
        isOpen: false,
        icon: "fa-bars",
        visible: 'd-none',
        elem: document.querySelector('.dropdown')
    },
    methods: {
        checkBtnClass: function () {
            if (this.isOpen) {
                this.isOpen = false;
                this.icon = "fa-bars";
                this.visible = 'd-none';
            } else {
                this.isOpen = true;
                this.icon = "fa-times";
                this.visible = 'd-block';
            }
        },
    },
    mounted(){
        let  elements = document.querySelectorAll('.dropdown-item');
        for(let i = 0; i< elements.length; i++){
            let current = elements[i];
            current.addEventListener('click', this.checkBtnClass);
        }
    }
});