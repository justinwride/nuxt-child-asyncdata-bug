export default {
    // Nuxt target See https://nuxtjs.org/api/configuration-target
    target: 'static',
    ssr: false,
    // Headers of the page
    head: {
        title: 'AsyncData Test',
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            hid: 'description',
            name: 'description',
            content: 'Online Coding Platform for Elementary students'
        }],
    },
};