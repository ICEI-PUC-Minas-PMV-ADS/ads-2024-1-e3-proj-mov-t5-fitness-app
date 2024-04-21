import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupListAllService } from '../../services';
import { UserGroupListAllController } from './userGroup.controller.list';

describe('UserGroupListAllController', () => {
    let controller: UserGroupListAllController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserGroupListAllController],
            providers: [UserGroupListAllService],
        }).compile();

        controller = module.get<UserGroupListAllController>(
            UserGroupListAllController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
