import { SetMetadata } from "@nestjs/common";
//setdatamata ka kam hota h apki multiple value ko inject karwana decorator (jo hum khud banaye h) : built in decorator: @controller, @get jo nest js provide krta hai

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY,roles )
 