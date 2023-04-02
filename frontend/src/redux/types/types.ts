
export interface IProduct {
    stock: string,
    category: string,
    description: string,
    name: string,
    numOfReviews: string,
    price: number,
    rating: number
    images: {
        public_ID: string,
        url: string,
        _id:string
    }[]
};

export interface IProductResponse{
    filteredProductsCount : number,
    products: IProduct[]
    productsCount: number,
    resultPerPage: number,
    success: boolean
}

