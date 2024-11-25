import { Request, Response } from "express"; 
import { RemoveOrderService } from "../../services/Orders/RemoveOrderService";


class RemoveOrderController{
    async handle(req: Request ,res: Response){

        const order_id = req.query.order_id as string;

        const removeOrder = new RemoveOrderService();

        const remove = await removeOrder.execute({
            order_id
        })

        return res.json(remove);
    }
}


export {RemoveOrderController}