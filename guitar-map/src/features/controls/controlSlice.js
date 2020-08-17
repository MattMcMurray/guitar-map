import { createSlice } from '@reduxjs/toolkit';

const flats = {
    "A♭": false,
    "A": false,
    "B♭": false,
    "B": false,
    "C": false,
    "D♭": false,
    "D": false,
    "E♭": false,
    "E": false,
    "F": false,
    "G♭": false,
    "G": false,
};

const sharps = {
    "A": false,
    "A♯": false,
    "B": false,
    "C": false,
    "C♯": false,
    "D": false,
    "D♯": false,
    "E": false,
    "F": false,
    "F♯": false,
    "G": false,
    "G♯": false,
}

export const controlSlice = createSlice({
    name: 'controls',
    initialState: {
        useFlats: true,
        notes: {
            ...flats,
        }
    },

    reducers: {
        toggleNote: (state, action) => {
            const note = action.payload.toUpperCase();

            return {
                ...state,
                notes: {
                    ...state.notes,
                    [note]: !state["notes"][note],
                }
            };
        },

        toggleUseFlats: (state) => {
            const useFlats = !state.useFlats
            let notesToUse = useFlats ? flats : sharps;

            // TODO: map between flats and sharps so user doesn't have to re-select notes

            return {
                ...state,
                useFlats,
                notes: {
                    ...notesToUse
                },
            }
        }
    }
});

export const { toggleNote, toggleUseFlats } = controlSlice.actions;

export default controlSlice.reducer;