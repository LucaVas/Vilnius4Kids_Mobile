import {create} from 'zustand'

const mockData: Playground[] = [
    {
        coordinates: {
            latitude: 54.683835,
            longitude: 25.279269,
        },
        status: 'open'
    },
    {
        coordinates: {
            latitude: 54.683860,
            longitude: 25.279222,
        },
        status: 'closed'
    }
]

type Playground = {
    coordinates: { latitude: number, longitude: number },
    status: 'open' | 'closed'
}

interface PlaygroundState {
    playgrounds: Playground[]
}

export const usePlaygroundStore = create<PlaygroundState>()((set) => ({
    playgrounds: mockData
}))
