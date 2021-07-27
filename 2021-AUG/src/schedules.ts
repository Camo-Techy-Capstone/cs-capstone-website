import moment from "moment";

const teamList = [
  {
    teamId: "A",
    name: "Checkfront",
    link: "#",
  },
  {
    teamId: "B",
    name: "Rental Connections",
    link: "#",
  },
  {
    teamId: "C",
    name: "MeepMeep",
    link: "#",
  },
  {
    teamId: "D",
    name: "Cuboh",
    link: "#",
  },
  {
    teamId: "E",
    name: "Dyspatch",
    link: "#",
  },
  {
    teamId: "F",
    name: "MyLivingCity",
    link: "#",
  },
  {
    teamId: "G",
    name: "RDSI",
    link: "#",
  },
  {
    teamId: "H",
    name: "The Unforgettables",
    link: "#",
  },
  {
    teamId: "I",
    name: "N/A",
    link: "#",
  },
  {
    teamId: "J",
    name: "Team Metl",
    link: "#",
  },
  {
    teamId: "K",
    name: "Archio",
    link: "#",
  },
  {
    teamId: "L",
    name: "Safe-T-Peg",
    link: "#",
  },
  {
    teamId: "M",
    name: "Utopian Moon: Salvage Run",
    link: "#",
  },
  {
    teamId: "O",
    name: "Rental Connections",
    link: "#",
  },
  {
    teamId: "Q",
    name: "N/A",
    link: "#",
  },
  {
    teamId: "P",
    name: "Point Cloud Initiative",
    link: "#",
  },
];

const getSchedules = () => {
  const scheduleList = [];
  let roundCount = 0;
  const startTime = moment({ hour: 10, minute: 0, second: 0 });
  const endTime = moment({ hour: 16, minute: 30, second: 0 });
  let current = startTime;
  // set up the team until end of symposium day
  while (roundCount <= 3) {
    // set up first round
    if (roundCount == 0) {
      for (let i = 0; i < teamList.length; i += 2) {
        scheduleList.push({
          timeSlot: current.format("h:mm:ss A"),
          firstGroup: teamList[i],
          secondGroup: teamList[i + 1],
        });
        current.add(15, "minutes");
      }
      roundCount++;
    } else if (roundCount == 1) {
      // set up lunch time
      for (let i = 0; i < 4; i++) {
        scheduleList.push({
          timeSlot: current.format("h:mm:ss A"),
          firstGroup: {
            name: "Lunch",
            link: "#",
          },
          secondGroup: {
            name: "Lunch",
            link: "#",
          },
        });
        current.add(15, "minutes");
      }
      roundCount++;
    } else if (roundCount == 2) {
      // set up second round
      for (let i = 0; i < teamList.length; i += 2) {
        scheduleList.push({
          timeSlot: current.format("h:mm:ss A"),
          firstGroup: teamList[i + 1],
          secondGroup: teamList[i],
        });
        current.add(15, "minutes");
      }
      roundCount++;
    } else {
      // set up network time
      for (let i = 0; i < 7; i++) {
        scheduleList.push({
          timeSlot: current.format("h:mm:ss A"),
          firstGroup: {
            name: "Network",
            link: "#",
          },
          secondGroup: {
            name: "Network",
            link: "#",
          },
        });
        current.add(15, "minutes");
      }
      roundCount++;
    }
  }
  return scheduleList;
};

export default getSchedules;
