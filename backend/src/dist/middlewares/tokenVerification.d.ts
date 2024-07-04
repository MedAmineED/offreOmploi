import { NextFunction, Request, Response } from "express";
import User from "../dbConfig/models/User";
declare module "express-serve-static-core" {
    interface Request {
        user?: User | null;
    }
}
export declare const tokenVerification: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=tokenVerification.d.ts.map