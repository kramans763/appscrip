import Main from "@/Components/Main";



export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.com/products/');
    const data = await res.json();
    console.log("index data", data);

    return {
        props: {
            productData: data,
        },
    };
}

export default function Home({ productData }) {
    return <Main productData={productData} />;
}
