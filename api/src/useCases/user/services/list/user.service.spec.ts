import { Test, TestingModule } from '@nestjs/testing';
import { UserListAllService } from './user.service.list';

describe('UserListAllService', () => {
    let service: UserListAllService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserListAllService],
        }).compile();

        service = module.get<UserListAllService>(UserListAllService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
