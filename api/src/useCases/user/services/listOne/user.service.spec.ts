import { Test, TestingModule } from '@nestjs/testing';
import { UserListOneService } from './user.service.listOne';

describe('UserListOneService', () => {
    let service: UserListOneService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserListOneService],
        }).compile();

        service = module.get<UserListOneService>(UserListOneService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
