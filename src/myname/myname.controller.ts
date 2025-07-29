import { Controller, Post, Body, UsePipes, Get } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {


    private customers: string[] = []; 
    @Get('customer')
    getAllCustomers() {
      return { customers: this.customers };
    }

//   @Post('customer')
//   @UsePipes(UppercasePipe)
//   createCustomer(@Body('name') name: string) {
//     return { name };
//   }

  @Post('customer')
  @UsePipes(UppercasePipe)
  transformCustomerName(@Body('name') name: string) {
    this.customers.push(name);
    return { message: `customer name is: ${name}` };
  }
}
