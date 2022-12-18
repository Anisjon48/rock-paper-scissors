import styled from "styled-components"

	const Button = styled.button`
		position: absolute;
		right: 100px;
		bottom: 20px;
		color: hsl(217, 16%, 45%);
		font-family: var(--family);
		font-weight: var(--fw-normal);
		background-color: transparent;
		border: 1px solid hsl(217, 16%, 45%);
		padding: 10px 20px;
		font-size: 20px;
		border-radius: 7px;
		cursor: pointer;
	`;

export const Instruction = () => {
	return (
		<Button>RULES</Button>
	)
}