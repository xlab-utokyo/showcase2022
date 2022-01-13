## コンパイル手順
編集する際は、HTMLファイルではなくassets>pugにあるPugファイルを編集します。PugはHTMLを効率的に書くためのテンプレートエンジンです。

Pugはブラウザで認識されないので、普通のHTMLを書きだす（コンパイル）仕組みを作る必要があります。

具体的には、node_modulesのインストール、gulp-pug gulp-sass 2つのパッケージのインストールが必要になります。

初回のみ
```shell
npm init
npm install
npm install gulp -D
npm i -D gulp-pug gulp-sass
```

初回インストール以降、
```shell
npx gulp
```
を実行すると、
```shell
[03:47:55] Using gulpfile ~/code/2-websiteFile/gulpfile.js
[03:47:55] Starting 'default'...
```
という状態になります。この状態でPugファイルを編集して保存すると、HTMLに自動コンパイルされます（publicディレクトリ内にHTMLが書き出される）。

コンパイルさえしてしまえば、VSCodeのGo Liveなどの拡張機能を使ってプレビューできます。
