if (typeof window === "undefined") {
  const fs = require("fs")

  const CSV_FILE_PATH = "circleList.csv"
  const JSON_FILE_PATH = "circleList.json"

  const TITLES = {}
  TITLES["団体ID"] = "circle_id"
  TITLES["団体名"] = "name"
  TITLES["仕分け"] = "type"
  TITLES["教室ID"] = "booth"
  TITLES["活動日"] = "days"
  TITLES["活動場所"] = "place"
  TITLES["所属人数"] = "people_all"
  TITLES["男子所属人数"] = "people_male"
  TITLES["女子所属人数"] = "people_female"
  TITLES["代表者氏名"] = "leader"
  TITLES["部費"] = "club_dues"
  TITLES["入部条件"] = "qualifications"
  TITLES["サークル概要"] = "subtitle"
  TITLES["活動内容"] = "summary"
  TITLES["@イメージ画像"] = "image_filename"
  TITLES["TwitterアカウントID"] = "twitter_ids"
  TITLES["ホームページのリンク(任意)"] = "url"
  TITLES["新入生連絡先メールアドレス(任意)"] = "email"
  TITLES["InstagramアカウントID(任意)"] = "instagram_ids"

  const raw_data = fs.readFileSync(CSV_FILE_PATH, "utf-8")
  const array_data = raw_data.split("\n")

  // タイトル行
  const titles = array_data[0].split(",")

  // 返却するデータ
  let return_data = []

  // 0 行目はタイトル行なので、i = 0 ではなく i = 1 からループを始める
  for (let i = 1; i < array_data.length; ++i) {
    const line = array_data[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/) || []
    for (let j = 0; j < line.length; ++j) {
      if (typeof return_data[i - 1] !== "object") {
        return_data[i - 1] = {}
      }

      if (!(titles[j] in TITLES)) {
        continue
      }

      let item = line[j].split('"').join("")

      if (titles[j] === "団体ID") {
        item = parseInt(item, 10)
      }

      if (titles[j] === "仕分け") {
        item = {
          u: "physical",
          o: "musical",
          b: "cultual"
        }[item]
      }

      return_data[i - 1][TITLES[titles[j]]] = item
    }
  }

  return_json = JSON.stringify(return_data)
  fs.writeFileSync(JSON_FILE_PATH, return_json + "\n")
}
