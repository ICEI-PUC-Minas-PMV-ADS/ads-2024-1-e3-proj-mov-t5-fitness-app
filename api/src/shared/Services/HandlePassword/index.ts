import * as bcrypt from 'bcrypt';

export class HandlePassword {
    async generateHash(password: string): Promise<string> {
        const seed = Math.floor(Math.random() * 10) + 1;
        return await bcrypt.hash(password, seed);
    }

    async verify(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}
