import TestLinks from "../Resources/TestLinks";

export const SortByPropertyTestCases = [
  [
    "Sort by createDate",
    {
      sortProperty: "createDate",
      reverseSort: false
    },
    TestLinks.slice(0, 3),
    [
      {
        id: 0,
        linkName: "Duffy",
        linkURL: "incididunt culpa ullamco",
        vote: -21,
        createDate: 15,
        lastVoteDate: 40
      },
      {
        id: 2,
        linkName: "Melinda",
        linkURL: "esse qui nisi",
        vote: 27,
        createDate: 12,
        lastVoteDate: 37
      },
      {
        id: 1,
        linkName: "Chapman",
        linkURL: "nulla incididunt eu",
        vote: 9,
        createDate: 3,
        lastVoteDate: 2
      }
    ]
  ],
  [
    "Sort by createDate reverse",
    {
      sortProperty: "createDate",
      reverseSort: true
    },
    TestLinks.slice(0, 3),
    [
      {
        id: 1,
        linkName: "Chapman",
        linkURL: "nulla incididunt eu",
        vote: 9,
        createDate: 3,
        lastVoteDate: 2
      },
      {
        id: 2,
        linkName: "Melinda",
        linkURL: "esse qui nisi",
        vote: 27,
        createDate: 12,
        lastVoteDate: 37
      },
      {
        id: 0,
        linkName: "Duffy",
        linkURL: "incididunt culpa ullamco",
        vote: -21,
        createDate: 15,
        lastVoteDate: 40
      }
    ]
  ],
  [
    "Sort by vote",
    {
      sortProperty: "vote",
      reverseSort: false
    },
    TestLinks.slice(0, 3),
    [
      {
        id: 2,
        linkName: "Melinda",
        linkURL: "esse qui nisi",
        vote: 27,
        createDate: 12,
        lastVoteDate: 37
      },
      {
        id: 1,
        linkName: "Chapman",
        linkURL: "nulla incididunt eu",
        vote: 9,
        createDate: 3,
        lastVoteDate: 2
      },
      {
        id: 0,
        linkName: "Duffy",
        linkURL: "incididunt culpa ullamco",
        vote: -21,
        createDate: 15,
        lastVoteDate: 40
      }
    ]
  ],
  [
    "Sort by vote reverse",
    {
      sortProperty: "vote",
      reverseSort: true
    },
    TestLinks.slice(0, 3),
    [
      {
        id: 0,
        linkName: "Duffy",
        linkURL: "incididunt culpa ullamco",
        vote: -21,
        createDate: 15,
        lastVoteDate: 40
      },

      {
        id: 1,
        linkName: "Chapman",
        linkURL: "nulla incididunt eu",
        vote: 9,
        createDate: 3,
        lastVoteDate: 2
      },
      {
        id: 2,
        linkName: "Melinda",
        linkURL: "esse qui nisi",
        vote: 27,
        createDate: 12,
        lastVoteDate: 37
      }
    ]
  ],
  [
    "Sort by vote with equality",
    {
      sortProperty: "vote",
      reverseSort: false
    },
    TestLinks.slice(3, 6),
    [
      {
        id: 5,
        linkName: "Dunlap",
        linkURL: "amet fugiat excepteur",
        vote: 15,
        createDate: "-5",
        lastVoteDate: "15"
      },
      {
        id: 4,
        linkName: "Steele",
        linkURL: "non aute in",
        vote: 15,
        createDate: "-12",
        lastVoteDate: "11"
      },
      {
        id: 3,
        linkName: "Alisha",
        linkURL: "tempor est commodo",
        vote: 12,
        createDate: 31,
        lastVoteDate: "28"
      }
    ]
  ],
  [
    "Sort by vote with equality reverse",
    {
      sortProperty: "vote",
      reverseSort: true
    },
    TestLinks.slice(3, 6),
    [
      {
        id: 3,
        linkName: "Alisha",
        linkURL: "tempor est commodo",
        vote: 12,
        createDate: 31,
        lastVoteDate: "28"
      },
      {
        id: 5,
        linkName: "Dunlap",
        linkURL: "amet fugiat excepteur",
        vote: 15,
        createDate: "-5",
        lastVoteDate: "15"
      },
      {
        id: 4,
        linkName: "Steele",
        linkURL: "non aute in",
        vote: 15,
        createDate: "-12",
        lastVoteDate: "11"
      }
    ]
  ]
];
