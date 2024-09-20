import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
    images: [],
    charts: [],
    links: [],
};

const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        setText(state, action) {
            state.text = action.payload;
        },
        addImage(state, action) {
            state.images.push(action.payload);
        },
        addChart(state, action) {
            state.charts.push(action.payload);
        },
        addLink(state, action) {
            state.links.push(action.payload);
        },
    },
});

export const { setText, addImage, addChart, addLink } = editorSlice.actions;
export default editorSlice.reducer;