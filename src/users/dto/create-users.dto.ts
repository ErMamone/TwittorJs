import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ 
        example: 'ID del usuario',
    })
    readonly _id: string;

    @ApiProperty({ 
        example: 'Carlos, Roberto',
    })
    readonly nombre: string;

    @ApiProperty({ 
        example: 'Gonzales, Mamaguebo',
    })
    readonly apellido: string;

    @ApiProperty({ 
        example: '2020-12-31T03:00:00.000Z',
    })
    readonly fechaNacimiento: string;

    @ApiProperty({ 
        example: 'carlos@mail.com',
    })
    readonly email: string;

    @ApiProperty({ 
        example: 'password sin cifracion',
    })
    readonly password: string;

    @ApiProperty({ 
        example: 'www.google.com/images',
    })
    readonly avatar: string;
    
    @ApiProperty({ 
        example: 'lo mismo que el avatar culiau',
    })
    readonly banner: string;
    
    @ApiProperty({ 
        example: 'q decis devos a',
    })
    readonly biografia: string;
    
    @ApiProperty({ 
        example: 'onde tas',
    })
    readonly ubicacion: string;
    
    @ApiProperty({ 
        example: 'onde te reconoces?',
    })
    readonly sitioWeb: string;
}