import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupDeletedService } from './userGroup.service.delete';

describe('UserGroupDeletedService', () => {
    let service: UserGroupDeletedService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserGroupDeletedService],
        }).compile();

        service = module.get<UserGroupDeletedService>(UserGroupDeletedService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
