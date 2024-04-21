import { Test, TestingModule } from '@nestjs/testing';
import { UserListOneService } from '../../services';
import { UserListOneController } from './user.controller.listOne';

describe('UserListOneController', () => {
    let controller: UserListOneController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserListOneController],
            providers: [UserListOneService],
        }).compile();

        controller = module.get<UserListOneController>(UserListOneController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
