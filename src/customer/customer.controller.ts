import { Controller, Get, Body, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customers } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomers(): Customers[] {
    return this.customerService.getAllCustomers();
  }

  @Post()
  createCustomer(@Body() dto: createCustomerDto) {
    return this.customerService.createCustomer(dto);
  }
}
