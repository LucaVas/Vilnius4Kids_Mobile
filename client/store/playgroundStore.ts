import {create} from 'zustand'

type Playground = {}

interface PlaygroundState {
    playgrounds: Playground[]
}

export const usePlaygroundStore = create<PlaygroundState>()((set) => ({
    playgrounds: []
}))
