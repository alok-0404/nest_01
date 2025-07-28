import { Injectable } from '@nestjs/common';
import { Customers } from './interfaces/customer.interface';
import { createCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private  customers: Customers [] = [];

    getAllCustomers(): Customers[]{
        return this.customers
    }

    createCustomer(dto: createCustomerDto): Customers {
        const newCustomer: Customers = {
            id: this.customers.length + 1,
            name: dto.name,
            age: dto.age,
            mobile: dto.mobile,
            profile: dto.profile,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

}
