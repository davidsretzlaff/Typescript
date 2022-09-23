//using interface
interface ObjectValue{
    category:string;
    product?:string;
}
function show({category,product}:ObjectValue){
    console.log(category);
    console.log(product);
}
/*
// old
function show({category,product}:{category:string, product:string}){
    console.log(category);
    console.log(product);
}
*/
show({category:"Category",product:"product"});

let obj : ObjectValue = {category: 'category 1', product: 'product 1'};

class Product implements ObjectValue{
    category: string;
    product: string;
}

let product = new Product();
product.category = 'category';
product.product = 'product';
