 import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { AuthModule } from './auth/auth.module';
@Module({
    controllers: [AppController, UserController, ProductController],
    providers: [ProductService],
    imports: [AuthModule],
    
})
export class AppModule{

}