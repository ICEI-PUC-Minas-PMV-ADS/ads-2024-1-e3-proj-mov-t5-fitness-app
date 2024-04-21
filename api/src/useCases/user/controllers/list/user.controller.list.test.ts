import { Test, TestingModule } from '@nestjs/testing';
import { UserListAllService } from '../../services';
import { UserListAllController } from './user.controller.list';

describe('UserListAllController', () => {
    let controller: UserListAllController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserListAllController],
            providers: [UserListAllService],
        }).compile();

        controller = module.get<UserListAllController>(UserListAllController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
