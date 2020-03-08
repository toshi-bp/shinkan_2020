"use strict"
const fs = require("fs")
const gulp = require("gulp")
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const rimraf = require("rimraf")

gulp.task("clean", function(cb) {
  rimraf("./pages/circles", cb)
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
