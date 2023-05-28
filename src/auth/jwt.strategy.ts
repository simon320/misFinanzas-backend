import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

 @Injectable()
 export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: 'MI SEMILLA _ MIS FINANZAS',
        });
    }

    async validate(payload: any) {
        return { userId: payload._id, name: payload.name };
    }
 }