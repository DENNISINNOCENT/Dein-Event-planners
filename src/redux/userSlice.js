import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// post user
export const addUser = createAsyncThunk(
  "addUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://652bb1f3d0d1df5273ee9bad.mockapi.io/formData",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// READ ACTION
// get all booking
export const getAllBooking = createAsyncThunk(
  "getAllBooking",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://652bb1f3d0d1df5273ee9bad.mockapi.io/formData"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // Use error.message for error details
    }
  }
);

// DELETE ACTION
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://652bb1f3d0d1df5273ee9bad.mockapi.io/formData/${id}`,{
          method:"DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // Use error.message for error details
    }
  }
);
// UPDATE ACTION
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://652bb1f3d0d1df5273ee9bad.mockapi.io/formData/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Make sure data includes the ID and updated fields
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});



const userSlice = createSlice({
  name: "users",
  initialState: {
    formData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.formData.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBooking.fulfilled, (state, action) => {
        console.log("Data received from API:", action.payload);
        state.loading = false;
        state.formData = action.payload;
      })
      .addCase(getAllBooking.rejected, (state, action) => {
        console.log("Error while fetching data:", action.payload); // Add this log
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading =true;
      })
      .addCase(deleteUser.fulfilled, (state,action) =>{
        state.loading = false;
        const id = action.payload
        if(id){
          state.formData = state.formData.filter((data) => data.id !== id)
        }
      })
      .addCase(deleteUser.rejected,(state ,action) =>{
        state.loading = false;
        state.error = action.payload
      })
      .addCase(updateUser.pending,(state =>{
        state.loading = true;
      }))
      .addCase(updateUser.fulfilled, (state,action) =>{
        state.loading =false
        state.formData = state.formData.map((data) =>
          data.id === action.payload.id ? action.payload : data
        )

      })
      .addCase(updateUser.rejected,(state ,action) =>{
        state.loading = false;
        state.error = action.payload
      })
  },
});

export default userSlice.reducer;
