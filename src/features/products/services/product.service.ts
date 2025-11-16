import { type Product } from "../schemas/products.schema";

const STORAGE_KEY = "products";

export const ProductsService = {

  getProducts(): Product[] {
    if (typeof window === "undefined") return []; // para evitar erro SSR por causa do localStorage
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      return [];
    }
  },
 
  getProductById(id: string): Product | undefined {
    return this.getProducts().find((p) => p.id === id);
  },
  
  createProduct(product: Product): Product {
    const products = this.getProducts();
    const newProduct: Product = {
      ...product,
      id: product.id || crypto.randomUUID(),
      createdAt: product.createdAt || new Date().toISOString(),
    };

    const updatedProducts = [...products, newProduct];
    this.saveProducts(updatedProducts);

    return newProduct;
  },
 
  updateProduct(updated: Product): Product | null {
    const products = this.getProducts();
    const exists = products.some(product => product.id === updated.id);

    if (!exists) {
      console.warn(`Produto com id ${updated.id} não encontrado.`);
      return null;
    }

    const updatedProducts = products.map(product =>
      product.id === updated.id ? { ...product, ...updated } : product
    );

    this.saveProducts(updatedProducts);
    return updated;
  },
 
  deleteProduct(id: string): void {
    const products = this.getProducts();
    const updatedProducts = products.filter((p) => p.id !== id);
    this.saveProducts(updatedProducts);
  },
  
  saveProducts(products: Product[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (error) {
      console.error("Erro ao salvar produtos:", error);
    }
  }
}
