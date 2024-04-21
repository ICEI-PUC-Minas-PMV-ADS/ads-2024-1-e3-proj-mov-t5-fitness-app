import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupListAllService } from './userGroup.service.list';

describe('UserGroupListAllService', () => {
    let service: UserGroupListAllService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserGroupListAllService],
        }).compile();

        service = module.get<UserGroupListAllService>(UserGroupListAllService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
