const press = [
  {
    title: "Asia can show the West how to integrate tech with societal needs ",
    href: "https://asia.nikkei.com/opinion/asia-can-show-the-west-how-to-integrate-tech-with-societal-needs",
    publication: "Nikkei Asia",
    date: "2024-09-06T00:00:00.000Z"
  },
  {
    title:
      "Exploring Plural Voting as a Method for Citizen Engagement",
    href: "https://www.newamerica.org/political-reform/briefs/exploring-plural-voting-as-a-method-for-citizen-engagement/",
    publication: "New America",
    date: "2024-01-16T00:00:00.000Z",
  },
  {
    title: "Colorado Tried A New Way To Vote: Make People Pay—quadratically",
    href: "https://www.wired.com/story/colorado-quadratic-voting-experiment/",
    publication: "Wired",
    date: "2019-04-16T20:00:00",
  },
  {
    title: "A New Way of Voting That Makes Zealotry Expensive",
    href:
      "https://www.bloomberg.com/news/articles/2019-05-01/a-new-way-of-voting-that-makes-zealotry-expensive",
    publication: "Bloomberg Businessweek",
    date: "2019-05-01T07:56:57",
  },
  {
    title: "An Unusual Partnership Advances a More Democratic Way To Vote",
    href: "https://www.rockefellerfoundation.org/grantee-impact-stories/an-unusual-partnership-advances-a-more-democratic-way-to-vote/",
    publication: "Rockefeller Foundation",
    date: "2022-10-10T00:00:00.000Z",
  },
  {
    title:
      "Demolishing Monopoly From Below: How Two Radicals Would Remake Markets",
    href:
      "https://www.wsj.com/articles/demolishing-monopoly-from-below-how-two-radicals-would-remake-markets-1528887790",
    publication: "Wall Street Journal",
    date: "2018-06-13T20:02:54",
  },
  {
    title:
      "The mathematical method that could offer a fairer way to vote",
    href:
      "https://www.economist.com/christmas-specials/2021/12/18/the-mathematical-method-that-could-offer-a-fairer-way-to-vote",
    publication: "The Economist",
    date: "2021-12-18T00:00:00.000Z",
  },
  {
    title: "Digital tools can be a useful bolster to democracy",
    href: "https://www.ft.com/content/5a9fad90-4f0a-11ea-95a0-43d18ec715f5",
    publication: "FT",
    date: "2020-02-16T16:28:52",
  },
  {
    title: "The United States Has Never Truly Been a Democracy",
    href:
      "https://www.nytimes.com/2019/10/24/opinion/democracy-electoral-college.html",
    publication: "The New York Times",
    date: "2019-10-24T00:08:08",
  },
  {
    title: "A Blueprint for a Better Digital Society",
    href: "https://hbr.org/2018/09/a-blueprint-for-a-better-digital-society",
    publication: "Harvard Business Review",
    date: "2018-09-26T23:26:11",
  },
  {
    title:
      "A View Of The Future Of Our Data",
    href:
      "https://www.noemamag.com/a-view-of-the-future-of-our-data/",
    publication: "Noema",
    date: "2021-02-23T00:00:00.000Z",
  },
  {
    title:
      "Data Cooperatives Instead of Data Ownership",
    href:
      "https://background.tagesspiegel.de/digitalisierung-und-ki/briefing/daten-genossenschaften-statt-daten-eigentum",
    publication: "Tagesspiegel",
    date: "2021-01-25T00:00:00.000Z",
  },
  {
    title:
      "The RadicalxChange Movement's Crypto-Cypherpunk Appeal",
    href:
      "https://www.coindesk.com/markets/2019/03/26/the-radicalxchange-movements-crypto-cypherpunk-appeal",
    publication: "Coindesk",
    date: "2019-03-26T00:00:00.000Z",
  },
  {
    title:
      "The Web3 Decentralization Debate is Focused on the Wrong Question",
    href:
      "https://www.wired.com/story/web3-blockchain-decentralization-governance/",
    publication: "Wired",
    date: "2022-05-12T00:00:00.000Z",
  },
];

// Sort with newest date first
function comparePress(a, b) {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
}
press.sort(comparePress);

module.exports = press;
