import { 
    NextPage, 
    GetStaticPaths, 
    GetStaticProps 
} from "next";

interface FoodI {
    food: any;
    company: any;
}

const FoodPage: NextPage<FoodI> = ({food, company}: FoodI) => {
    return(
        <>
            {food._id}
            {food.brand}
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
    const companyRes = await fetch(`${process.env.BASE_URL}/company/${food.company}`)
    const company = await companyRes.json()

    return {
        props: {
            food,
            company
        }
    }
}

export default FoodPage