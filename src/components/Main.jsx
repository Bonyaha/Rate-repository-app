import TextComponents from './Text'

const { Text, Subheading } = TextComponents

const Main = () => {
	return (
		<>
			<Text>Simple text</Text>
			<Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
			<Subheading>
				Bold subheading
			</Subheading>
			<Text color="textSecondary">Text with secondary color</Text>
		</>
	)
}

export default Main