import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	pickedMe: '',
	timerPickBot: '',
	pickedBot: '',
	score: ''
};

const gameSlice = createSlice({
	name: '@@game',
	initialState,
	reducers: {
		setMyPick: (state, action) => {
			state.pickedMe = action.payload;
			state.timerPickBot = Math.random();
		},
		setBotPick: (state, action) => {
			state.pickedBot = action.payload;
		},
		setScore: (state, action) => {
				state.score = action.payload + +state.score;
			},
		clearGame: (state, action) => {
			return {
				...initialState,
				score: state.score,
			}
		}
	}
})

export const { setMyPick, setBotPick, clearGame, setScore } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;

export const selectMyGame = (state) => {
	return state.game.pickedMe;
};
export const selectBotGame = (state) => {
	return state.game.pickedBot;
};
export const selectScore = (state) => {
	return state.game.score;
};

export const selectTimerBotGame = (state) => {
	return state.game.timerPickBot;
}

export const gameRules = {
		"rock" : {
			"rock" :  0,
			"scissors" : 1,  
			"paper" : -1, //-1,
		 }, 
		"scissors" : {
			"rock" :  -1,//-1,
			"scissors" : 0,  
			"paper" : 1,
		}, 
		"paper" : {
			"rock" :  1,
			"scissors" : -1, //-1,  
			"paper" : 0,
		} 
}

	