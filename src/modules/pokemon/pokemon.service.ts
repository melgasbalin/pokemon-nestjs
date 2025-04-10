import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';
import { Utils } from 'src/Utilies/helpers.utils';
import { PaginatedResult } from 'src/Utilies/paginatedResult.util';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PokemonService {

  constructor(
    @InjectRepository(Pokemon)
    private readonly PokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.created = Utils.getDate();
    try {
      const createPatient = this.PokemonRepository.create(createPokemonDto);
      await this.PokemonRepository.save(createPatient);
      return createPatient;
    } catch (error) {
      console.log(error)
      Utils.handleExceptions(error)
    }
    return createPokemonDto;
  }


  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0, page = 1 } = paginationDto;
    let calculateOffset = offset;
    if (offset === 0 && page !== 1) {
      calculateOffset = page * limit - limit;
    }
    const [pokemons, total] = await this.PokemonRepository.findAndCount({
      take: limit,
      skip: calculateOffset,
      order: { id: 'ASC' },
    });

    const currentPage = page;
    const baseUrl = 'pokemon';
    return new PaginatedResult(pokemons, limit, currentPage, total, baseUrl);
  }


  async findOne(id: number) {
    const pokemon = await this.PokemonRepository.findOneBy({
      id,
    });
    if (!pokemon)
      throw new NotFoundException('pokemon with id ${patientUuid} not found');   

    return pokemon;
  }

  async update(id: number, updatePokemonDto: UpdatePokemonDto) {
    //await this.findOne(id);
    try {
      await this.PokemonRepository.update(id, updatePokemonDto);

      return updatePokemonDto ;
    } catch (error) {
      Utils.handleExceptions(error);
    }
  }



async remove(id: number) {
  const { affected } = await this.PokemonRepository.delete(id);

  if (affected !== 0)
    return {
      sucess: true,
      message: 'Delete element',
    };
  else
    return {
      sucess: false,
      message: 'Cant found element',
      };
  }
}
