import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupUpdateService } from '../../services';
import { UserGroupUpdateController } from './userGroup.controller.update';

describe('UserGroupUpdateController', () => {
    let controller: UserGroupUpdateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserGroupUpdateController],
            providers: [UserGroupUpdateService],
        }).compile();

        controller = module.get<UserGroupUpdateController>(
            UserGroupUpdateController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
