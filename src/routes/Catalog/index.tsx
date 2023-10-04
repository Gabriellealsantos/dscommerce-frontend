import './styles.css'
import HeaderClient from '../../Components/HeaderClient'
import SeachBar from '../../Components/SearchBar';
import CatalogCard from '../../Components/CatalogCard';
import ButtonNextPage from '../../Components/ButtonNextPage';


export default function Catalog() {

    return (
        <>
            <HeaderClient />
            <main>
                <section id="catalog-section" className="dsc-container">

                    <SeachBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                        <CatalogCard/>
                    </div>

                   <ButtonNextPage/>
                </section>
            </main>

        </>
    );
}