import {useRouter} from "next/navigation";

const Navigation = () => {
    const router = useRouter();

    return (
        <nav>
            <button style={{marginRight: "10px"}} type="button" onClick={() => router.push('/')}>Home</button>
            <button style={{marginRight: "10px"}} type="button" onClick={() => router.push('/about')}>About</button>
            <button type="button" onClick={() => router.push('/contacts')}>Contacts</button>
        </nav>
    )
}

export default Navigation