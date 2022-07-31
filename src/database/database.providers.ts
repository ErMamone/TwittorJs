import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    //HICE CAGADA MAN *TODO
    //Ver q mierda pasa aca, estaba insertando en test
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://tuvieja123:tuvieja123@twitternigo.lyze2.mongodb.net/?retryWrites=true&w=majority'),
  },
];