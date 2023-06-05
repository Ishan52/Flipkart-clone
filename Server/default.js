import { products } from "./constants/data.js"
import Product from "./model/product_schema.js"

const DefaultData = async() =>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported successfully');
    } catch (error) {
        console.log('erron while reciving default data', error.message)
    }
}
export default DefaultData;