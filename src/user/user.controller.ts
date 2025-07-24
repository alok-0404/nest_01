import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController{
    @Get()
    getUser(){
        return "i am alok sharma , learning nest js course"
    }
}