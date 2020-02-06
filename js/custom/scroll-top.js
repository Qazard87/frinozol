new Vue({
    el: '.wrapper',
    data: {
        visibility: 'd-none',
    },

    mounted() {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.getVisible);

            //Init
            this.getVisible()
        })

    }
    ,

    methods: {
        getVisible(event) {
            let coordY = pageYOffset;
            let screenHeight = document.documentElement.clientHeight;

            if (coordY > screenHeight) {
                this.visibility = "d-block";
            } else {
                this.visibility = "d-none";
            }
        }
        ,
        moveToTop(event) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        ,
    }
    ,

    beforeDestroy() {
        window.removeEventListener('scroll', this.getVisible);
    }
    ,
})
;
