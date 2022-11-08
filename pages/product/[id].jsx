import { BaseClient } from '@xata.io/client';
import { useEffect } from "react";


const Product = ({ product }) => {
    useEffect(() => {
        const productGallery = cloudinary.galleryWidget(
            {
                container: "#gallery",
                cloudName: "johnpaul",
                mediaAssets: [{ tag: `${product[0].tags}`, mediaType: "image" }]
            },
            []
        );
        productGallery.render();
    });

    return (
        <div className='relative mx-auto'>
            <div className="flex flex-col md:w-6/6 p-8 md:flex-row">
                <div className="md:w-4/6 md:h-96 px-5">
                    <div className='' id="gallery"></div>
                </div>
                <div className="price md:w-2/6">
                    <h3 className='text-3xl font-semibold'>{product[0].title}</h3>
                    <p className='text-lg'>
                        {product[0].desc}
                    </p>
                    <p>
                        <b>₦{product[0].discount_id && product[0].discount_id.isActive ? (product[0].price - (product[0].price * product[0].discount_id.discount_percent)) : product[0].price}</b> <br />
                        <small><s className={`${!product[0].discount_id ? 'hidden' : 'text-gray-500 decoration-gray-500'}`}>₦{product[0].discount_id && product[0].discount_id.isActive ? product[0].price : ''}</s></small>
                    </p>

                </div>
            </div>
        </div>
    );
};
export default Product;

export async function getStaticPaths() {
    const xata = new BaseClient({
        branch: 'main',
        apiKey: process.env.API_KEY,
        databaseURL: process.env.XATA_DATABASE_URL
    });


    const page = await xata.db.products
        .select(["*"]).getAll()

    const products = page
    const paths =
        products &&
        products.map((prod) => ({
            params: { id: prod.id }
        }));

    return {
        paths: paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const xata = new BaseClient({
        branch: 'main',
        apiKey: process.env.API_KEY,
        databaseURL: process.env.XATA_DATABASE_URL
    });


    const page = await xata.db.products
        .select(["*"])
        .getAll()

    const products = page
    const product =
        products && products.filter((prod) => params.id === prod.id);

    return {
        props: {
            product
        }
    };
}
