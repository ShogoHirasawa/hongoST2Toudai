var config = {
  style: "mapbox://styles/shogohirasawa/cldskvpiu000301qrz93zbrq2",
  accessToken:
    "pk.eyJ1Ijoic2hvZ29oaXJhc2F3YSIsImEiOiJjazFhbzVrMG0yNmxjM2xuaTBmM3h0dW4wIn0.Bxjy09jy_cwOQVexF1xBfg",
  showMarkers: true,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "本郷三丁目駅（丸ノ内線1番出口）から東京大学までのアクセス",
  footer:
    'Source: photo by <a href ="https://www.mapillary.com/app/?lat=35.706772222222&lng=139.76020277778&z=17&pKey=947781572467100" target="_blank">geogeoiz </a> and <a href ="https://www.mapillary.com/app/user/shogohirasawa?lat=35.706833689641996&lng=139.76060708962996&z=17&pKey=3205042446411497" target="_blank"> shogohirasawa </a><br> Created by <a href="https://www.linkedin.com/in/shogohirasawa/" target="_blank">Shogo Hirasawa</a>',
  chapters: [
    {
      id: "1",
      alignment: "left",
      hidden: false,
      title: "本郷三丁目駅（丸ノ内線1番出口）",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/1.jpeg",
      location: {
        center: [139.7601, 35.7068],
        zoom: 17.26,
        pitch: 50.37,
        bearing: 25.99,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "2",
      alignment: "left",
      hidden: false,
      title: "本郷三丁目駅をでて左に進む",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/2.jpeg",
      location: {
        center: [139.7607, 35.7068],
        zoom: 19.25,
        pitch: 43,
        bearing: 81.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "3",
      alignment: "left",
      hidden: false,
      title: "そのまま直進",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/3.jpeg",
      location: {
        center: [139.7607, 35.707],
        zoom: 18.18,
        pitch: 74,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "4",
      alignment: "left",
      hidden: false,
      title: "交差点が見えるまで直進",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/4.jpeg",
      location: {
        center: [139.7606, 35.7074],
        zoom: 18.63,
        pitch: 31,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "5",
      alignment: "left",
      hidden: false,
      title: "横断歩道を渡って交番前に行く",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/5.jpeg",
      location: {
        center: [139.760467, 35.7075834],
        zoom: 19.56,
        pitch: 54,
        bearing: -26.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "6",
      alignment: "left",
      hidden: false,
      title: "交番前に到着",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/6.jpeg",
      location: {
        center: [139.760467, 35.7075834],
        zoom: 19.56,
        pitch: 54,
        bearing: -26.4,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "7",
      alignment: "left",
      hidden: false,
      title: "進行方向右側の横断歩道を渡る",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/7.jpeg",
      location: {
        center: [139.7606, 35.7076],
        zoom: 18.97,
        pitch: 59.2,
        bearing: 42,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "8",
      alignment: "left",
      hidden: false,
      title: "横断歩道を渡った後、左方向に直進",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/8.jpeg",
      location: {
        center: [139.7606, 35.7078],
        zoom: 18.97,
        pitch: 44,
        bearing: -7.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "9",
      alignment: "left",
      hidden: false,
      title: "右手にスターバックスが見えるのでそのまま直進",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/9.jpeg",
      location: {
        center: [139.7605, 35.7081],
        zoom: 18.57,
        pitch: 33,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "10",
      alignment: "left",
      hidden: false,
      title:
        "赤レンガ造りの建物が見えてきます。その手前に門があるのでそこから東大に入ることができます。",
      image: "https://shogohirasawa.github.io/hongoST2Toudai/image/9.jpeg",
      location: {
        center: [139.7602, 35.7098],
        zoom: 19.28,
        pitch: 61,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
