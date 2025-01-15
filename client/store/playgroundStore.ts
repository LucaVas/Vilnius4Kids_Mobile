import {create} from 'zustand'

const mockData: Playground[] = [
    {
        id: 1,
        coordinates: {
            latitude: 54.683835,
            longitude: 25.279269,
        },
        status: 'open'
    },
    {
        id: 2,
        coordinates: {
            latitude: 54.680000,
            longitude: 25.270000,
        },
        status: 'closed'
    }
]

type Playground = {
    id: number,
    coordinates: { latitude: number, longitude: number },
    status: 'open' | 'closed'
}

interface PlaygroundState {
    playgrounds: Playground[]
}

export const usePlaygroundStore = create<PlaygroundState>()((set) => ({
    playgrounds: mockData
}))
