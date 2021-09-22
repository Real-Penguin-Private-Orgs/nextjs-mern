import { NextPage, GetStaticProps } from "next";
import FoodList from "../../components/FoodList";
import Head from 'next/head'
import Header from "../../components/Header";

interface FoodI {
    food: any[];
}

const Food: NextPage<FoodI> = ({food}: FoodI) => {
    return(
        <>
        <Head>
                <title>Food List</title>
        </Head>
        <Header />
           {food.map((data) => (
                <FoodList key={data._id} food={data}/>
           ))}
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const foodRes = await fetch(`${process.env.BASE_URL}/food`);
    const food = await foodRes.json()

    return {
        props: {
            food
        }
    }    
}

export default Food;