import { Test, TestingModule } from '@nestjs/testing';
import { AuthLoginService } from './auth.service.login';

describe('AuthLoginService', () => {
    let service: AuthLoginService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AuthLoginService],
        }).compile();

        service = module.get<AuthLoginService>(AuthLoginService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
