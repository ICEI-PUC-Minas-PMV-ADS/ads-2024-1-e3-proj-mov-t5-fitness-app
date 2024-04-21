import { Test, TestingModule } from '@nestjs/testing';
import { UserDeletedService } from '../../services';
import { UserDeletedController } from './user.controller.delete';

describe('UserDeletedController', () => {
    let controller: UserDeletedController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserDeletedController],
            providers: [UserDeletedService],
        }).compile();

        controller = module.get<UserDeletedController>(UserDeletedController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
