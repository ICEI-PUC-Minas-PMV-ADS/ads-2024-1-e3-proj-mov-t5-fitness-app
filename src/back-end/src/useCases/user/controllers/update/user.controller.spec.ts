import { Test, TestingModule } from '@nestjs/testing';
import { UserUpdateService } from '../../services';
import { UserUpdateController } from './user.controller.update';

describe('UserUpdateController', () => {
    let controller: UserUpdateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserUpdateController],
            providers: [UserUpdateService],
        }).compile();

        controller = module.get<UserUpdateController>(UserUpdateController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
