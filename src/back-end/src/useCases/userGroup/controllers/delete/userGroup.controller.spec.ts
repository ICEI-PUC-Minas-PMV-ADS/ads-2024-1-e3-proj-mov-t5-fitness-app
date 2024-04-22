import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupDeletedService } from '../../services';
import { UserDeletedController } from './userGroup.controller.delete';

describe('UserDeletedController', () => {
    let controller: UserDeletedController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserDeletedController],
            providers: [UserGroupDeletedService],
        }).compile();

        controller = module.get<UserDeletedController>(UserDeletedController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
