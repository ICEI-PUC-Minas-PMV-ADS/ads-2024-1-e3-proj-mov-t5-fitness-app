import crypto from 'crypto';
import { IResCodeExpiresIn } from './IGeneratorCode';

class GeneratorCode {
    public execute(expiresMin?: number): IResCodeExpiresIn {
        const currentDate = new Date();

        const code = crypto.randomBytes(4).toString('hex');

        const codeExpiresIn = new Date(
            currentDate.setMinutes(currentDate.getMinutes() + expiresMin),
        );

        return {
            codeExpiresIn,
            code,
        };
    }
}

export const generatorCodeService = new GeneratorCode();
