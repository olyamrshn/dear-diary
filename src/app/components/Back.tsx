"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Back() {
	const pathname = usePathname()

	let href = "/"
	if (pathname.startsWith("/notes/")) {
		href = "/notes"
	}
	if (pathname.startsWith("/spots/")) {
		href = "/spots"
	} else if (pathname === "/notes" || pathname === "/spots") {
		href = "/"
	}

	return (
		<Link
			href={href}
			className="ml-5 mt-5 no-underline focus:outline-none inline-block"
		>
			← Back
		</Link>
	)
}
