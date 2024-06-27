import Month from "../month"

const mayContent =
	"its been an incredibly cool month and it’s only halfway through! I drank 100 cups of coffee and went horseback riding twice. already earned my first $2000 from two projects, and there’s a hackathon coming up that im participating in with my bf! ♥ looking forward to my trip to the Princes Islands to cycle around and read in my fav coffeeplace. next month will be filled with the hassle of arranging Spanish and French visas. Istanbul is beautiful when you’re just a tourist! can't wait for my partner to arrive so I can show him my favorite spots yay"

const images = [
	"https://images.omrshn.dev/may1.jpeg",
	"https://images.omrshn.dev/may2.jpeg",
	"https://images.omrshn.dev/may3.jpeg",
]

const MayPage = () => {
	return <Month title="March" content={mayContent} images={images} />
}

export default MayPage
