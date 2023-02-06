var config = {
  style: "mapbox://styles/shogohirasawa/cldskvpiu000301qrz93zbrq2",
  accessToken:
    "pk.eyJ1Ijoic2hvZ29oaXJhc2F3YSIsImEiOiJjazFhbzVrMG0yNmxjM2xuaTBmM3h0dW4wIn0.Bxjy09jy_cwOQVexF1xBfg",
  showMarkers: true,
  markerColor: "#3FB1CE",
  inset: true,
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
  title: "本郷三丁目駅（丸ノ内線1番出口）から東京大学までのアクセス",
  byline: "By Shogo Hirasawa",
  footer:
    'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
  chapters: [
    {
      id: "1",
      alignment: "left",
      hidden: false,
      title: "本郷三丁目駅（丸ノ内線1番出口）",
      image: "./path/to/image/source.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: {
        center: [139.760658, 35.7067],
        zoom: 17.26,
        pitch: 50.37,
        bearing: 25.99,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "second-identifier",
      alignment: "right",
      hidden: false,
      title: "Second Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-77.020636, 38.8869],
        zoom: 8.5,
        pitch: 60,
        bearing: -43.2,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "third-identifier",
      alignment: "left",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [6.15116, 46.20595],
        zoom: 12.52,
        pitch: 8.01,
        bearing: 0.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "fourth-chapter",
      alignment: "fully",
      hidden: false,
      title: "Third Title",
      image: "./path/to/image/source.png",
      description: "Copy these sections to add to your story.",
      location: {
        center: [-58.54195, -34.716],
        zoom: 4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
