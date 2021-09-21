import CompanyCard from "../../components/CompanyCard";
import { NextPage, GetStaticProps } from "next";
import Head from 'next/head'
import Header from "../../components/Header";

interface CompaniesI {
    companies: any[];
}

const Companies: NextPage<CompaniesI> = ({companies}: CompaniesI) => {
    return(
        <>
        <Head>
            <title>Food Databank - Companies</title>
            <meta name="title" content="Food Databank"  />
            <meta name="description" content="Find your favourite food" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
            <Header />
           {companies.map((data) => (
               <CompanyCard key={data._id} company={data} />
           ))}
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`${process.env.BASE_URL}/company`);
    const data = await res.json()

    return {
        props: {
            companies: data
        }
    }    
}

export default Companies