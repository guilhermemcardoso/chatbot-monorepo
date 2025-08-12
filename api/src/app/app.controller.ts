import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { helloChatbot } from '@chatbot-core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('chat')
  async chat(@Query('q') q: string) {
    const reply = await helloChatbot(q || 'Olá mundo');
    return { reply };
  }
}
