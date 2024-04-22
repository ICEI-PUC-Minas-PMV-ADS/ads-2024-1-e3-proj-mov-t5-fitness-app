import { env } from 'process';
import { TypesLanguage } from './interface';
import { ingles, portuguesBR } from './languages';

export class Messages {
    public language() {
        const translation = env.TRANSLATION as TypesLanguage;

        switch (translation) {
            case 'pt-br':
                return { ...portuguesBR };
            case 'en':
                return { ...ingles };
            default:
                return { ...portuguesBR };
        }
    }
}
