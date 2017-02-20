if (process.env.NODE_ENV === "production") {
    // TODO: Enable prod mode
    // module.exports = require("./configureStore.prod");
} else {
    module.exports = require("./configureStore.dev");
}
