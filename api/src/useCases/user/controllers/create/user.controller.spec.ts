import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateService } from '../../services';
import { UserCreateController } from './user.controller.create';

describe('UserCreateController', () => {
    let controller: UserCreateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserCreateController],
            providers: [UserCreateService],
        }).compile();

        controller = module.get<UserCreateController>(UserCreateController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
