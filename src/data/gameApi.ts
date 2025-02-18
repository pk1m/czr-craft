
export type SelectionModel = {
  id: string,
  name: string
}

export type GameModel = {
  id: string
  name: string
  sport: string
  startTime: Date,
  selections: SelectionModel[]
}

export type SortKey = 'name' | 'sport' | 'startTime' | undefined;

const games: GameModel[] = [
  { 
    id: '1', 
    name: "Clippers vs Mavs", 
    sport: 'basketball', 
    startTime: new Date(2025, 2, 5, 12), 
    selections: [
      { id: 's1', name: 'L. Doncic' }, 
      { id: 's2', name: 'J. Harden' }, 
      { id: 's3', name: 'K. Irving' }, 
      { id: 's4', name: 'N. Powell' }
    ]
  },
  { 
    id: '2', 
    name: "Nets vs Jazz", 
    sport: 'basketball', 
    startTime: new Date(2025, 2, 5, 7),
    selections: [
      { id: 's5', name: 'B. Simmons' }, 
      { id: 's6', name: 'D. Russell' }, 
      { id: 's7', name: 'L. Markkanen' }, 
      { id: 's8', name: 'J. Clarkson' }
    ]
  },
  { 
    id: '3', 
    name: "Warriors vs Celtics", 
    sport: 'basketball', 
    startTime: new Date(2025, 2, 5, 2),
    selections: [
      { id: 's9', name: 'S. Curry' }, 
      { id: 's10', name: 'J. Tatum' }, 
      { id: 's11', name: 'K. Thompson' }, 
      { id: 's12', name: 'J. Brown' }
    ]
  },
  { 
    id: '4',
    name: "Jaguars vs Giants", 
    sport: 'football', 
    startTime: new Date(2025, 2, 4, 22),
    selections: [
      { id: 's13', name: 'T. Lawrence' }, 
      { id: 's14', name: 'S. Barkley' }, 
      { id: 's15', name: 'C. Kirk' }, 
      { id: 's16', name: 'D. Jones' }
    ]
  },
  { 
    id: '5', 
    name: "Eagles vs Chiefs", 
    sport: 'football', 
    startTime: new Date(2025, 2, 4, 20),
    selections: [
      { id: 's17', name: 'J. Hurts' }, 
      { id: 's18', name: 'P. Mahomes' }, 
      { id: 's19', name: 'A. Brown' }, 
      { id: 's20', name: 'T. Kelce' }
    ]
  },
  { 
    id: '6', 
    name: "Titans vs 49ers", 
    sport: 'football', 
    startTime: new Date(2025, 2, 4, 12),
    selections: [
      { id: 's21', name: 'D. Henry' }, 
      { id: 's22', name: 'B. Purdy' }, 
      { id: 's23', name: 'D. Hopkins' }, 
      { id: 's24', name: 'C. McCaffrey' }
    ]
  },
  { 
    id: '7', 
    name: "Browns vs Ravens", 
    sport: 'football', 
    startTime: new Date(2025, 2, 3, 18),
    selections: [
      { id: 's25', name: 'N. Chubb' }, 
      { id: 's26', name: 'L. Jackson' }, 
      { id: 's27', name: 'A. Cooper' }, 
      { id: 's28', name: 'M. Andrews' }
    ]
  },
  { 
    id: '8', 
    name: "Mets vs Yankees", 
    sport: 'baseball', 
    startTime: new Date(2025, 2, 3, 17),
    selections: [
      { id: 's29', name: 'F. Lindor' }, 
      { id: 's30', name: 'A. Judge' }, 
      { id: 's31', name: 'P. Alonso' }, 
      { id: 's32', name: 'G. Cole' }
    ]
  },
  { 
    id: '9', 
    name: "Dodgers vs White Sox", 
    sport: 'baseball', 
    startTime: new Date(2025, 2, 2, 17),
    selections: [
      { id: 's33', name: 'M. Betts' }, 
      { id: 's34', name: 'L. Robert' }, 
      { id: 's35', name: 'F. Freeman' }, 
      { id: 's36', name: 'D. Cease' }
    ]
  },
  { 
    id: '10', 
    name: "Astros vs Rangers", 
    sport: 'baseball', 
    startTime: new Date(2025, 2, 2, 5),
    selections: [
      { id: 's37', name: 'J. Altuve' }, 
      { id: 's38', name: 'M. Semien' }, 
      { id: 's39', name: 'Y. Alvarez' }, 
      { id: 's40', name: 'N. Lowe' }
    ]
  }
];

const getFreshData = (sortKey: SortKey): GameModel[] => {
  const newData = JSON.parse(JSON.stringify(games));

  if (sortKey) {
    return newData.sort((a: GameModel, b: GameModel) => {
      if (a[sortKey] < b[sortKey]) {
        return -1;
      }
      if (a[sortKey] > b[sortKey]) {
        return 1;
      }
      return 0;
    })
  } else {
    return newData
  }
}

export const fetchApi = (sortKey: SortKey, success = true) => {
  return new Promise<{ status: number, message: string, data?: GameModel[]}>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({
          status: 200,
          message: "Success",
          data: getFreshData(sortKey),
        });
      } else {
        reject({
          status: 400,
          message: "Invalid",
        });
      }
    }, 2000);
  });
}