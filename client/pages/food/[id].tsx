import { 
    NextPage, 
    GetStaticPaths, 
    GetStaticProps 
} from "next";

interface FoodI {
    food: any;
}

const FoodPage: NextPage<FoodI> = ({food}: FoodI) => {
    return(
        <>
            {food._id}
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const res = await fetch(`${process.env.BASE_URL}/food`)
    const foods = await res.json()

    const paths = foods.map((food: any) => ({
        params: {
            id: food._id
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({params}: any) => {
    const res = await fetch(`${process.env.BASE_URL}/food/${params.id}`)
    const food = await res.json()

    return {
        props: {
            food
        }
    }
}

export default FoodPage