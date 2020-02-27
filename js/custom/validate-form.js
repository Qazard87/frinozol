"use strict"

let form = new Vue({
    el: ".modal-form",
    data: {
        userName: "",
        email: "",
        text: "",
        errors: {},
        border: {
            name: "",
            email: "",
            text: "",
        },
    },
    methods: {
        validateForm: function () {
            this.errors = {};
            this.border = {
                name: "",
                email: "",
                text: "",
            };

            this.validateEmpty("Заполните поле");
            this.validateEmail();
        },
        validateEmpty: function (phrase,) {
            if (this.userName === "") {
                this.errors.name = phrase;
                this.border.name = " border-error";
            }
            if (this.email === "") {
                this.errors.email = phrase;
                this.border.email = " border-error";
            }
            if (this.text === "") {
                this.errors.text = phrase;
                this.border.text = " border-error";
            }
        },
        validateEmail: function () {
            let regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (this.email.match(regexp) !== null) return true;
            else {
                if (this.errors.email !== "" && this.border.email !== "") return false;
                this.errors.email = "Некорректный E-mail";
                this.border.email = " border-error";
                return false;
            }
        },
        isEmpty: function (obj) {
            for (let key in obj) {
                return false;
            }
            return true;
        },
        fetchData: async function () {
            let data = {
                name: this.userName,
                email: this.email,
                text: this.text,
            };
            try {
                let response = await fetch('http://funroger20.temp.swtest.ru/form-checker/checker.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(data),
                });

                let result = await response.json();

                switch (result.err) {
                    case 0:
                        (function xhrSimulate() {
                            setTimeout(() => $("#askModal [data-dismiss=modal]").trigger({type: "click"}), 0)
                        }());
                        document.querySelector(".wrapper-modal").classList.remove("d-none");
                        break;
                    case 1:
                        this.border.name = " border-error";
                        break;
                    case 2:
                        this.border.email = " border-error";
                        break;
                    case 3:
                        this.border.text = " border-error";
                }
            } catch (e) {
                alert(e.message)
            }
        },
        checkForm: function (e) {
            e.preventDefault();
            this.validateForm();
            if (!this.isEmpty(this.errors)) {
                return;
            }
            this.fetchData();
        },
    },
});

let answer = new Vue({
    el: ".wrapper-modal",
    data: {
        message: "Ваш вопрос отправлен",
        description: "Ответ придет на указанную вами почту",
    },
    methods: {
        closeModal: function () {
            let windowModal = document.querySelector(".wrapper-modal");
            windowModal.classList.add("d-none");
        }
    }
});