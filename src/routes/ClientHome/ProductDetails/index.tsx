import { Link, useParams } from 'react-router-dom';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/produc-service';
import './styles.css';


export default function ProudctDetails() {

    const parms = useParams();

    const product = productService.findById(Number(parms.productId))

    return (

        <main>
            <section id="product-details-section" className="dsc-container">

                {
                    product &&
                    <ProductDetailsCard product={product} />
                }

                <div className="dsc-btn-page-container">
                    <ButtonPrimary text="Comprar" />
                    <Link to="/">
                        <ButtonInverse text="Inicio" />
                    </Link>

                </div>
            </section>
        </main>

    );
}