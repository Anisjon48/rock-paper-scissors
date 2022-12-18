import { Container } from "../../components/Container"
import { useGame } from "./use-game"

import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Scissors from '../../images/icon-scissors.svg';
import Triagle from '../../images/bg-triangle.svg';

export const Choose = () => {
	const [MyGame, handleClick, userScore, whoWin, clearGameParty, BotGame] = useGame();

	return (
		<Container>
			{!MyGame ? (<div className="main main-toggle">
				<div className="choose-move-line">
					<img src={Triagle} className="triagle" alt="triagle" />
					<div className="choose-move">
						<button className="paper-move" onClick={() => handleClick('paper')}><img src={Paper} className="paper" alt="paper" /></button>
						<button className="scissors-move" onClick={() => handleClick('scissors')}><img src={Scissors} className="scissors" alt="scissors" /></button>
						<button className="rock-move" onClick={() => handleClick('rock')}><img src={Rock} className="rock" alt="rock" /></button>
					</div>
				</div>
			</div>
			) : (
				<div className="main-game game-result">
					<div className="choose-move-line-process">
						<div className="choose-my-move">
							<span className="pick pick-turn">You Picked</span>
							{MyGame === 'paper' ? <button className={`paper-move-process`} disabled><img src={Paper} className="paper" alt="paper" /></button> : null}
							{MyGame === 'rock' ? <button className={`rock-move-process`} disabled><img src={Rock} className="rock" alt="rock" /></button> : null}
							{MyGame === 'scissors' ? <button className={`scissors-move-process`} disabled><img src={Scissors} className="scissors" alt="scissors" /></button> : null}
						</div>
						<div className="play-again">
							{userScore !== undefined && <span>{whoWin()}</span>}
							<button className="reset-game" onClick={clearGameParty}>PLAY AGAIN</button>
						</div>
						<div className="choose-bot-move">
							<span className="pick pick-turn">The Bot Picked</span>
							{BotGame === 'paper' ? <button className={`paper-move-process`} disabled><img src={Paper} className="paper" alt="paper" /></button> : null}
							{BotGame === 'rock' ? <button className={`rock-move-process`} disabled><img src={Rock} className="rock" alt="rock" /></button> : null}
							{BotGame === 'scissors' ? <button className={`scissors-move-process`} disabled><img src={Scissors} className="scissors" alt="scissors" /></button> : null}
						</div>
					</div>
				</div>
			)}
		</Container>
	)
}