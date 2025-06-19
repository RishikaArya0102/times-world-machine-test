import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCountryDetails = createAsyncThunk(
    'getCountryDetails',
    async () => {
        try {
            const url = `https://restcountries.com/v2/all?fields=name,region,flag`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        countryDetails: [],
        displayedCount: 20,
        isLoading: false,
        error: '',
    },
    reducers: {
        loadMore: (state) => {
            state.displayedCount += 20;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCountryDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCountryDetails.fulfilled, (state, action) => {
                state.countryDetails = action.payload;
                state.isLoading = false;
            })
            .addCase(getCountryDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            });
    }
});


export const { loadMore } = countrySlice.actions;

export default countrySlice.reducer;