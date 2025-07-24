import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @Get()
    getAllProducts(){
        return this.productService.getAllProduct()
    }

    @Get(':id')
    getProductById(@Param('id') id: string){
        return this.productService.getProductById(Number(id))//number is used to convert string to number
    }
}
