const data = [
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
		name: "Yorke E. Rhodes III",
		affiliation: "",
		image: "yorke_rhodes_III_headshot_square_3456px_less_than_1M.jpg",
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
		affiliation: "Blockchain Government Initiative Network | Georgetown CyberSmart Research Center | Yale University",
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
		name: "Shirui Zhou",
		affiliation: "Georgetown University",
		image: "Introduction_to_The_Space___The_Space.pdf",
	},
	{
		name: "Lara Gülbüke Kınay",
		affiliation: "Laragulbuke.notion.site",
		image: "FE1BA9C9_72F4_48C6_8C39_3A0F3756F918.jpeg",
	},
	{
		name: "Mel Zhou",
		affiliation: "Litentry | Identity's Discourse DAO",
		image: "honey__the_dry_spoon.png",
	},
	{
		name: "Shuai Xin (Chris) Wong",
		affiliation: "sxwong.me",
		image: "IMG_6885_2.HEIC",
	},
	{
		name: "Shayan Eskandari",
		affiliation: "Concordia University | shayan.es",
		image: "shayan_bw.jpeg",
	},
	{
		name: "crystal Good",
		affiliation: "blackbygod.org",
		image: "FB4B5FF5_73DD_48D0_8DAD_CB16EDC34BC8_1_105_c.jpeg",
	},
	{
		name: "Amit Kumar",
		affiliation: "Self, INC",
		image: "3416F547_8A7E_4227_9A88_8D9A8960A786.jpeg",
	},
	{
		name: "Kenric Nelson",
		affiliation: "self-employed",
		image: "Kenric_Portrait_Smaller.JPG",
	},
	{
		name: "Marko Siladin",
		affiliation: "mxs42, LLC",
		image: "marko_siladin.jpg",
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
		name: "Enis Çoban",
		affiliation: "",
		image: "dfbe73a89.png",
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
		name: "Joanna",
		affiliation: "Planetary DAO",
		image: "F658A94D_8E3C_4328_A975_CC21A356D73B.jpeg",
	},
	{
		name: "hussein hashish",
		affiliation: "@metaversive",
		image: "unnamed.png",
	},
	{
		name: "Rashid Owoyele",
		affiliation: "Weizenbaum Institute and university of the arts (UdK) Berlin",
		image: "DSC_0676.jpg",
	},
	{
		name: "Taylor Kendal",
		affiliation: "learningeconomy.io",
		image: "527F79E3_A5A4_4331_B027_9B601E313CFC.jpeg",
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
