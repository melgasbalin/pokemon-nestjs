import { IsNumber, IsOptional, IsString, isString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {
                
        @IsString()
        @MinLength(3)
        name: string;    

        @IsString()
        @MinLength(3)
        type: string;    
      
        @IsNumber()
        @Min(10)       
        age:number;    
      
        @IsOptional()
        @IsString()
        created: string;

        @IsString()
        @MinLength(3)
        nombreEntrenador: string;
}
