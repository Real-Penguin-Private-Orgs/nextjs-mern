import { 
    NextPage, 
    GetStaticPaths, 
    GetStaticProps
} from "next";
import Head from 'next/head'
import { useRouter } from "next/router";

interface Company {
    company: any;
}

const CompanyPage: NextPage<Company> = ({company}: Company) => {
    const router = useRouter()
    const { id } = router.query

    if(!id) return <span></span>

    return(
        <>   
            <Head>
                <title>{company.name} - Food Databank</title>
                <meta name="title" content="Food Databank"  />
                <meta name="description" content="Find your favourite food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                ID: {id}
                <span>{company.name}</span>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch(`${process.env.BASE_URL}/company`)
    const company = await res.json()

    const paths = company.map((data: any) => ({
        params: {
            id: data._id
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const res = await fetch(`${process.env.BASE_URL}/company/${params.id}`);
    const company = await res.json()
    
    return {
        props: {
            company
        }
    }    
}

export default CompanyPage