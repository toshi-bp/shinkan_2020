"use strict"
const fs = require("fs")
const gulp = require("gulp")
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const rimraf = require("rimraf")
const imagemin = require("gulp-imagemin")
const pngquant = require("imagemin-pngquant")
const mozjpeg = require("imagemin-mozjpeg")

gulp.task("clean", function(cb) {
  rimraf("./pages/circles", cb)
})

//団体画像の圧縮
gulp.task("imagemin", () => {
  gulp
    .src("./circles/images/*")
    .pipe(
      imagemin([
        pngquant("65-80"),
        mozjpeg({
          quality: 80,
          progressive: true
        })
      ])
    )
    .pipe(gulp.dest("./assets/image/circles/*"))
})

gulp.task(
  "ejs:circles",
  gulp.series(gulp.parallel("clean"), function(done) {
    const jsonFile = "./circles/circleList.json"
    const templateFile = "./circles/ejs/_circle.vue.ejs"
    const indexFile = "./circles/ejs/index.vue.ejs"
    const dest = "./pages/circles/"
    const circles = JSON.parse(fs.readFileSync(jsonFile, "utf8"))

    // トップページ
    gulp
      .src(indexFile)
      .pipe(ejs({ circles }))
      .pipe(rename("index.vue"))
      .pipe(gulp.dest(dest))

    // 団体画像
    gulp.src("./circles/images/*").pipe(gulp.dest("./assets/image/circles/"))

    // 1団体ごとに1ページ作成
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].circle_id === undefined) {
        continue
      }

      gulp
        .src(templateFile)
        .pipe(
          ejs({
            circle: circles[i]
          })
        )
        .pipe(rename(circles[i].circle_id + ".vue"))
        .pipe(gulp.dest(dest))
    }

    done()
  })
)
