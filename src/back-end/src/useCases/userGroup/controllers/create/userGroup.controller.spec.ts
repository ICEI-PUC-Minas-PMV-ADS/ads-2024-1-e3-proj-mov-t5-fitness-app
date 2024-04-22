import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupCreateService } from '../../services';
import { UserGroupCreateController } from './userGroup.controller.create';

describe('UserGroupCreateController', () => {
    let controller: UserGroupCreateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserGroupCreateController],
            providers: [UserGroupCreateService],
        }).compile();

        controller = module.get<UserGroupCreateController>(
            UserGroupCreateController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
