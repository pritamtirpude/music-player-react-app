import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      id: uuidv4(),
      name: "Bliss",
      artist: "Misha, Jussi Halme",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-300x300.jpg",
      color: ["#6886B4", "#E491A1"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      active: true,
    },
    {
      id: uuidv4(),
      name: "Waterfalls",
      artist: "G Mills, Molly McPhaul",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/4f968562d372586b08590bf29066c638ee8fda64-300x300.jpg",
      color: ["#892C41", "#FACC98"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16195",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Solar Cove",
      artist: "Mama Aiuto",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/d7ee494a68e5ff81082460680db4944f2ade6497-300x300.jpg",
      color: ["#AE3743", "#D44847"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Cruising",
      artist: "Evil Needle",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-300x300.jpg",
      color: ["#CA5B52", "#E8A159"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Melodiya",
      artist: "Psalm Trees, FloFilz",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-300x300.jpg",
      color: ["#F7AA2A", "#40B6A0"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16060",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Roses n Flames",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-300x300.jpg",
      color: ["#4D516A", "#E089E7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
      active: false,
    },
    {
      id: uuidv4(),
      name: "By Chance",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-300x300.jpg",
      color: ["#2D3B3C", "#493326"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15224",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Runaway",
      artist: "Blue Wednesday, Magnus Klausen",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      color: ["#3AA59D", "#EC8E75"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12136",
      active: false,
    },
    {
      id: uuidv4(),
      name: "Woodnote",
      artist: "Aarigod, imagiro",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-300x300.jpg",
      color: ["#698842", "#5C472A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      active: false,
    },
  ];
}

export default chillHop;
