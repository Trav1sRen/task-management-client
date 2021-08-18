import token from '@/models/token';
import task from '@/models/task';
import { IcestoreDispatch, IcestoreRootState, Models } from '@ice/store';
import { appModels } from '@/store';

interface IAppStoreModels extends Models {
  token: typeof token;
  task: typeof task;
}

type IRootDispatch = IcestoreDispatch<typeof appModels>;
type IRootState = IcestoreRootState<typeof appModels>;

export type { IAppStoreModels, IRootDispatch, IRootState };
