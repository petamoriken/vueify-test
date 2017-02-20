const Vue = require("vue");

new Vue({
    el: "#app",
    components: {
        "test-component": require("./test.vue"),
        "test2-component": require("./test2.vue")
    }
});