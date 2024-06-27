import Month from "../month"

const aprilContent =
	"wtf its hardly noticeable where the money goes in Georgia????? daily club mate + a couple of cold matcha + groceries + khinkali and there goes 100 bucks. on april 1st, it was 22 degrees. I've been here for 3 weeks already and still haven't been to the mountains. hoping to go there mid-month. started working on a mobile app version of Learn Anything, finding expo tabs super inconvenient. All my liras in the turkish bank acc have been depleted, and converting from $ is only possible by logging into the bank with a turkish number, which can only be topped up in Istanbul 🐇. listening to spotify on airpods max feels like a throwback to 2017"

const images = [
	"https://images.omrshn.dev/april1.jpeg",
	"https://images.omrshn.dev/april2.jpeg",
	"https://images.omrshn.dev/april3.jpeg",
	"https://images.omrshn.dev/april8.jpeg",
	"https://images.omrshn.dev/april4.jpeg",
]

const AprilPage = () => {
	return <Month title="April" content={aprilContent} images={images} />
}

export default AprilPage
