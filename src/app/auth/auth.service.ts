//#region Imports

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../interface/user.interface';
import { AuthPayload } from '../payload/auth.payload';

//#endregion

Injectable()
export class AuthService {

    //#region Public Properties

    public user: User;

    //#endregion

    //#region Public Methods

    public authentication(data: AuthPayload): User {
        const { username, password } = data;

        if (username != 'admin' || password != '123456') {
            throw new UnauthorizedException();
        }

        this.user = {
            age: 22,
            bio: 'Simplesmente o melhor jogador de futebol de botão',
            name: 'Administrador',
            permission: 'admin'
        }

        return this.user;
    }

    //#endregion

}