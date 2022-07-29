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
		name: "Lara Gülbüke Kınay",
		affiliation: "Laragulbuke.notion.site",
		image: "FE1BA9C9_72F4_48C6_8C39_3A0F3756F918.jpeg",
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
		name: "Erkin Coban",
		affiliation: "metaviel.com",
		image: "IMG_6178_2fff.jpg",
	},
	{
		name: "Najmuzzaman Mohammad",
		affiliation: "Najmuzzaman.com",
		image: "hubspot_bg_dp.png",
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
