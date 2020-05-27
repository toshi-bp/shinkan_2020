export default function(title, description, image) {
  let imageAbsoluteUrl = image;
  if (typeof image === "string" && imageAbsoluteUrl.slice(0, 1) === "/") {
    imageAbsoluteUrl = "https://welcome-tus.grats.jp" + imageAbsoluteUrl
  }
  const defaultImageUrl =
    "https://welcome-tus.grats.jp" + require("~/assets/image/symbol.png");
  const imageUrl = imageAbsoluteUrl || defaultImageUrl;

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
          "2020年度東京理科大学野田地区新入生歓迎ガイダンス公式ウェブサイト。新型コロナウイルス感染拡大防止のため本年度の新歓は中止となりました。"
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
        content: title || "東京理科大学 野田地区新歓2020"
      },
      {
        hid: "twitter:description",
        name: "twitter:descripton",
        content:
          description ||
          "2020年度東京理科大学野田地区新入生歓迎ガイダンス公式ウェブサイト。新型コロナウイルス感染拡大防止のため本年度の新歓は中止となりました。"
      },
      { hid: "twitter:image", name: "twitter:image", content: imageUrl }
    ]
  }
}
