import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateService } from './user.service.create';

describe('UserCreateService', () => {
    let service: UserCreateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserCreateService],
        }).compile();

        service = module.get<UserCreateService>(UserCreateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
