module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },

    pug: {
            pretty: true,
        },

        webpack:{
                mode: "production"
        },

        imagemin:{
            verbose: true
        },
        fonter: {
            formats: ["ttf","woff","eot","svg"]
        }

}