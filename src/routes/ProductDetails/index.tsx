import './styles.css'
import ButtonInverse from "../../Components/ButtonInverse";
import ButtonPrimary from "../../Components/ButtonPrimary";
import HeaderClient from "../../Components/HeaderClient";
import ProductDetailsCard from "../../Components/ProductDetailsCard";

export default function ProudctDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>

        </>
    );
}