var postcss = require("postcss");

function glowlite(mixin, color) {
  console.log(mixin, color);

  let animation = {};

  animation[`@keyframes test`] = {
    from: {
      "box-shadow": `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
              0 0 20px rgba(${color}, 1), 0 0 35px rgba(${color}, 1),
              0 0 40px rgba(${color}, 1), 0 0 50px #rgba(${color}, 1),
              0 0 75px rgba(${color}, 1);`
    },
    to: {
      "box-shadow": `0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
              0 0 40px rgba(${color}, 1), 0 0 70px rgba(${color}, 1),
              0 0 80px rgba(${color}, 1), 0 0 100px rgba(${color}, 1),
              0 0 150px rgba(${color}, 1);`
    }
  };

  return animation;
}

module.exports = {
  mixins: {
    image: function(mixin, path) {
      return {
        "&": {
          background: "url(" + path + ")"
        },
        "@media (min-resolution: 120dpi)": {
          "&": {
            background: "url(" + path + "@2x)"
          }
        }
      };
    },
    glowlite: glowlite
  }
};
