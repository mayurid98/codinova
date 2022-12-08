export interface Product{
    includes(caegory: any): unknown;
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rating
}
export interface Rating{
    rate:number;
    count:number
}