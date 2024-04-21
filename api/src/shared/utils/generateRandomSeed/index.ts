import { IGenerateRandomSeedProps } from './interfaces';

export const getRandomSeed = ({
    email,
    password,
}: IGenerateRandomSeedProps): number => {
    if (email.length < password.length) {
        return Math.floor(Math.random() * password.length) + email.length;
    } else if (email.length > password.length) {
        return Math.floor(Math.random() * email.length) + password.length;
    } else {
        return Math.floor(Math.random() * password.length + email.length) + 1;
    }
};
