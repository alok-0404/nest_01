import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class EvService {
    constructor( private configueService: ConfigService){}

    getDbUrl(){
        return this.configueService.get<string>('DATABASE_URL')
    }
}
