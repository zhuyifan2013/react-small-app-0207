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
    descend: true,
    index: -1
}

export const dataSlice = createSlice({
    name: 'participants',
    initialState: initialData,
    reducers: {
        sort: (state, action) => {
            console.log(action.payload)

            state.descend = action.payload
            state.participants.sort(function (a, b) {
                if (a.diagnoses.length > b.diagnoses.length)
                    return state.descend ? 1 : -1
                if (a.diagnoses.length < b.diagnoses.length)
                    return state.descend ? -1 : 1
                return 0
            })
        },
        selected: (state, action) => {
            state.index = action.payload
        }
    },
})

function dataSort(descend) {

}

// Action creators are generated for each case reducer function
export const {sort, selected} = dataSlice.actions

export default dataSlice.reducer