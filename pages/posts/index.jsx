import Link from "next/link";


export default function Home() {
    let num = [];
    for (let i = 0; i < 10; i++) {
        num.push(i);
    }
    console.log(num);
    return (
        <>
            <h1>list of post is here</h1>
            <ul>
                {num.map((n) => {
                    return <Link href={`/posts/${n}`}><p style={{cursor:'pointer'}}>go to post number {n}</p></Link>;
                })}
            </ul>
        </>
    );
}
