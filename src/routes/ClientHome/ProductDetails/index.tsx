
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import { ProductDTO } from '../../../models/product';
import './styles.css';

const product: ProductDTO = {
    id: 2,
    name: "SmartTV",
    description: "Esta tv é top",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        }
    ]
}

export default function ProudctDetails() {
    return (

        <main>
            <section id="product-details-section" className="dsc-container">
                <ProductDetailsCard product={product} />
                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <ButtonInverse text="Inicio" />
                </div>
            </section>
        </main>

    );
}