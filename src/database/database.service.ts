import { Injectable, OnModuleInit, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private isConnected = false;

    onModuleInit() {
        this.isConnected = true;
        console.log(`Data Base Connected`);
    }


    //signal , ye as a parameter liya ajata hai ke reso kya h apke app ke shut down hony ka apne taraf se ya production ka server gya h ye clar krta hai
    onApplicationShutdown(signal: string) {
this.isConnected = false;
console.log(`Data Base Disconnected due to application shut down. Signal ${signal}`) //jab khud se band kroge to terminal par"Data Base Disconnected due to application shut down. Signal SIGINT"shiw hoga
    }

    //getstatus ye koi event nai h ye sirf status ke liye h 

    getStatus(){
       return this.isConnected ? 'Connected' : 'Disconneted';
    }
}


/// an nest js direct ye method run  ni krge , iske kiye main.ts ki file me jakr call krwana hoga