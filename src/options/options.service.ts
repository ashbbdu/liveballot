import { Injectable } from '@nestjs/common';
import { Option } from './options.entity';
import { OptionsRepository } from './options.repository';

@Injectable()
export class OptionsService {
    constructor (private readonly optionRepository : OptionsRepository) {};
    addOptions (data : any , user : any) {
        const option =  this.optionRepository.addOptions(data , user);

            return {
                message : "option created successfully",
                option
            }
        }

    getAllOptions () {
    return this.optionRepository.getAllOptions();
  }

}
