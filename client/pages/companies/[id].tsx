import { NextPage } from "next";
import { useRouter } from "next/router";

const CompanyPage: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    return(
        <>   
                ID: {id}
        </>
    )
}

export default CompanyPage