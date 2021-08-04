import moment from "moment";

const teamList = [
  {
    teamId: "A",
    name: "Team Checkfront",
    link: "#",
  },
  {
    teamId: "B",
    name: "Team Rental Connections",
    link: "#",
  },
  {
    teamId: "C",
    name: "Team MeepMeep",
    link: "#",
  },
  {
    teamId: "D",
    name: "Team Cuboh",
    link: "#",
  },
  {
    teamId: "E",
    name: "Team Dyspatch",
    link: "#",
  },
  {
    teamId: "F",
    name: "MyLivingCity",
    link: "#",
  },
  {
    teamId: "G",
    name: "Team RDSI",
    link: "#",
  },
  {
    teamId: "H",
    name: "The Unforgettables",
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
    teamId: "Q",
    name: "The Code Queens Team",
    link: "#",
  },
  {
    teamId: "M",
    name: "Team Five Goat Games",
    link: "#",
  },  
  {
    teamId: "P",
    name: "Team Point Cloud Initiative",
    link: "#",
  },
];

const getSchedules = () => {
  const scheduleList = [];
  let roundCount = 0;
  const startTime = moment({ hour: 10, minute: 0, second: 0 });
  let current = startTime;
  // set up the team until end of symposium day
  scheduleList.push({
    timeSlot: current.format("h:mm A"),
    firstGroup: {
      name: "Kick off",
      link: "#",
    },
    secondGroup: {
      name: "Kick off",
      link: "#",
    },
  });
  current.add(15, "minutes");
  while (roundCount <= 3) {
    // set up first round
    if (roundCount == 0) {
      for (let i = 0; i < teamList.length; i += 2) {
        scheduleList.push({
          timeSlot: current.format("h:mm A"),
          firstGroup: teamList[i],
          secondGroup: teamList[i + 1],
        });
        current.add(15, "minutes");
      }
      roundCount++;
    } else if (roundCount == 1) {
      // set up lunch time
      for (let i = 0; i < 2; i++) {
        scheduleList.push({
          timeSlot: current.format("h:mm A"),
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
          timeSlot: current.format("h:mm A"),
          firstGroup: teamList[i + 1],
          secondGroup: teamList[i],
        });
        current.add(15, "minutes");
      }
      roundCount++;
    } else {
      // set up conclusion
      scheduleList.push({
        timeSlot: current.format("h:mm A"),
        firstGroup: {
          name: "Conclusion",
          link: "#",
        },
        secondGroup: {
          name: "Conclusion",
          link: "#",
        },
      });
      current.add(15, "minutes");
      // set up network time
      for (let i = 0; i < 3; i++) {
        scheduleList.push({
          timeSlot: current.format("h:mm A"),
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
