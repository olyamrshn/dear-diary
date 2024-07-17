import React from "react"
import Image from "next/image"

interface MonthProps {
	title: string
	content: React.ReactNode
	images: string[]
}

const Month: React.FC<MonthProps> = ({ title, content, images }) => {
	return (
		<>
			<a href="/notes" className="p-5 no-underline focus:outline-none">
				← Back
			</a>
			<div className="text-center">
				<h1>{title.toUpperCase()}</h1>
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
			</div>
		</>
	)
}

export default Month
