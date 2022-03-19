//#region Imports

import { Body, Controller, Get } from "@nestjs/common";
import { User } from "../interface/user.interface";
import { AuthPayload } from "../payload/auth.payload";
import { AuthService } from "./auth.service";

//#endregion

@Controller('auth')
export class AuthController {

    //#region Constructor

    constructor(
        private readonly authService: AuthService
    ) { }

    //#endregion

    //#region Public Methods

    @Get('login')
    public authentication(@Body() data: AuthPayload): User {
        return this.authService.authentication(data);
    }

    //#endregion

}