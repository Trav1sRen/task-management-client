import token from '@/models/token';
import tasks from '@/models/tasks';
import { IcestoreDispatch, IcestoreRootState, Models } from '@ice/store';
import { appModels } from '@/store';

interface IAppStoreModels extends Models {
  token: typeof token;
  tasks: typeof tasks;
}

type IRootDispatch = IcestoreDispatch<typeof appModels>;
type IRootState = IcestoreRootState<typeof appModels>;

export type { IAppStoreModels, IRootDispatch, IRootState };
