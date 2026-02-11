import { ImageContainer, ProductContainer, ProductDetails } from "@/app/styles/pages/product";

export default function Loading() {
  return (
    <ProductContainer>
      <ImageContainer />
      <ProductDetails>
        <h1>Carregando...</h1>
        <span> </span>
        <p>Buscando informações do produto</p>
      </ProductDetails>
    </ProductContainer>
  )
}
