import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav(){
	return (
		<nav className="w-full fixed top-0 h-[80px] flex items-center px-8">
			<Link className="ml-auto" href="/login">
				<Button>Login</Button>
			</Link>
			
		</nav>
	)
}