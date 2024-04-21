import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupUpdateService } from './userGroup.service.update';

describe('UserGroupUpdateService', () => {
    let service: UserGroupUpdateService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserGroupUpdateService],
        }).compile();

        service = module.get<UserGroupUpdateService>(UserGroupUpdateService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
