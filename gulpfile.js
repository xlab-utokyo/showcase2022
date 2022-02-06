const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");    // エラーが発生しても強制終了させない
const notify = require("gulp-notify");      // エラー発生時のアラート出力
const pug = require("gulp-pug");

// Sassをコンパイルする
const compileSass = () =>
   src("assets/css/*.scss")
   .pipe(plumber(notify.onError('Error: <%= error.message %>')))
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
   src(["assets/pug/**/*.pug", "!assets/pug/**/_*.pug"])
   .pipe(plumber(notify.onError('Error: <%= error.message %>')))
   .pipe(
       pug({
           pretty: true
       })
   )
   .pipe(dest("public"));

// pugファイルを監視
const watchPugFiles = () =>
   watch(["assets/pug/*.pug"], compilePug);

// npx gulpで実行される関数
exports.default = () =>
   watchSassFiles();
   watchPugFiles();
