import {Request, Response} from 'express'
import { RemoveItemService } from '../../services/Orders/RemoveItemService'

class RemoveItemController{
  async handle(req: Request, res: Response){
    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItemService();

    const remove = await removeItemService.execute({
      item_id
    })

    return res.json(remove);

  }
}

export { RemoveItemController }