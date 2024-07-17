import Month from "../month"
import Link from "next/link"

const juneContent = (
	<>
		we didnt win the hackathon, although still think
		<span className="italic font-light">
			<Link href="https://github.com/kuskusapp/kuskus"> KusKus</Link>
		</span>{" "}
		was a brilliant idea. a similar app has already been made for New York, but
		we planned to make ours on a larger scale. it happens. maybe we'll get lucky
		later. there's a loooot of work this month and constant trips back and forth
		from ist to tbilisi for residency renewal. in georgia, we got a Kitten, and
		he ran away after +- four days. someone else took him from the street. i
		will miss you... went swimming in the cold marble sea with my bf. he said he
		wasnt thrilled about it, but he doesnt regret it. cooool
	</>
)
const images = [
	"https://images.omrshn.dev/inpulp",
	"https://images.omrshn.dev/shavi",
	"https://images.omrshn.dev/meee",
	"https://images.omrshn.dev/morekittens",
	"https://images.omrshn.dev/kitten",
]

const JunePage = () => {
	return <Month title="June" content={juneContent} images={images} />
}

export default JunePage
