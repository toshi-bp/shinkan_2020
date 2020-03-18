export default function(title, description, image) {
  let imageAbsoluteUrl = image
  if (typeof image === "string" && imageAbsoluteUrl.slice(0, 1) === "/") {
    imageAbsoluteUrl = "https://welcome-tus.grats.jp/2020/" + imageAbsoluteUrl
  }
  const defaultImageUrl =
    "https://welcome-tus.grats.jp/2020/" + require("~/assets/image/symbol.png")
  const imageUrl = imageAbsoluteUrl || defaultImageUrl

  return {
    title: title
      ? `${title} - 理科大野田地区新歓2020`
      : "2020年度東京理科大学野田地区新入生歓迎ガイダンス",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          description ||
          "2020年度東京理科大学野田地区新入生歓迎ガイダンス公式ウェブサイト。本年度は4月11日(土)開催。"
      },
      // Twitter Card
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@tusnodashinkan" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "東京理科大学 野田地区新歓2020"
      },
      {
        hid: "twitter:description",
        name: "twitter:descripton",
        content:
          description ||
          "2020年度東京理科大学野田地区新入生歓迎ガイダンス公式ウェブサイト。本年度は4月11日(土)開催。"
      },
      { hid: "twitter:image", name: "twitter:image", content: "~/assets/image/symbol.png" }
    ]
  }
}
