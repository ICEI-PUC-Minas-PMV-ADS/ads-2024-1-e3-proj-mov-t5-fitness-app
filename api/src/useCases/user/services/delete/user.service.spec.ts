import { Test, TestingModule } from '@nestjs/testing';
import { UserDeletedService } from './user.service.delete';

describe('UserDeletedService', () => {
    let service: UserDeletedService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserDeletedService],
        }).compile();

        service = module.get<UserDeletedService>(UserDeletedService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
