import Image from "next/image"
import Link from "next/link"

interface SpotProps {
	title: string
	content: React.ReactNode
	images: string[]
	prevSpot: string | undefined
	prevSpotName: string | undefined
	nextSpot: string | undefined
	nextSpotName: string | undefined
}

const Spot: React.FC<SpotProps> = ({
	content,
	images,
	prevSpot,
	prevSpotName,
	nextSpot,
	nextSpotName,
}) => {
	return (
		<>
			<div className="text-center">
				<p className="mt-10 px-8 text-center lg:w-2/5 mx-auto">{content}</p>
				<div className="mx-auto flex flex-col sm:flex-row justify-center items-center flex-wrap mt-10 mb-10 w-11/12 sm:w-3/4 lg:w-2/5">
					{images &&
						images.map((image, index) => (
							<div key={index}>
								<Image
									src={image}
									alt={`image ${index + 1}`}
									width={600}
									height={350}
								/>
							</div>
						))}
				</div>
				<div className="flex justify-center items-center space-x-20 my-10">
					{prevSpot && prevSpotName && (
						<Link
							href={`/notes/${prevSpot}`}
							className="inline-flex items-center opacity-70"
						>
							<span className="mr-2">←</span>
							{prevSpotName.split(" ")[0]?.toUpperCase() ||
								prevSpotName.toUpperCase()}
						</Link>
					)}
					{nextSpot && nextSpotName && (
						<Link
							href={`/notes/${nextSpot}`}
							className="inline-flex items-center"
						>
							{nextSpotName.split(" ")[0]?.toUpperCase() ||
								nextSpotName.toUpperCase()}
							<span className="ml-2">→</span>
						</Link>
					)}
				</div>
			</div>
		</>
	)
}

export default Spot
