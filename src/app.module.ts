 import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { UserRolesController } from './user-roles/user-roles.controller';
import { LoggerMiddleware } from "./middleware/logger/logger.middleware";
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from "@nestjs/config";
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
@Module({
    controllers: [AppController, UserController, ProductController, MynameController, UserRolesController, DatabaseController, EvController],
    providers: [ProductService, DatabaseService, EvService],
    imports: [AuthModule, CategoryModule, StudentModule, CustomerModule, ConfigModule.forRoot({
        isGlobal: true,
    })],
    
})
export class AppModule implements NestModule{
configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
}
}