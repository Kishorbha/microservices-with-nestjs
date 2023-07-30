import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrder } from './dto/create.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() body: CreateOrder) {
    return this.ordersService.createOrder(body);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
