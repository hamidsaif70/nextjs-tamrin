import Link from "next/link";
import { useRouter } from "next/router";


export default function(props){
    const router = useRouter()
    console.log(router.query.postNumber)
    return (
        <Link href='/'>go to home</Link>
    )
}