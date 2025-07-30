import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Roles } from 'src/guards/roles/roles.decorater';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    
    getAdminData(){
        return{message:'only admin can access'}
    }

@Get('user-data')
    get(){
        return{message:'anyone can acess can access'}
    }

}
