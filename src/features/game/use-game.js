import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

import { setMyPick, selectMyGame, selectBotGame, gameRules, selectTimerBotGame, setBotPick, clearGame, setScore, selectScore } from "./game-slice";


export const useGame = () => {
	const dispatch = useDispatch();

	const MyGame = useSelector(selectMyGame);
	const TimerBotGame = useSelector(selectTimerBotGame);
	const BotGame = useSelector(selectBotGame);
	const userScore = useSelector(selectScore);

	const handleClick = (move) => {
		dispatch(setMyPick(move));
	}

	const clearGameParty = () => {
		dispatch(clearGame());
	}

	let computer = null;
	let compScore = null;


	const winnerDinner = () => {

		const getComputer = () => {
			if (TimerBotGame <= 0.33) {
				return computer = 'rock';
			} else if (TimerBotGame <= 0.64) {
				return computer = 'scissors';
			} else {
				return computer = 'paper';
			}
		};
		if (MyGame) {
			computer = getComputer();
			compScore += gameRules[computer][MyGame];

		};
	}
	const whoWin = () => {
		let scores = gameRules[MyGame][computer];
		if (scores === 1) {
			return 'YOU WIN';
		} else if (scores === -1) {
			return 'YOU LOSE';
		} else {
			return 'DRAW';
		}
	}

	winnerDinner()

	useEffect(() => {
		if (MyGame) {
			dispatch(setBotPick(computer));
			let scores = gameRules[MyGame][computer];
			let myScore = scores;
			dispatch(setScore(myScore))
		}

	}, [MyGame, computer, dispatch])

	return [MyGame, handleClick, userScore, whoWin, clearGameParty, BotGame];
}