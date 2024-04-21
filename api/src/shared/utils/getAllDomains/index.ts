import { Request } from 'express';
import { env } from 'process';

export const getDomain = (req: Request) => {
    const [, domain] = req.headers.host.split(':')[0].split('.');
    return env.NODE_ENV === 'local' ? 'localhost' : `${domain}.com.br`;
};
