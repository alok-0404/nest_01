import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService){}

    @Get()
    getCategories(){
        return this.categoryService.getCategories()
    }
}
