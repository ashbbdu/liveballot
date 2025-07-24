import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { OptionsService } from './options.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('options')
export class OptionsController {
    constructor (private readonly optionService : OptionsService) {};
    @Post("/create")
    addOptions (@Body() data : any , @Request() req : any) {
        console.log(data ,"data");
        
        const user = req.user;
        return this.optionService.addOptions(data , user);
    }    
}
