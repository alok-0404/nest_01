import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @Get()
    @UseGuards(AuthGuard) ///hamne is call ko restrict kr diya, authguard ka concept use krke hamy headers me authorization me token pass krna hoga
    getAllProducts(){
        return this.productService.getAllProduct()
    }

    @Get(':id')
    getProductById(@Param('id') id: string){
        return this.productService.getProductById(Number(id))//number is used to convert string to number
    }
}
