import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupCreateService } from './userGroup.service.create';

describe('UserGroupCreateService', () => {
    let service: UserGroupCreateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserGroupCreateService],
        }).compile();

        service = module.get<UserGroupCreateService>(UserGroupCreateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
