import { Container } from "../../components/Container"
import { useGame } from "./use-game"

export const Choose = () => {
	const [MyGame, handleClick, userScore, whoWin, clearGameParty, BotGame] = useGame();

	return (
		<Container>
			{!MyGame ? (<div className="main main-toggle">
				<div className="choose-move-line">
					<img src='./images/bg-triangle.svg' className="triagle" alt="triagle" />
					<div className="choose-move">
						<button className="paper-move" onClick={() => handleClick('paper')}><img src='./images/icon-paper.svg' className="paper" alt="paper" /></button>
						<button className="scissors-move" onClick={() => handleClick('scissors')}><img src='./images/icon-scissors.svg' className="scissors" alt="scissors" /></button>
						<button className="rock-move" onClick={() => handleClick('rock')}><img src='./images/icon-rock.svg' className="rock" alt="rock" /></button>
					</div>
				</div>
			</div>
			) : (
				<div className="main-game game-result">
					<div className="choose-move-line-process">
						<div className="choose-my-move">
							<span className="pick pick-turn">You Picked</span>
							<button className={`${MyGame}-move-process`} disabled><img src={`./images/icon-${MyGame}.svg`} className="paper" alt="paper" /></button>
						</div>
						<div className="play-again">
							{userScore !== undefined && <span>{whoWin()}</span>}
							<button className="reset-game" onClick={clearGameParty}>PLAY AGAIN</button>
						</div>
						<div className="choose-bot-move">
							<span className="pick pick-turn">The Bot Picked</span>
							<button className={`${BotGame}-move-process`} disabled><img src={`./images/icon-${BotGame}.svg`} className="paper" alt="paper" /></button>
						</div>
					</div>
				</div>
			)}
		</Container>
	)
}