import {createSlice} from '@reduxjs/toolkit'
import {jsonData} from "./DataSource";

const initialData = {
    participants: JSON.parse(jsonData).sort(function (a, b) {
        if (a.diagnoses.length > b.diagnoses.length)
            return 1
        if (a.diagnoses.length < b.diagnoses.length)
            return -1
        return 0
    }),
    descendNumber: true,
    descendName: true,
    index: -1,
    itemCursor: null
}

export const dataSlice = createSlice({
    name: 'participants',
    initialState: initialData,
    reducers: {
        sortNumber: (state, action) => {
            state.descendNumber = action.payload
            state.participants.sort(function (a, b) {
                if (a.diagnoses.length > b.diagnoses.length)
                    return state.descend ? 1 : -1
                if (a.diagnoses.length < b.diagnoses.length)
                    return state.descend ? -1 : 1
                return 0

            })
        },
        sortName:(state, action) => {
            state.descendName = action.payload
            state.participants.sort(function (a, b) {
                if (a.firstName > b.firstName)
                    return state.descendName ? -1 : 1
                if (a.firstName < b.firstName)
                    return state.descendName ? 1 : -1
                return 0
            })
        },
        selected: (state, action) => {
            state.index = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {sortName, sortNumber, selected} = dataSlice.actions

export default dataSlice.reducer