import { Request, Response } from "express";
export declare const register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
/**-----------------------------------------------
 * @method  POST
 * @access  public
 ------------------------------------------------*/
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const auhthorization: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=authController.d.ts.map