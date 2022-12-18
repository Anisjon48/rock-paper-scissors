import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectScore } from '../features/game/game-slice';

import { Container } from './Container';

const Title = styled.span`
	color: white;
	font-size: 35px;
	font-weight: var(--fs-bold);
	line-height: 28px;
`;

const ScoreWrapper = styled.div`
	background-color: white;
	border-radius: 5px;
	padding: 0 35px;
`;

const ScoreText = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	line-height: 37px;
`

const ScoreWord = styled.span`
	color: var(--color-text-score);
	font-size: 18px;
	font-weight: var(--fw-normal);
`;

const ScoreNumber = styled.span`
	color: var(--color-text-dark);
	font-size: 60px;
	font-weight: var(--fw-bold);
	padding-bottom: 15px;
`
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 0;
	width: 700px;
`
const HeaderEl = styled.div`
	border: solid 1px hsl(217, 16%, 45%);
	border-radius: 10px;
	margin-top: 40px;
	padding: 0 20px;
`

export const Header = () => {
	const dispatch = useDispatch();
	const userScore = useSelector(selectScore);

	return (
		<Container >
			<HeaderEl>
				<Wrapper>
					<Title>ROCK<br />PAPER<br />SCISSORS</Title>
					<ScoreWrapper>
						<ScoreText>
							<ScoreWord>SCORE</ScoreWord>
							<ScoreNumber>{userScore}</ScoreNumber>
						</ScoreText>
					</ScoreWrapper>
				</Wrapper>
			</HeaderEl>
		</Container>
	)
};