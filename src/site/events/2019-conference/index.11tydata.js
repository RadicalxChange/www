const youtubeData = [
  {
    title: "Welcome to RadicalxChange",
    speakers: "Jeff Lee-Yaw",
    description:
      "Jeff Lee-Yaw kicks off the three day conference by introducing the background and context of the RadicalxChange movement and foundation, followed by an introduction to Richard Rogers of the College for Creative Studies.",
    videoId: "7JODKAg4zuc",
  },
  {
    title: "Richard Rogers @ RadicalxChange",
    speakers: "Richard Rogers",
    description:
      "This inaugural RadicalxChange conference was held in the city of Detroit at the College for Creative Studies. The President of the school, Richard Rogers, talks about the history of the building, the school and Detroit and their importance in design and social innovation.",
    videoId: "y6j0GeLXLlE",
  },
  {
    title: "A New Tech Manifesto",
    speakers: "Baratunde Thurston",
    description:
      "The topic is our personal data online, how it’s collected, used, and valued, and why we should care a lot more than we do. This is not just about tech. It’s about a battle for the future that affects civil rights, human rights, freedom, love, and cat gifs.",
    videoId: "6ebX5Q3QZik",
  },
  {
    title: "Building the RadicalxChange Movement",
    speakers: "Nathan Schneider, Marcia Chatelain, Tawana Petty",
    description:
      "This panel with Nathan Schneider, Marcia Chatelain and Tawana Petty shares lessons from other grassroots movements, communities and organizations that can be applied to RadicalxChange. The panelists discuss strategies and best practices for challenging unjust social orders, while building an inclusive, egalitarian social movement.\n\nSpeakers\n\nNathan Schneider - University of Colorado, Boulder / USA\nMarcia Chatelain - Georgetown University / USA\nTawana Petty - Detroit Community Technology Project / USA\n\nModerated by Glen Weyl",
    videoId: "DkAdNgKR5KY",
  },
  {
    title: "Data Dignity, The Missing Market for Buying and Selling Your Data",
    speakers: "Vi Hart, M Eifler",
    description:
      "In this April 2019 talk given in Detroit at RadicalXChange, Vi Hart and M Eifler, researchers in Microsoft's Office of the CTO, walk us thru four concrete examples of how we might build fair markets for buying and selling data and humanizing the future of AI.",
    videoId: "eoL60vSK2AY",
  },
  {
    title: "Local RxC Groups Panel",
    speakers: "Joshua Shane, Marina Finley, Thom Ivy",
    description:
      "March 22, 2019 \n15:45 - 16:30\nMain Stage\nContent level: Panel\n\nLearn about the RadicalxChange chapters that are emerging around the world and be inspired to start your own!\n\nSpeakers\n\nJoshua Shane\nConsensys /\n\nMarina Finley\nRadicalxChange Students /\n\nThom Ivy\nCommonwealth Labs /",
    videoId: "IsQwSJi7yTU",
  },
  {
    title: "Blockchain & RadicalxChange Communities: Better Together",
    speakers: "Vitalik Buterin",
    description:
      "Filmed at the RadicalxChange conference in Detroit, March 2019",
    videoId: "ohL9258CEY4",
  },
  {
    title: "Margaret Levi @ RadicalxChange",
    speakers: "Margaret Levi",
    description: "",
    videoId: "jqKoDdtnxnI",
  },
  {
    title: "Action for Data Dignity",
    speakers:
      "James Felton Keith, Tawana Petty, Timnit Gebru, Paul Tang, Kim-Mai Cutler",
    description: "",
    videoId: "g3FrDIc3iZ0",
  },
  {
    title: "Detroit as a Hub for Radical Innovation",
    speakers: "Jerry Paffendorf, Fayrouz Saa, Ingrid LaFleur, Jonathan Hui",
    description: "",
    videoId: "UBxqDcNY6Mo",
  },
  {
    title: "ProjectxChange",
    speakers: "Various speakers",
    description:
      "ProjectxChange was an interactive project fair at the conference that presented radical mechanisms and concepts in action. RadicalxChange attendees were able to engage with thirteen selected projects and their teams. Using Quadratic Voting, each attendee helped decide which three projects were selected to present during the final showcase program on the main stage.",
    videoId: "2f9Lu-l0-kI",
  },
  {
    title: "RadicalxChange Fireside Chat",
    speakers: "Natalia Olson-Urtecho, Rahilla Zafar",
    description:
      "Join an intimate fireside chat with Natalia Olson-Urtecho and Rahilla Zafar as they explore the intersection between Radical Markets, small businesses, government, blockchain, and identity.",
    videoId: "MlLN1kgtPV4",
  },
  {
    title: "Social Income",
    speakers: "Zooko Wilcox",
    description: "",
    videoId: "XE1ZuhTp7NE",
  },
  {
    title: "RadicalxChange Saturday Morning",
    speakers: "Alisha Holland",
    description: "",
    videoId: "JGoxrApT7vs",
  },
  {
    title: "Art's Role in New Political Economy: Lessons from Tolstoy",
    speakers: "Matt Prewitt",
    description:
      "March 24, 13:00 - 14:00\nBreakout Session\nContent level: Breakout\nTolstoy’s late-career book, “What is Art” is an underappreciated classic of art criticism. It lucidly maps connections between art, class, and economics, and suggest a vital role for art in bringing about a more just society. Perhaps unsurprisingly, during this period of his life, Tolstoy was also an ardent enthusiast of the economic theories of Henry George, and was articulating out a vision of nonviolence that inspired twentieth-century leaders such as Ghandi and MLK. It is time to revitalize his legacy.",
    videoId: "gb56eqXk0zc",
  },
];

// Sort by title
function compareVideos(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
youtubeData.sort(compareVideos);

module.exports = { youtubeData };
