import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupListOneService } from './userGroup.service.listOne';

describe('UserGroupListOneService', () => {
    let service: UserGroupListOneService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserGroupListOneService],
        }).compile();

        service = module.get<UserGroupListOneService>(UserGroupListOneService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
