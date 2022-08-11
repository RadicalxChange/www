const data = [
	{
		name: "Jamilya Kamalova",
		affiliation: "Blockchaingov.eu | kleros.io",
		image: "ethprague_pic.jpg",
	},
	{
		name: "Aanjaneya Kumar",
		affiliation: "Indian Institute of Science Education and Research (IISER) Pune",
		image: "15041.jpg",
	},
	{
		name: "Philip Delamore",
		affiliation: "www.rca.ac.uk",
		image: "4EBEC8C2_B988_4EBB_A8F2_DBF4DA862586.jpeg",
	},
	{
		name: "Luke Hartman",
		affiliation: "rumbo.so",
		image: "me.jpeg",
	},
	{
		name: "Akinori Oyama",
		affiliation: "",
		image: "Profile_333.jpg",
	},
	{
		name: "Jean Hansen",
		affiliation: "peerbase.xyz",
		image: "jean_avatar.png",
	},
	{
		name: "Sebastian Jaramillo",
		affiliation: "rct.ai | delysium.com",
		image: "DCBEA9A5_7F50_43BD_8035_FA165D3155C9.jpeg",
	},
	{
		name: "Tetsu Kurumisawa",
		affiliation: "Blockchain Government Initiative Network | Georgetown CyberSmart Research Center",
		image: "IMG_1050_copy.JPG",
	},
	{
		name: "Deen Somally",
		affiliation: "linktr.ee/deensomally",
		image: "217836385_10159084241861075_2432028550966045700_n.jpg",
	},
	{
		name: "Leon Erichsen",
		affiliation: "Gitcoin",
		image: "DSC00167.JPG",
	},
	{
		name: "Bella Irons",
		affiliation: "AcademicWeb3Conference.com",
		image: "19CB6BFC_CEE9_4FA6_8B9A_F8B5A072A054.jpeg",
	},
	{
		name: "Lara Gülbüke Kınay",
		affiliation: "Laragulbuke.notion.site",
		image: "FE1BA9C9_72F4_48C6_8C39_3A0F3756F918.jpeg",
	},
	{
		name: "Shuai Xin (Chris) Wong",
		affiliation: "sxwong.me",
		image: "IMG_6885_2.png",
	},
	{
		name: "Shayan Eskandari",
		affiliation: "Concordia University | shayan.es",
		image: "shayan_bw.jpeg",
	},
	{
		name: "Kenric Nelson",
		affiliation: "self-employed",
		image: "Kenric_Portrait_Smaller.JPG",
	},
	{
		name: "Skippy Mesirow",
		affiliation: "City of Aspen | Elected Leaders Collective",
		image: "skippy_ahrlingfoto_5.jpg",
	},
	{
		name: "Oliver Klingefjord",
		affiliation: "replabs.xyz",
		image: "1639650447644.jpeg",
	},
	{
		name: "Max Peacock",
		affiliation: "Sphere Technologies",
		image: "Tight_crop.jpg",
	},
	{
		name: "Erkin Coban",
		affiliation: "metaviel.com",
		image: "IMG_6178_2fff.jpg",
	},
	{
		name: "Danielle Dougall",
		affiliation: "Columbia University School of International and Public Affairs (SIPA)",
		image: "Danielle_Headshot.jpg",
	},
	{
		name: "Najmuzzaman Mohammad",
		affiliation: "Najmuzzaman.com",
		image: "hubspot_bg_dp.png",
	},
	{
		name: "Magnus Surmann",
		affiliation: "",
		image: "E07AB93A_BBF2_4FC7_A1BF_D6136C3822A6.jpeg",
	},
	{
		name: "Hussein Hashish",
		affiliation: "@metaversive",
		image: "unnamed.png",
	},
	{
		name: "Rashid Owoyele",
		affiliation: "Weizenbaum Institute and university of the arts (UdK) Berlin",
		image: "DSC_0676.jpg",
	},
	{
		name: "Puja Ohlhaver",
		affiliation: "Flashbots Ltd.",
		image: "puja_ohlhaver.jpg",
	},
	{
		name: "Paula Berman",
		affiliation: "RadicalxChange Foundation",
		image: "paula_berman.jpeg",
	},
	{
		name: "Matt Prewitt",
		affiliation: "RadicalxChange Foundation",
		image: "matt_prewitt.jpg",
	},
	{
		name: "Jack Henderson",
		affiliation: "RadicalxChange Foundation",
		image: "jack-henderson.png",
	},
	{
		name: "Angela Corpus",
		affiliation: "RadicalxChange Foundation",
		image: "angela_corpus.jpg",
	},
	{
		name: "Alex Randaccio",
		affiliation: "RadicalxChange Foundation",
		image: "alex_randaccio.jpg",
	},
	{
		name: "Jennifer Lyn Morone",
		affiliation: "RadicalxChange Foundation",
		image: "jennifer_lyn_morone.jpg",
	},
];

// Sort by last name
function compareRegistrants(a, b) {
  if (a.name.split(" ").pop() < b.name.split(" ").pop()) {
    return -1;
  }
  if (a.name.split(" ").pop() > b.name.split(" ").pop()) {
    return 1;
  }
  return 0;
}
data.sort(compareRegistrants);

module.exports = data;
