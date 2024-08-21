import Link from "next/link"

export const monthData = {
	march: {
		title: "march - saint petersburg",
		content:
			"cool month. started learning react native for mobile applications. I've finally moved to Tbilisi and live in the Vake, just five minutes from pulp! there's a lot of work ahead of me, but it's quite exciting. btw, mastering drag and drop functionalities is proving to be tough",
		images: [],
	},
	april: {
		title: "april - tbilisi",
		content:
			"wtf its hardly noticeable where the money goes in Georgia????? daily club mate + a couple of cold matcha + groceries + khinkali and there goes 100 bucks. on april 1st, it was 22 degrees. I've been here for 3 weeks already and still haven't been to the mountains. hoping to go there mid-month. started working on a mobile app version of Learn Anything, finding expo tabs super inconvenient. All my liras in the turkish bank acc have been depleted, and converting from $ is only possible by logging into the bank with a turkish number, which can only be topped up in Istanbul 🐇. listening to spotify on airpods max feels like a throwback to 2017",
		images: [
			"https://images.omrshn.dev/april1.jpeg",
			"https://images.omrshn.dev/april2.jpeg",
			"https://images.omrshn.dev/april3.jpeg",
			"https://images.omrshn.dev/april8.jpeg",
			"https://images.omrshn.dev/april4.jpeg",
		],
	},
	may: {
		title: "may - istanbul",
		content:
			"its been an incredibly cool month and it’s only halfway through! I drank 100 cups of coffee and went horseback riding twice. already earned my first $2000 from two projects, and there’s a hackathon coming up that im participating in with my bf! ♥ looking forward to my trip to the Princes Islands to cycle around and read in my fav coffeeplace. next month will be filled with the hassle of arranging Spanish and French visas. Istanbul is beautiful when you’re just a tourist! can't wait for my partner to arrive so I can show him my favorite spots yay",
		images: [
			"https://images.omrshn.dev/may1.jpeg",
			"https://images.omrshn.dev/may2.jpeg",
			"https://images.omrshn.dev/may3.jpeg",
		],
	},
	june: {
		title: "june",
		content: (
			<>
				we didn't win the hackathon, although still think{" "}
				<span className="italic font-light">
					<Link href="https://github.com/kuskusapp/kuskus">KusKus</Link>
				</span>{" "}
				was a brilliant idea. a similar app has already been made for New York,
				but we planned to make ours on a larger scale. it happens. maybe we'll
				get lucky later. there's a loooot of work this month and constant trips
				back and forth from ist to tbilisi for residency renewal. in georgia, we
				got a Kitten, and he ran away after +- four days. someone else took him
				from the street. i will miss you... went swimming in the cold marble sea
				with my bf. he said he wasn't thrilled about it, but he doesn't regret
				it. cooool
			</>
		),
		images: [
			"https://images.omrshn.dev/inpulp",
			"https://images.omrshn.dev/kitten",
		],
	},
	july: {
		title: "july - tbilisi",
		content:
			"came back to tbilisi to spend two weeks here before heading to petersburg. recently realized that I havent cooked for myself in almost six months... its been cafes and restaurants every day. honestly, living like this makes it hard to get excited about posting pretty food shots when its your daily routine. btw im not complaining and everything is great. and hooooray, now i have an invitation to Spain and there shouldnt be any problems getting a visa. if it doesnt work out, it will be a long path to getting a nomad. in mid-august have adventure to Kazan for nix conference and a techno festival. Im trying to make more interesting friends in georgia, but the weather and work are killing me )",
		images: [
			"https://images.omrshn.dev/morekittens",
			"https://images.omrshn.dev/shavi",
		],
	},
	august: {
		title: "august - saint petersburg / moscow / kazan",
		content: "in progress",
		images: [],
	},
	september: {
		title: "september - ? ",
		content: "in progress",
		images: [],
	},
}
