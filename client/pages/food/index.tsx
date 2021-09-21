import { NextPage, GetStaticProps } from "next";
import FoodList from "../../components/FoodList";

interface FoodI {
    food: any;
}

const Food: NextPage<FoodI> = ({food}: FoodI) => {
    return(
        <>
            <FoodList food={food}/>
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