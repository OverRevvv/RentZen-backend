import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/createItemDTO';
import { UpdateItemDto } from './dto/updateItemDTO';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get('all')
  @HttpCode(200)
  async getAllItems(): Promise<any> {
    return await this.itemService.getAllItems();
  }

  @Post('create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createItem(@Body() createItemDto: CreateItemDto): Promise<string> {
    return await this.itemService.createItem(createItemDto);
  }

  @Put('update')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async updateItem(
    @Body() updateItem: UpdateItemDto,
    @Query('id') itemID: string,
  ): Promise<string> {
    return await this.itemService.updateItem(itemID, updateItem);
  }
}
