import Month from "../month"

const julyContent =
	"came back to tbilisi to spend two weeks here before heading to petersburg. recently realized that I havent cooked for myself in almost six months... its been cafes and restaurants every day. honestly, living like this makes it hard to get excited about posting pretty food shots when its your daily routine. btw im not complaining and everything is great. and hooooray, now i have an invitation to Spain and there shouldnt be any problems getting a visa. if it doesnt work out, it will be a long path to getting a nomad. in mid-august have adventure to Kazan for an nyx (wtf) conference and a techno festival. Im trying to make more interesting friends in georgia, but the weather and work are killing me )"

const images: any[] = []

const JulyPage = () => {
	return <Month title="July" content={julyContent} images={images} />
}

export default JulyPage
