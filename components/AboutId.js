import {useRouter} from "next/router";

const AboutId = () => {
    const router = useRouter();
    const {aboutId} = router.query;

    return (
        <div>
            <h1>AboutId page</h1>
            <p>{aboutId}</p>
        </div>
    )
}

export default AboutId