import { products } from "../data/products";
import SectionHeading from "../components/common/SectionHeading";
import ContactCTA from "../components/home/ContactCTA";

function Products() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">PRODUCTS</span>

          <h1>Tyres & Related Products</h1>

          <p>
            Product availability depends on tyre size, condition,
            suitability and current stock.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="PRODUCT RANGE"
            title="Tyre Solutions"
            description="Contact us to discuss current availability and your tyre requirements."
          />

          <div className="products-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-visual">
                  <span>AT</span>
                </div>

                <div className="product-content">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h2>{product.name}</h2>

                  <p>{product.description}</p>

                  <div className="product-availability">
                    {product.availability}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

export default Products;