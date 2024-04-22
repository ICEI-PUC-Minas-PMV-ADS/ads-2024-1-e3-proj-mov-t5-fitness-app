import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupListOneService } from '../../services';
import { UserListOneController } from './userGroup.controller.listOne';

describe('UserListOneController', () => {
    let controller: UserListOneController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserListOneController],
            providers: [UserGroupListOneService],
        }).compile();

        controller = module.get<UserListOneController>(UserListOneController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
