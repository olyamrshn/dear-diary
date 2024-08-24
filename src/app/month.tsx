import Image from "next/image"
import Link from "next/link"

interface MonthProps {
	title: string
	content: React.ReactNode
	images: string[]
	prevMonth: string | undefined
	prevMonthName: string | undefined
	nextMonth: string | undefined
	nextMonthName: string | undefined
}

const Month: React.FC<MonthProps> = ({
	title,
	content,
	images,
	nextMonth,
	nextMonthName,
	prevMonth,
	prevMonthName,
}) => {
	return (
		<>
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
				<div className="flex justify-center items-center space-x-20 my-10">
					{prevMonth && prevMonthName ? (
						<Link
							href={`/notes/${prevMonth}`}
							className="inline-flex items-center"
						>
							<span className="mr-2">←</span>
							{prevMonthName.split(" ")[0]?.toUpperCase() ||
								prevMonthName.toUpperCase()}
						</Link>
					) : null}
					{nextMonth && nextMonthName ? (
						<Link
							href={`/notes/${nextMonth}`}
							className="inline-flex items-center"
						>
							{nextMonthName.split(" ")[0]?.toUpperCase() ||
								nextMonthName.toUpperCase()}
							<span className="ml-2">→</span>
						</Link>
					) : null}
				</div>
			</div>
		</>
	)
}

export default Month
