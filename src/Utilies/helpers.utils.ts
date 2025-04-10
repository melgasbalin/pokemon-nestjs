import {
  BadRequestException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import * as dayjs from 'dayjs';

export class Utils {
  private static readonly logger = new Logger('Utils');

  // Manejo de errores
  static handleExceptions(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

  // Obtener fecha formateada (dd/mm/yyyy)
  static getDate(): string {
    const date = new Date();

    const getCorrectMonth = () => {
      const month = date.getMonth() + 1;
      return month < 10 ? `0${month}` : `${month}`;
    };

    const getCorrectDay = () => {
      const day = date.getDate();
      return day < 10 ? `0${day}` : `${day}`;
    };

    return `${getCorrectDay()}/${getCorrectMonth()}/${date.getFullYear()}`;
  }

  // Obtener la edad con la libreria daysJs
  static calcularEdad = (birhtDate: string): number => {
    const today = dayjs();
    const convertBirth = dayjs(birhtDate, 'DD/MM/YYYY');
    return today.diff(convertBirth, 'year');
  };
}
