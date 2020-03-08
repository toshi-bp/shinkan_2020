'use strict';
const fs = require('fs');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const clean = require('gulp-clean');


gulp.task('ejs:booths', function (done) {
  const jsonFile = './circles/circlesList.json';
  const templateFile = './booths/ejs/_booth.vue.ejs';
  const indexFile = './booths/ejs/index.vue.ejs';
  const dest = './pages/booths/';
  const json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
  const list = json.list;
  let id;

  // トップページ
  gulp.src(indexFile)
    .pipe(ejs({ list }))
    .pipe(rename('index.vue'))
    .pipe(gulp.dest(dest));

  // 企画画像
  gulp.src('./booths/images/*')
    .pipe(gulp.dest('./assets/image/booths/'));

  // 1企画ごとに1ページ作成
  for (let i = 0; i < list.length; i++) {
    id = list[i].id;

    gulp.src(templateFile)
      .pipe(ejs({
        boothInfo: list[i],
        prevBoothInfo: i !== 0 ? list[i - 1] : null,
        nextBoothInfo: i !== list.length - 1 ? list[i + 1] : null,
      }))
      .pipe(rename(id + '.vue'))
      .pipe(gulp.dest(dest));
  }

  done();
});
