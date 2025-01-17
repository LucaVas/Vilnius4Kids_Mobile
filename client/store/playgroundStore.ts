import {create} from 'zustand'

const mockData: Playground[] = [
    {
        id: 1,
        status: 'open',
        address: {
            street: "Antakalnio g.",
            number: "75",
            city: "Vilnius",
            zipCode: "10215",
            district: "Antakalnis"
        },
        coordinate: {
            latitude: 54.71522,
            longitude: 25.317531
        }
    },
    {
        id: 2,
        status: 'open',
        address: {
            street: "Antakalnio g.",
            number: "120",
            city: "Vilnius",
            zipCode: "10200",
            district: "Antakalnis"
        },
        coordinate: {
            latitude: 54.717343,
            longitude: 25.313329
        }
    },
    {
        id: 3,
        status: 'open',
        address: {
            street: "S. Nėries g.",
            number: "301",
            city: "Vilnius",
            zipCode: "06316",
            district: "Fabijoniškės"
        },
        coordinate: {
            latitude: 54.734854,
            longitude: 25.240476
        }
    },
    {
        id: 4,
        status: 'open',
        address: {
            street: "S. Nėries g.",
            number: "49",
            city: "Vilnius",
            zipCode: "06316",
            district: "Fabijoniškės"
        },
        coordinate: {
            latitude: 54.738526,
            longitude: 25.234760
        }
    },
    {
        id: 5,
        status: 'open',
        address: {
            street: "Fabijoniškių g.",
            number: "1",
            city: "Vilnius",
            zipCode: "07131",
            district: "Fabijoniškės"
        },
        coordinate: {
            latitude: 54.720871,
            longitude: 25.254033
        }
    },
    {
        id: 6,
        status: 'open',
        address: {
            street: "Kovo 11 g.",
            number: "32",
            city: "Vilnius",
            zipCode: "27107",
            district: "Grigiškės"
        },
        coordinate: {
            latitude: 54.67067,
            longitude: 25.09307
        }
    },
    {
        id: 7,
        status: 'open',
        address: {
            street: "Kauno Vokės g.",
            number: "1",
            city: "Vilnius",
            zipCode: "27101",
            district: "Grigiškės"
        },
        coordinate: {
            latitude: 54.6784,
            longitude: 25.0775
        }
    },
    {
        id: 8,
        status: 'open',
        address: {
            street: "Sudervės kl.",
            number: "40",
            city: "Vilnius",
            zipCode: "05270",
            district: "Justiniškės"
        },
        coordinate: {
            latitude: 54.71519,
            longitude: 25.22559
        }
    },
    {
        id: 9,
        status: 'open',
        address: {
            street: "I.Šimulionio g.",
            number: "10",
            city: "Vilnius",
            zipCode: "04330",
            district: "Karoliniškės"
        },
        coordinate: {
            latitude: 54.69573,
            longitude: 25.22867
        }
    },
    {
        id: 10,
        status: 'open',
        address: {
            street: "Laisvės pr.",
            number: "40",
            city: "Vilnius",
            zipCode: "04340",
            district: "Karoliniškės"
        },
        coordinate: {
            latitude: 54.69717,
            longitude: 25.21971
        }
    },
    {
        id: 11,
        status: 'open',
        address: {
            street: "R. Jankausko g.",
            number: "15",
            city: "Vilnius",
            zipCode: "04315",
            district: "Karoliniškės"
        },
        coordinate: {
            latitude: 54.69176,
            longitude: 25.20844
        }
    },
    {
        id: 12,
        status: 'open',
        address: {
            street: "Architektų g.",
            number: "104",
            city: "Vilnius",
            zipCode: "04222",
            district: "Lazdynai"
        },
        coordinate: {
            latitude: 54.67642,
            longitude: 25.1991
        }
    },
    {
        id: 13,
        status: 'open',
        address: {
            street: "Subačiaus g.",
            number: "113",
            city: "Vilnius",
            zipCode: "11343",
            district: "Markučiai"
        },
        coordinate: {
            latitude: 54.67445,
            longitude: 54.67445
        }
    },
    {
        id: 14,
        status: 'open',
        address: {
            street: "Naugarduko g.",
            number: "50",
            city: "Vilnius",
            zipCode: "03227",
            district: "Naujamiestis"
        },
        coordinate: {
            latitude: 54.67372,
            longitude: 25.26705
        }
    },
    {
        id: 15,
        status: 'open',
        address: {
            street: "Lukiškių g., 01107",
            number: "1",
            city: "Vilnius",
            zipCode: "01107",
            district: "Naujamiestis"
        },
        coordinate: {
            latitude: 54.69049,
            longitude: 25.2706
        }
    },
    {
        id: 16,
        status: 'open',
        address: {
            street: "Žemaitės skveras, Gedimino pr.",
            number: "29",
            city: "Vilnius",
            zipCode: "01104",
            district: "Naujamiestis"
        },
        coordinate: {
            latitude: 54.68827,
            longitude: 25.27422
        }
    },
    {
        id: 17,
        status: 'open',
        address: {
            street: "Rodūnios Sodų 4-oji g.",
            number: "2",
            city: "Vilnius",
            zipCode: "02195",
            district: "Naujininkai"
        },
        coordinate: {
            latitude: 54.63037,
            longitude: 25.27855
        }
    },
    {
        id: 18,
        status: 'open',
        address: {
            street: "Gerovės g.",
            number: "5",
            city: "Vilnius",
            zipCode: "11211",
            district: "Naujoji Vilnia"
        },
        coordinate: {
            latitude: 54.69118,
            longitude: 25.41371
        }
    },
    {
        id: 19,
        status: 'open',
        address: {
            street: "Ižos g.",
            number: "9",
            city: "Vilnius",
            zipCode: "02241",
            district: "Paneriai"
        },
        coordinate: {
            latitude: 54.63471,
            longitude: 25.12781
        }
    },
    {
        id: 20,
        status: 'open',
        address: {
            street: "Gabijos g.",
            number: "55",
            city: "Vilnius",
            zipCode: "06105",
            district: "Pašilaičiai"
        },
        coordinate: {
            latitude: 54.73381,
            longitude: 25.22516
        }
    },
    {
        id: 21,
        status: 'open',
        address: {
            street: "Aukštaičių g.",
            number: "7",
            city: "Vilnius",
            zipCode: "11341",
            district: "Paupys"
        },
        coordinate: {
            latitude: 54.68003,
            longitude: 25.30568
        }
    },
    {
        id: 22,
        status: 'open',
        address: {
            street: "Vandens g. 9",
            number: "7",
            city: "Vilnius",
            zipCode: "11306",
            district: "Pavilnys"
        },
        coordinate: {
            latitude: 54.66901,
            longitude: 25.35804
        }
    }
]


export type Playground = {
    id: number,
    address: {
        street: string,
        number: string,
        city: string,
        zipCode: string,
        district: string,
    }
    coordinate: { latitude: number, longitude: number },
    status: 'open' | 'closed'
}

interface PlaygroundState {
    playgrounds: Playground[]
}

export const usePlaygroundStore = create<PlaygroundState>()((set) => ({
    playgrounds: mockData
}))
