import { HookContext } from '@feathersjs/feathers';
import { ISupportRequest, IUser } from '@valure/core';

const addUserInfo = () => async (context: HookContext) => {
  const supportRequest: ISupportRequest = context.data;

  if (context.params && context.params.user) {
    const user: IUser = context.params.user;

    supportRequest.user = user;

    context.data = supportRequest;
  }

  return context;
};

export { addUserInfo };
