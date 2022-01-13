const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

// Sassをコンパイルする
const compileSass = () =>
   src("assets/css/*.scss")
   .pipe(
       sass({
           outputStyle: "expanded"
       })
   )
   .pipe(dest("public/dist/css"));

// Sassファイルを監視
const watchSassFiles = () =>
  watch("assets/css/*.scss", compileSass);

// pugをコンパイルする
const compilePug = () =>
   src(["assets/pug/*.pug", "!assets/pug/_*.pug"])
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("public"));

// pugファイルを監視
const watchPugFiles = () =>
   watch("assets/pug/*.pug", compilePug);

// npx gulpで実行される関数
exports.default = () =>
   watchSassFiles();
   watchPugFiles();
