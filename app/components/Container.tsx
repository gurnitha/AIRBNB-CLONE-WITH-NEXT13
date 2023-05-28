interface ContainerProps {
	children: React.ReactNode;
}

const Container: React<ContainerProps> = ({
	children
}) => {
	return (
		<div>
			{children}
		</div>
	);
}

export default Container;